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
      this.$store.state.progress = {
         width: 5,
         size: 80,
         pageText: 'الرجاء الإنتظار حتى تحميل الصفحة',
         lessonText:'الرجاء الإنتظار حتى تحميل الدرس'
      }
      this.$store.dispatch('getImgUrl', 'icons/logo.png').then(img => {
         this.$store.state.logo = img
      }).catch(error => {
         throw new Error(error.message)
      })
      this.$store.dispatch('getImgUrl', 'icons/icon.png').then(img => {
         this.$store.state.icon = img
      }).catch(error => {
         throw new Error(error.message)
      })
      this.$store.dispatch('getImgUrl', 'icons/forums-logo.png').then(img => {
         this.$store.state.forumLogo = img
      }).catch(error => {
         throw new Error(error.message)
      })
      this.$store.state.css.workshops.drawerWidth = 350
      document.querySelector('html').setAttribute('lang', this.$store.state.lang)
      document.querySelector('html').setAttribute('dir', this.$store.state.direction)
   },
   mounted() {
      updateHeader()
   },
   updated() {
      updateHeader()
   }
}

function updateHeader() {
   const isAbout = document.querySelector('#about')

   function subHeader() {
      if (isAbout) {
         if (window.scrollY >= 100) {
            header.classList.add('fixed-header')
         } else {
            header.classList.remove('fixed-header')
         }
      } else {
         header.classList.remove('fixed-header')
      }
   }
   const header = document.querySelector('header')

   window.addEventListener('scroll', subHeader)
}
