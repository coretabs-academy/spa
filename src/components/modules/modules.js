import ModulesNavComponent from '../modules-nav/modules-nav.vue'
import WorkshopHeaderComponent from '../workshop-header/workshop-header.vue'
export default {
   name: 'ModulesComponent',
   components: {
      ModulesNavComponent,
      WorkshopHeaderComponent
   },
   data: () => ({
      height: 0,
      modules: [],
      loaded: false,
      drawer: {
         isOpen: true,
         isRight: false
      },
      current: {
         lesson: {},
         workshopURL: ''
      }
   }),
   created() {
      this.$on('toggle-drawer', function(data) {
         this.drawer.isOpen = !this.drawer.isOpen
      })
      this.drawer.isRight = this.$store.state.direction === 'rtl'
      let modulesData = this.$route.params.modules
      if (typeof modulesData === 'undefined') {
         this.getModules()
      } else {
         this.modules = modulesData
         this.getCurrentLesson(this.$api.getModuleId(this.modules).lessons)
         this.current.workshopURL = {
            name: 'workshop',
            params: {
               workshop: this.$route.params.workshop,
            }
         }
         this.loaded = true
      }
   },
   watch: {
      $route(to, from) {
         this.current.lesson = this.$api.getLessonId(this.$api.getModuleId(this.modules).lessons)
      }
   },
   methods: {
      getModules() {
         this.$store.commit('getGithubFileURL', {
            repo: `${this.$route.params.track}-tutorials`,
            path: 'workshops.json'
         })
         this.$api.getWorkshopsData(this.$store.state.githubFileURL)
            .then(data => {
               let workshop = this.$api.getWorkshopId(data)
               this.modules = workshop.modules
               this.current.workshopURL = workshop.url
               let module = this.$api.getModuleId(this.modules)
               if (typeof module !== 'undefined') {
                  this.getCurrentLesson(module.lessons)
                  this.loaded = true
               } else {
                  this.$router.push('/404')
               }
            }).catch(err => {
               console.error(err)
            })

      },
      getCurrentLesson(lessons) {
         if (typeof this.$route.params.lesson !== 'undefined') {
            this.current.lesson = this.$api.getLessonId(lessons)
         } else {
            this.current.lesson = lessons[0]
            this.$router.push({
               name: 'lessons',
               params: {
                  lesson: this.current.lesson.url.params.lesson
               },
               query: this.current.lesson.url.query
            })
         }
      },
      onResize() {
         let selector = '.modules >.workshop-header >.toolbar'
         if (document.querySelector(selector) !== null) {
            this.height = window.innerHeight - document.querySelector(selector).offsetHeight
         } else {
            let self = this
            setTimeout(() => {
               self.height = window.innerHeight - document.querySelector(selector).offsetHeight
            }, 100)
         }
      }
   }
}
