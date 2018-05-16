import WorkshopHeaderComponent from '../workshop-header/workshop-header.vue'
export default {
   name: 'WorkshopsComponent',
   components: {
      WorkshopHeaderComponent
   },
   data: () => ({
      height: 0,
      loaded: false,
      timeout: null,
      workshops: [],
      title: 'قائمة ورش العمل',
      drawer: {
         isOpen: true,
         isRight: false
      },
      current: {
         workshop: {}
      }
   }),
   created() {
      this.$on('toggle-drawer', function(data) {
         this.drawer.isOpen = !this.drawer.isOpen
      })
      this.$on('clearTimeout', function(data) {
         clearTimeout(this.timeout)
      })
      this.drawer.isRight = this.$store.state.direction === 'rtl'
      this.$store.commit('getGithubFileURL', {
         repo: `${this.$route.params.track}-tutorials`,
         path: 'workshops.json'
      })
      this.$api.getWorkshopsData(this.$store.state.githubFileURL)
         .then(data => {
            this.workshops = data
            if (typeof this.$route.params.workshop === 'undefined') {
               this.$router.push({
                  name: 'workshop',
                  params: {
                     workshop: this.workshops[0].url.params.workshop
                  }
               })
            } else {
               this.current.workshop = this.$api.getWorkshopId(this.workshops)
            }
            this.loaded = true
         }).catch(err => {
            console.error(err)
         })
   },
   updated() {
      document.querySelectorAll('#sidenav .stepper__step__step').forEach((stepper, index) => {
         stepper.setAttribute('data-index', index + 1)
         if (this.workshops[index].shown_percentage !== 0 && this.workshops[index].shown_percentage !== 100) {
            stepper.style.background = this.progress(this.workshops[index].shown_percentage)
         }
      })
   },
   watch: {
      $route(to, from) {
         this.current.workshop = this.$api.getWorkshopId(this.workshops)
      }
   },
   methods: {
      onResize() {
         let selector = '.workshops >.workshop-header >.toolbar'
         if (document.querySelector(selector) !== null) {
            this.height = window.innerHeight - document.querySelector(selector).offsetHeight
         } else {
            let self = this
            this.timeout = setTimeout(() => {
               self.height = window.innerHeight - document.querySelector(selector).offsetHeight
            }, 100)
         }
      },
      progress(percent) {
         let maxPercent = 100
         let increment = 360 / maxPercent
         let half = Math.round(maxPercent / 2)
         let gradient = ''
         if (percent < half) {
            let nextdeg = 90 + (increment * percent)
            gradient = `linear-gradient(90deg, var(--workshop-normal-state) 50%, transparent 50%, transparent),linear-gradient(${nextdeg}deg, var(--workshop-complete-state) 50%, var(--workshop-normal-state) 50%, var(--workshop-normal-state))`
         } else {
            let nextdeg = -90 + (increment * (percent - half))
            gradient = `linear-gradient(${nextdeg}deg, var(--workshop-complete-state) 50%, transparent 50%, transparent),linear-gradient(270deg, var(--workshop-complete-state) 50%, var(--workshop-normal-state) 50%, var(--workshop-normal-state))`
         }
         return gradient
      }
   }
}
