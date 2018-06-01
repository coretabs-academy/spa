import WorkshopHeaderComponent from '../workshop-header/workshop-header.vue'
export default {
   name: 'WorkshopsComponent',
   components: {
      WorkshopHeaderComponent
   },
   data: () => ({
      height: 0,
      loaded: true,
      timeout: null,
      title: 'الإعدادات',
      header: '',
      drawer: {
         isOpen: true,
         isRight: false
      },
      i18n: {
          editPersonalInfo: 'تعديل المعلومات الشخصية',
          changePath: 'تغيير المسار',
          changePassword: 'تغيير كلمة السر'
      }
   }),
   created() {
      this.$on('toggle-drawer', function(data) {
         this.drawer.isOpen = !this.drawer.isOpen
      })
      this.drawer.isRight = this.$store.state.direction === 'rtl'
      this.header = this.i18n.editPersonalInfo
   },
   updated() {
   },
   watch: {
      $route(to, from) {
          switch (to.name) {
              case 'editPersonalInfo':
              this.header = this.i18n.editPersonalInfo
                  break
              case 'changePath':
              this.header = this.i18n.changePath
                  break
              case 'changePassword':
              this.header = this.i18n.changePassword
                  break
          }
      }
   },
   methods: {
   }
}
