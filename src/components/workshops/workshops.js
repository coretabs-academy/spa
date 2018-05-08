export default {
   name: 'WorkshopsComponent',
   components: {},
   data: () => ({
      height: 0,
      loaded: false,
      workshops: [],
      title: 'قائمة ورش العمل',
      drawer: {
         isOpen: true,
         isRight: false
      },
      current: {
         workshop: {
            id: '',
            index: '',
            title: ''
         }
      }
   }),
   created() {
      this.drawer.isRight = this.$store.state.direction === 'rtl'
      this.$store.commit('getGithubFileURL', {
         repo: `${this.$route.params.track}-tutorials`,
         path: 'workshops.json'
      })
      this.$http.get(this.$store.state.githubFileURL)
         .then(data => {
            data.forEach((workshop, index) => {
               this.workshops.push({
                  id: workshop.id,
                  index: index + 1,
                  url: {
                     name: 'workshop',
                     params: {
                        workshop: workshop.slug,
                     }
                  },
                  title: workshop.title[this.$store.state.lang]
               })
               if (index === data.length - 1) {
                  if (typeof this.$route.params.workshop === 'undefined') {
                     this.$router.push({
                        name: 'workshop',
                        params: {
                           workshop: this.workshops[0].url.params.workshop
                        }
                     })
                  } else {
                     let workshop = this.workshops[this.getWorkshopId()]
                     this.current.workshop = {
                        id: workshop.id,
                        index: workshop.index,
                        title: workshop.title
                     }
                  }
                  this.loaded = true
               }
            })
         }).catch(err => {
            console.error(err)
         })
   },
   watch: {
      $route(to, from) {
         let workshop = this.workshops[this.getWorkshopId()]
         this.current.workshop = {
            id: workshop.id,
            index: workshop.index,
            title: workshop.title
         }
      }
   },
   methods: {
      onResize() {
         if (document.querySelector('.workshops >.toolbar') !== null) {
            this.height = window.innerHeight - document.querySelector('.workshops >.toolbar').offsetHeight
         } else {
            let self = this
            setTimeout(() => {
               self.height = window.innerHeight - document.querySelector('.workshops >.toolbar').offsetHeight
            }, 1000)
         }
      },
      getWorkshopId() {
         let index = this.workshops.findIndex(function(workshop) {
            return this.$route.params.workshop === workshop.url.params.workshop
         }.bind(this))
         if (index === -1) {
            this.$router.push('/404')
         } else {
            return index
         }
      }
   }
}
