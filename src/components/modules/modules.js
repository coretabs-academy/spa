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
      drawer: {
         isOpen: true,
         isRight: false
      }
   }),
   created() {
      this.$on('toggle-drawer', function(data) {
         this.drawer.isOpen = !this.drawer.isOpen
      })
      this.drawer.isRight = this.$store.state.direction === 'rtl'
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
            }, 1000)
         }
      }
   }
}
