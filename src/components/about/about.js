import * as data from './desc-box.json'
import * as testimonials from './testimonials.json'
import * as team from './coretabs-team.json'
import * as mentors from './mentors.json'

export default {
   name: 'AboutComponent',
   components: {},
   data: () => ({
      imageSrc: [],
      quotationIcon: '',
      starIcon: '',
      testimonials,
      icons: {
        facebook: '',
        twitter: '',
        behance: '',
        website: ''
      },
      teamImages: [],
      mentorsImages: [],
      options: {
        draggable: true,
        duration: 500,
        easing: 'ease-out',
        perPage: 4,
        startIndex: 0,
        rtl: false
      },
      leftImage: '',
      rightImage: '',
      currentSlide: 0
   }),
   watch: {
     currentSlide() {
       let currentSlide = this.currentSlide / 4
       if ((n => n === +n && n === (n | 0))(currentSlide)) {
         let children = this.$refs.controls.children
         for (var i = 0; i < children.length; i++) {
           children[i].classList.remove('active')
         }
         children[this.perPage() - (currentSlide + 1)].classList.add('active')
        }
      }
   },
   methods: {
     getImageSrc(i) {
       return this.imageSrc[i]
     },
     getIcon(name) {
       return this.icons[name]
     },
     getTeamSrc(i) {
       return this.teamImages[i]
     },
     getMentorsSrc(i) {
       return this.mentorsImages[i]
     },
     prev() {
       this.$refs.siema.prev(1)
     },
     next() {
       this.$refs.siema.next(1)
     },
     getImage(s) {
       return s === 'left' ? this.leftImage : this.rightImage
     },
     show(i, e) {
       let children = e.currentTarget.parentElement.children
       for (let i = 0; i < children.length; i++) {
         children[i].classList.remove('active')
       }
       e.currentTarget.classList.add('active')
       this.$refs.siema.goTo(mentors.length - this.options.perPage * (i + 1))
     },
     perPage() {
       return Math.ceil(mentors.length / this.options.perPage)
     }
   },
   computed: {
     descriptions: () => data,
     coretabsTeam: () => team,
     mentors: () => mentors
   },
   created() {
     for (let k of data) {
       this.$store.dispatch('getImgUrl', `images/${k.src}.svg`).then(img => {
          this.imageSrc.push(img)
       }).catch(error => {
          throw new Error(error.message)
       })
     }

      this.$store.dispatch('getImgUrl', 'images/quotation.svg').then(img => {
         this.quotationIcon = img
      }).catch(error => {
         throw new Error(error.message)
      })

      this.$store.dispatch('getImgUrl', 'images/star.png').then(img => {
         this.starIcon = img
      }).catch(error => {
         throw new Error(error.message)
      })

      var root = this
      root.testimonials.carousel.forEach(function(testimonial) {
         root.$store.dispatch('getImgUrl', 'images/testimonials/' + testimonial.img).then(img => {
            testimonial.img = img
         }).catch(error => {
            throw new Error(error.message)
         })
      })

      for (let k in this.icons) {
        this.$store.dispatch('getImgUrl', `images/social-icons/${k}.svg`).then(img => {
           this.icons[k] = img
        }).catch(error => {
           throw new Error(error.message)
        })
      }

      for (let k of team) {
        this.$store.dispatch('getImgUrl', `images/${k.src}`).then(img => {
           this.teamImages.push(img)
        }).catch(error => {
           throw new Error(error.message)
        })
      }

      for (let k of mentors) {
        this.$store.dispatch('getImgUrl', `images/${k.src}`).then(img => {
           this.mentorsImages.push(img)
        }).catch(error => {
           throw new Error(error.message)
        })
      }

      this.$store.dispatch('getImgUrl', 'images/left.svg').then(img => {
         this.leftImage = img
      }).catch(error => {
         throw new Error(error.message)
      })
      this.$store.dispatch('getImgUrl', 'images/right.svg').then(img => {
         this.rightImage = img
      }).catch(error => {
         throw new Error(error.message)
      })
   },
   mounted() {
     this.$refs.siema.stop()

     let children = this.$refs.controls.children
     for (var i = 0; i < children.length; i++) {
       children[i].classList.remove('active')
     }
     children[i - 1].classList.add('active')

     // addEventListener('resize', e => {
     //   if (e.target.innerWidth <= 1150) {
     //     // console.log(this)
     //     // root.$refs.siema.init()
     //     this.$refs.siema.resizeHandler()
     //   }
     // }, false)
   }
}
