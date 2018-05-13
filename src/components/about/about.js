import Siema from 'siema'

let carouselTransitionT
let carouselTransitionM
let mentorsSiema

export default {
   name: 'AboutComponent',
   components: {},
   data: () => ({
      imageSrc: [],
      quotationIcon: '',
      starState: {
        active: '',
        inactive: ''
      },
      icons: {
        github: '',
        stackoverflow: '',
        website: '',
        linkedin: '',
        twitter: '',
        LH: ''
      },
      teamImages: [],
      mentorsImages: [],
      // mentorsOptions: {
      //   querySelector: '.mentorscarousel',
      //   draggable: true,
      //   duration: 500,
      //   easing: 'ease-out',
      //   perPage: 4,
      //   startIndex: 0,
      //   rtl: false
      // },
      navigation: {
        left: '',
        right: ''
      },
      currentSlide: 0,
      descriptions: [
        {
          header: 'رؤيتنا في الأكاديمية',
          paragraph: 'بما أننا نؤمن أن أفضل طريقة لتعلم البرمجة تكون من خلال التطبيق وليس من خلال الدروس النظرية التي لا يتم ربطها بشكل عملي مع مشاريع حقيق، فقد قمنا بإيجاد هذه المنصة لمساعدتك على تحقيق حلمك بالتدرب على لغة المستقبل (البرمجة) بأساليب فعالة.',
          src: 'about/vision',
          alt: 'image 1 '
        },
        {
          header: 'إبني مهاراتك بذكاء',
          paragraph: 'من الأخطاء الشائعة التي قد ترتكبها أثناء تعلمك للبرمجة هو إعتمادك على إسلوب خاطئ كدراسة كل المفاهيم دون الإلمام بكيفية توظيفها في مشروع حقيقي، لهذا في أكاديميتنا نقوم بتوجيهك من خلال مسار محدد من الورش التطبيقية بحيث أنك تتعلم المفاهيم في الوقت المناسب عند حاجتك لها.',
          src: 'about/building_blocks',
          alt: 'image 2 '
        },
        {
          header: 'ما الذي ستكتسبه؟',
          paragraph: 'من أهم ما قمنا بأخذة في عين الإعتبار عند إنشاء هذه المنصة هو تدريبك لتحصل على الخبرة والإستعداد الكافي للإنخراط في سوق العمل المحلي أو الحر بمجرد إنتهائك من سلسلة ورش العمل المحددة في المسار الذي قمت بإختيارة.',
          src: 'about/hero',
          alt: 'image 3 '
        }
      ],
      testimonials: {
        title: 'مجتمعنا رائع يضم مئات المبرمجين',
        description: 'بإنضمامك معنا لن تتعلم البرمجة فحسب بل ستلتحق بمجتمع يوفر بيئة خصبة لتبادل الخبرات و بناء روابط و علاقات مع عدد كبير من المبرمجين الأكفاء',
         carousel: [{
            img: 'saif.png',
            name: 'منصور الجاسمي',
            description: 'مصمم تطبيقات موبايل',
            quote: 'venenatis dui ac pharetra. Nunc eu felis fermentum diam molestie dictum. Ut pretium laoreet tincidunt. Curabitur suscipit iaculis elit et lobortis.',
            rating: 2
         },
         {
            img: 'saif.png',
            name: 'منصور الجاسمي',
            description: 'مصمم تطبيقات موبايل',
            quote: 'venenatis dui ac pharetra. Nunc eu felis fermentum diam molestie dictum. Ut pretium laoreet tincidunt. Curabitur suscipit iaculis elit et lobortis.',
            rating: 4
         },
         {
            img: 'saif.png',
            name: 'منصور الجاسمي',
            description: 'مصمم تطبيقات موبايل',
            quote: 'venenatis dui ac pharetra. Nunc eu felis fermentum diam molestie dictum. Ut pretium laoreet tincidunt. Curabitur suscipit iaculis elit et lobortis.',
            rating: 3
         },
         {
            img: 'saif.png',
            name: 'منصور الجاسمي',
            description: 'مصمم تطبيقات موبايل',
            quote: 'venenatis dui ac pharetra. Nunc eu felis fermentum diam molestie dictum. Ut pretium laoreet tincidunt. Curabitur suscipit iaculis elit et lobortis.',
            rating: 5
         },
         {
            img: 'saif.png',
            name: 'منصور الجاسمي',
            description: 'مصمم تطبيقات موبايل',
            quote: 'venenatis dui ac pharetra. Nunc eu felis fermentum diam molestie dictum. Ut pretium laoreet tincidunt. Curabitur suscipit iaculis elit et lobortis.',
            rating: 1
         }
        ]
      },
      testimonialsSiema: {
        perPage: ''
      },
      team: {
        title: 'فريق العمل',
        description: 'فريق عملنا يعمل على مدار الساعة ليحرص على حصولكم على الفائدة المرجوة و على أفضل تجربة خلال رحلتكم التدريبية على منصة coretabs',
        set: [
          {
            name: 'Louay Hamada',
            about: 'Full-stack Web Application Developer',
            src: 'contributors/LouayH.jpg',
            socials: [
              {
                name: 'LH',
                src: 'http://louayhamada.com'
              },
              {
                name: 'twitter',
                src: 'http://twitter.com/LouayHamada'
              },
              {
                name: 'linkedin',
                src: 'https://www.linkedin.com/in/louayhamada/'
              },
              {
                name: 'github',
                src: 'https://github.com/LouayH'
              },
              {
                name: 'stackoverflow',
                src: 'https://stackoverflow.com/users/1398488/louay-hamada'
              }
            ]
          },
          {
            name: 'Mohammed AlHakem',
            about: 'Front-end web developer & UI/UX designer',
            src: 'contributors/alhakem.jpg',
            socials: [
              {
                name: 'github',
                src: 'ss'
              },
              {
                name: 'stackoverflow',
                src: 'sxs'
              },
              {
                name: 'website',
                src: 'ddcd'
              },
              {
                name: 'linkedin',
                src: 'cdcd'
              },
              {
                name: 'twitter',
                src: 'cdcd'
              }
            ]
          }
        ]
      },
      mentors: {
        title: 'الموجهون',
        description: 'فريق التوجية في الأكاديمية يتألف من عدد من الأشخاص المتميزين الذي سيقوموا بمساندتك أثناء رحلتك التدريبية على منصة coretabs',
        set: [
          {
            name: 'Mohammed AlHakem',
            about: 'Front-end web developer & UI/UX designer',
            src: 'mentors/one.jpg',
            socials: [
              {
                name: 'github',
                src: 'ss'
              },
              {
                name: 'stackoverflow',
                src: 'sxs'
              },
              {
                name: 'website',
                src: 'ddcd'
              },
              {
                name: 'linkedin',
                src: 'cdcd'
              },
              {
                name: 'twitter',
                src: 'cdcd'
              }
            ]
          },
          {
            name: 'Mohammed AlHakem',
            about: 'Front-end web developer & UI/UX designer',
            src: 'mentors/one.jpg',
            socials: [
              {
                name: 'github',
                src: 'ss'
              },
              {
                name: 'stackoverflow',
                src: 'sxs'
              },
              {
                name: 'website',
                src: 'ddcd'
              },
              {
                name: 'linkedin',
                src: 'cdcd'
              },
              {
                name: 'twitter',
                src: 'cdcd'
              }
            ]
          }, {
            name: 'Mohammed AlHakem',
            about: 'Front-end web developer & UI/UX designer',
            src: 'mentors/one.jpg',
            socials: [
              {
                name: 'github',
                src: 'ss'
              },
              {
                name: 'stackoverflow',
                src: 'sxs'
              },
              {
                name: 'website',
                src: 'ddcd'
              },
              {
                name: 'linkedin',
                src: 'cdcd'
              },
              {
                name: 'twitter',
                src: 'cdcd'
              }
            ]
          },
          {
            name: 'Mohammed AlHakem',
            about: 'Front-end web developer & UI/UX designer',
            src: 'mentors/one.jpg',
            socials: [
              {
                name: 'github',
                src: 'ss'
              },
              {
                name: 'stackoverflow',
                src: 'sxs'
              },
              {
                name: 'website',
                src: 'ddcd'
              },
              {
                name: 'linkedin',
                src: 'cdcd'
              },
              {
                name: 'twitter',
                src: 'cdcd'
              }
            ]
          },
          {
            name: 'Mohammed AlHakem',
            about: 'Front-end web developer & UI/UX designer',
            src: 'mentors/one.jpg',
            socials: [
              {
                name: 'github',
                src: 'ss'
              },
              {
                name: 'stackoverflow',
                src: 'sxs'
              },
              {
                name: 'website',
                src: 'ddcd'
              },
              {
                name: 'linkedin',
                src: 'cdcd'
              },
              {
                name: 'twitter',
                src: 'cdcd'
              }
            ]
          },
          {
            name: 'Mohammed AlHakem',
            about: 'Front-end web developer & UI/UX designer',
            src: 'mentors/one.jpg',
            socials: [
              {
                name: 'github',
                src: 'ss'
              },
              {
                name: 'stackoverflow',
                src: 'sxs'
              },
              {
                name: 'website',
                src: 'ddcd'
              },
              {
                name: 'linkedin',
                src: 'cdcd'
              },
              {
                name: 'twitter',
                src: 'cdcd'
              }
            ]
          },
          {
            name: 'Mohammed AlHakem',
            about: 'Front-end web developer & UI/UX designer',
            src: 'mentors/one.jpg',
            socials: [
              {
                name: 'github',
                src: 'ss'
              },
              {
                name: 'stackoverflow',
                src: 'sxs'
              },
              {
                name: 'website',
                src: 'ddcd'
              },
              {
                name: 'linkedin',
                src: 'cdcd'
              },
              {
                name: 'twitter',
                src: 'cdcd'
              }
            ]
          },
          {
            name: 'Mohammed AlHakem',
            about: 'Front-end web developer & UI/UX designer',
            src: 'mentors/one.jpg',
            socials: [
              {
                name: 'github',
                src: 'ss'
              },
              {
                name: 'stackoverflow',
                src: 'sxs'
              },
              {
                name: 'website',
                src: 'ddcd'
              },
              {
                name: 'linkedin',
                src: 'cdcd'
              },
              {
                name: 'twitter',
                src: 'cdcd'
              }
            ]
          },
          {
            name: 'Mohammed AlHakem',
            about: 'Front-end web developer & UI/UX designer',
            src: 'mentors/one.jpg',
            socials: [
              {
                name: 'github',
                src: 'ss'
              },
              {
                name: 'stackoverflow',
                src: 'sxs'
              },
              {
                name: 'website',
                src: 'ddcd'
              },
              {
                name: 'linkedin',
                src: 'cdcd'
              },
              {
                name: 'twitter',
                src: 'cdcd'
              }
            ]
          },
          {
            name: 'Mohammed AlHakem',
            about: 'Front-end web developer & UI/UX designer',
            src: 'mentors/one.jpg',
            socials: [
              {
                name: 'github',
                src: 'ss'
              },
              {
                name: 'stackoverflow',
                src: 'sxs'
              },
              {
                name: 'website',
                src: 'ddcd'
              },
              {
                name: 'linkedin',
                src: 'cdcd'
              },
              {
                name: 'twitter',
                src: 'cdcd'
              }
            ]
          },
          {
            name: 'Mohammed AlHakem',
            about: 'Front-end web developer & UI/UX designer',
            src: 'mentors/one.jpg',
            socials: [
              {
                name: 'github',
                src: 'ss'
              },
              {
                name: 'stackoverflow',
                src: 'sxs'
              },
              {
                name: 'website',
                src: 'ddcd'
              },
              {
                name: 'linkedin',
                src: 'cdcd'
              },
              {
                name: 'twitter',
                src: 'cdcd'
              }
            ]
          }
        ]
      },
      footer: {
        contactUs: 'إتصل بنا',
        termsOfService: 'شروط الخدمة',
        privacyPolicy: 'سياسة الخصوصية'
      },
      perPage: 1
   }),
   methods: {
     showTestimonials(i, e) {
       let children = e.currentTarget.parentElement.children
       for (let i = 0; i < children.length; i++) {
         children[i].classList.remove('active')
       }
       e.currentTarget.classList.add('active')
       this.testimonialsSiema.goTo(i)
     },
     showMentors(i, e) {
       let children = e.currentTarget.parentElement.children
       for (let i = 0; i < children.length; i++) {
         children[i].classList.remove('active')
       }
       e.currentTarget.classList.add('active')
       mentorsSiema.goTo(i * this.perPage)
     },
      calc(i, j) {
        return i <= j ? this.starState.active : this.starState.inactive
      },
      stopTSiema() {
        clearInterval(carouselTransitionT)
      },
      playTSiema() {
        carouselTransitionT = setInterval(() => { this.testimonialsSiema.prev() }, 4000)
      },
      stopMSiema() {
        clearInterval(carouselTransitionM)
      },
      playMSiema() {
        carouselTransitionM = setInterval(() => {
          if (mentorsSiema.currentSlide + mentorsSiema.perPage >= this.mentors.set.length) {
            mentorsSiema.prev(this.mentors.set.length)
          } else {
            mentorsSiema.next(mentorsSiema.perPage)
          }
        }, 5000)
      },
      count() {
        return Math.ceil(this.mentors.set.length / this.perPage)
      },
      prev() {
        var index = mentorsSiema.currentSlide / mentorsSiema.perPage
        if (mentorsSiema.currentSlide % mentorsSiema.perPage === 0) {
          const slideM = document.querySelector('.m')
          if (slideM) {
            var children = slideM.children
            for (var i = 0; i < children.length; i++) {
              children[i].classList.remove('active')
            }
            index = Math.ceil(index)
            children[index].classList.add('active')
          }
        }
        mentorsSiema.prev(mentorsSiema.perPage)
      },
      next() {
        var index = mentorsSiema.currentSlide / mentorsSiema.perPage
        if (mentorsSiema.currentSlide % mentorsSiema.perPage === 0) {
          const slideM = document.querySelector('.m')
          if (slideM) {
            var children = slideM.children
            for (var i = 0; i < children.length; i++) {
              children[i].classList.remove('active')
            }
            index = Math.ceil(index)
            children[index].classList.add('active')
          }
        }
        mentorsSiema.next(mentorsSiema.perPage)
      }
   },
   created() {
     for (let k of this.descriptions) {
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

      this.$store.dispatch('getImgUrl', 'images/star_active.svg').then(img => {
         this.starState.active = img
      }).catch(error => {
         throw new Error(error.message)
      })
      this.$store.dispatch('getImgUrl', 'images/star_inactive.svg').then(img => {
         this.starState.inactive = img
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
        this.$store.dispatch('getImgUrl', `icons/social-icons/${k !== 'LH' ? k + '.svg' : k + '.png'}`).then(img => {
           this.icons[k] = img
        }).catch(error => {
           throw new Error(error.message)
        })
      }

      for (let k of this.team.set) {
        this.$store.dispatch('getImgUrl', `images/${k.src}`).then(img => {
           this.teamImages.push(img)
        }).catch(error => {
           throw new Error(error.message)
        })
      }

      for (let k of this.mentors.set) {
        this.$store.dispatch('getImgUrl', `images/${k.src}`).then(img => {
           this.mentorsImages.push(img)
        }).catch(error => {
           throw new Error(error.message)
        })
      }

      this.$store.dispatch('getImgUrl', 'images/left.svg').then(img => {
         this.navigation.left = img
      }).catch(error => {
         throw new Error(error.message)
      })
      this.$store.dispatch('getImgUrl', 'images/right.svg').then(img => {
         this.navigation.right = img
      }).catch(error => {
         throw new Error(error.message)
      })
   },
   mounted() {
     this.testimonialsSiema = new Siema({
        selector: '.testimonials-carousel',
        duration: 500,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: changeCurrentSlideT,
        onChange: changeCurrentSlideT
     })

     this.playTSiema()

     function changeCurrentSlideT() {
       const slideT = document.querySelector('.t')
       if (slideT) {
         var children = slideT.children
         for (var i = 0; i < children.length; i++) {
           children[i].classList.remove('active')
         }
         children[this.currentSlide].classList.add('active')
       }
     }

     let childrenT = this.$refs.controlsT.children
     for (let i = 0; i < childrenT.length; i++) {
       childrenT[i].classList.remove('active')
     }
     childrenT[0].classList.add('active')

     let root = this

     mentorsSiema = new Siema({
        selector: '.mentors-carousel',
        duration: 1000,
        easing: 'ease-out',
        perPage: {
          1150: 4,
          900: 3,
          650: 2,
          520: 3,
          0: 2
        },
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: false,
        rtl: false,
        onInit: changeCurrentSlideM,
        onChange: changeCurrentSlideM
     })

     this.playMSiema()

     function changeCurrentSlideM() {
       var index = this.currentSlide / this.perPage
       if (this.currentSlide % this.perPage === 0 || index + 1 === root.mentors.set.length / this.perPage) {
         const slideM = document.querySelector('.m')
         if (slideM) {
           var children = slideM.children
           for (var i = 0; i < children.length; i++) {
             children[i].classList.remove('active')
           }
           index = Math.ceil(index)
           children[index].classList.add('active')
         }
       }
     }

     addEventListener('resize', function() {
       root.perPage = mentorsSiema.perPage
       const slideM = document.querySelector('.m')
       if (slideM) {
         var children = slideM.children
         for (var i = 0; i < children.length; i++) {
           children[i].classList.remove('active')
         }
         children[0].classList.add('active')
         mentorsSiema.currentSlide = 0
       }
     }, false)

     let childrenM = this.$refs.controlsT.children
     for (let i = 0; i < childrenM.length; i++) {
       childrenM[i].classList.remove('active')
     }
     childrenM[0].classList.add('active')

     this.perPage = mentorsSiema.perPage
   }
}
