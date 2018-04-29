import HeaderComponent from './components/header/header.vue'
export default {
   name: 'app',
   components: {
      HeaderComponent
   },
   data: () => ({}),
   created() {
      this.$store.state.lang = 'ar'
      this.$store.state.direction = 'rtl'
      this.$store.dispatch('getImgUrl', 'images/logo.png').then(img => {
         this.$store.state.logo = img
      }).catch(error => {
         throw new Error(error.message)
      })
      this.$store.dispatch('getImgUrl', 'images/icon.png').then(img => {
         this.$store.state.icon = img
      }).catch(error => {
         throw new Error(error.message)
      })
      this.$store.dispatch('getImgUrl', 'images/forum_logo.png').then(img => {
         this.$store.state.forumLogo = img
      }).catch(error => {
         throw new Error(error.message)
      })
      document.querySelector('html').setAttribute('lang', this.$store.state.lang)
      document.querySelector('html').setAttribute('dir', this.$store.state.direction)
   }
}
