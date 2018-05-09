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
      loaded: true,
      drawer: {
         isOpen: true,
         isRight: false
      },
      current: {
         lesson: {}
      },
   }),
   props: ['modules'],
   created() {
      this.$on('toggle-drawer', function(data) {
         this.drawer.isOpen = !this.drawer.isOpen
      })
      this.drawer.isRight = this.$store.state.direction === 'rtl'
   },
   watch: {
      $route(to, from) {

      }
   },
   methods: {
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
      },
      getLessonId() {
         let index = this.$store.state.modules.findIndex(function(module) {
            return this.$route.params.workshop === workshop.url.params.workshop
         }.bind(this))
         if (index === -1) {
            this.$router.push('/404')
         } else {
            return index
         }
      },
   }
}
