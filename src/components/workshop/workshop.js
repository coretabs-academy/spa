import ModulesNavComponent from '../modules-nav/modules-nav.vue'
export default {
   name: 'WorkshopComponent',
   components: {
      ModulesNavComponent
   },
   data: () => ({
      start: 'بدأ',
      loaded: true
   }),

   props: ['workshop'],
   created() {

   },
   watch: {
      $route(to, from) {}
   },
   methods: {
      goToLessons(url) {
         this.$parent.$emit('clearTimeout')
         this.$router.push({
            name: 'modules',
            params: {
               module: 'collo',
               modules: this.workshop.modules
            }
         })
      }
   }
}
