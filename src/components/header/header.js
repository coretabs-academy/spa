export default {
      name: 'HeaderComponent',
      components: {},
      data: () => ({
         navs: [],
         show: true,
         currentClass: '',
         default_navs: [{
            url: '/signin',
            dropdown: false,
            radius: true,
            name: 'تسجيل الدخول'
         }, {
            url: '/about',
            dropdown: false,
            name: 'عن الأكاديمية'
         }],
         user_navs: [{
            url: '/logout',
            name: 'خروج',
            dropdown: false
         }],
         admin_navs: [],
         fixed: false,
         drawer: {
            width: 0,
            isOpen: false,
            isRight: false
         }
      }),
      created() {
         this.setHeader()
         this.drawer.width = window.innerWidth
         this.drawer.isRight = this.$store.state.direction === 'rtl'
      },
      watch: {
         $route(to, from) {
            this.setHeader()
            let el = document.querySelector('main.content')
            el.className = ''
            el.classList.add('content')
            el.classList.add(this.currentClass)
         }
      },
      mounted() {
         let el = document.querySelector('main.content')
         el.className = ''
         el.classList.add('content')
         el.classList.add(this.currentClass)
      },
      methods: {
         setHeader() {
            this.currentClass = `${this.$route.name}-main-content`
            switch (this.$route.name) {
               case 'home':
               case 'page':
               case 'about':
               case 'contact-us':
               case 'signin':
               case 'signup':
               case 'congratulations':
               case 'account-confirmed':
               case 'select-track':
               case 'reset-password':
               case 'forgot-password':
               case 'tracks':
                  this.show = true
                  this.navs = this.default_navs
                  break
               case '404':
               case 'lessons':
               case 'modules':
               case 'workshop':
               case 'workshops':
                  this.show = false
                  break
            }
         },
         toggleDrawer() {
            this.drawer.isOpen = !this.drawer.isOpen
         }
      }
   }

