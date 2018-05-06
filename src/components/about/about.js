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
      // mentorsImages: [],
      options: {
        draggable: true,
        duration: 500,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        loop: true,
        rtl: false
      },
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
         }
         ,
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
      // mentors: {
      //   title: 'الموجهون',
      //   description: 'فريق التوجية في الأكاديمية يتألف من عدد من الأشخاص المتميزين الذي سيقوموا بمساندتك أثناء رحلتك التدريبية على منصة coretabs',
      //   set: [
      //     {
      //       name: 'Mohammed AlHakem',
      //       about: 'Front-end web developer & UI/UX designer',
      //       src: 'mentors/one.jpg',
      //       socials: [
      //         {
      //           name: 'github',
      //           src: 'ss'
      //         },
      //         {
      //           name: 'stackoverflow',
      //           src: 'sxs'
      //         },
      //         {
      //           name: 'website',
      //           src: 'ddcd'
      //         },
      //         {
      //           name: 'linkedin',
      //           src: 'cdcd'
      //         },
      //         {
      //           name: 'twitter',
      //           src: 'cdcd'
      //         }
      //       ]
      //     }
      //   ]
      // },
      footer: {
        contactUs: 'إتصل بنا',
        termsOfService: 'شروط الخدمة',
        privacyPolicy: 'سياسة الخصوصية'
      }
   }),
   watch: {
     currentSlide() {
       let children = this.$refs.controls.children
       for (var i = 0; i < children.length; i++) {
         children[i].classList.remove('active')
       }
       children[this.currentSlide].classList.add('active')
      }
   },
   methods: {
     show(i, e) {
       let children = e.currentTarget.parentElement.children
       for (let i = 0; i < children.length; i++) {
         children[i].classList.remove('active')
       }
       e.currentTarget.classList.add('active')
       this.$refs.siema.goTo(i)
     },
     // setPerPage() {
     //     this.options.perPage = Math.floor(document.querySelector('#mentors').offsetWidth / 237)
     //     this.$refs.mentorscarousel.init()
     //  },
      calc(i, j) {
        return i <= j ? this.starState.active : this.starState.inactive
      }
   },
   computed: {
     perPage() {
       return Math.ceil(this.testimonials.carousel.length / this.options.perPage)
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
        this.$store.dispatch('getImgUrl', `images/social-icons/${k !== 'LH' ? k + '.svg' : k + '.png'}`).then(img => {
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

      // for (let k of this.mentors.set) {
      //   this.$store.dispatch('getImgUrl', `images/${k.src}`).then(img => {
      //      this.mentorsImages.push(img)
      //   }).catch(error => {
      //      throw new Error(error.message)
      //   })
      // }

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
     this.$refs.siema.stop()

     let children = this.$refs.controls.children
     for (var i = 0; i < children.length; i++) {
       children[i].classList.remove('active')
     }
     children[0].classList.add('active')

     // addEventListener('resize', e => {
     //   if (e.target.innerWidth <= 1150) {
     //     // console.log(this)
     //     // root.$refs.mentorscarousel.init()
     //     this.$refs.mentorscarousel.resizeHandler()
     //   }
     // }, false)
   }
}
