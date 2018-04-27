export default {
  name: 'HomeComponent',
  data: () => ({
    introduction: {
      title: 'إن تعلم البرمجة شيء رائع!',
      p1: 'الأروع من ذلك أن أكاديمية Coretabs ستقوم بتوجيهك لبدأ تعلمها عبر عمل تطبيقات من أول يوم.',
      p2: 'مستعد لتغيير حياتك وتعلم مهارات جديدة؟',
      button1: 'نعم، اكتشف ميولي',
      button2: 'لا، أنا لست قدها'
    },
    scrollIcon: '',
    quotationIcon: '',
    starIcon: '',
    testimonials: {
      title: 'من تجارب مجتمعنا',
      carousel: [
        {
          img: 'saif.png',
          name: 'سيف الدين',
          description: 'مطور واجهات ويب',
          quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus, libero in suscipit porta, lacus mauris volutpat neque, id finibus neque magna sit amet nulla. Fusce quis porta ante. Maecenas tincidunt diam et tortor pulvinar, eu tempor dui elementum. Morbi ultricies, eros ac tincidunt malesuada, nunc turpis convallis libero, vel dapibus enim quam sed mi. Cras consequat facilisis neque eu ullamcorper.',
          rating: 5
        },
        {
          img: 'saif.png',
          name: 'منصور الجاسمي',
          description: 'مصمم تطبيقات موبايل',
          quote: 'Aliquam erat volutpat. Mauris ullamcorper, lectus in cursus ullamcorper, urna ligula scelerisque sapien, ac vehicula dolor libero eget tortor. Mauris et leo non eros vehicula tincidunt sit amet nec mi. Pellentesque viverra efficitur velit malesuada lobortis. Suspendisse suscipit venenatis dui ac pharetra. Nunc eu felis fermentum diam molestie dictum. Ut pretium laoreet tincidunt. Curabitur suscipit iaculis elit et lobortis.',
          rating: 4
        },
        {
          img: 'saif.png',
          name: 'سامر المصري',
          description: 'مطور واجهات ويب',
          quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus, libero in suscipit porta, lacus mauris volutpat neque, id finibus neque magna sit amet nulla. Fusce quis porta ante. Maecenas tincidunt diam et tortor pulvinar, eu tempor dui elementum. Morbi ultricies, eros ac tincidunt malesuada, nunc turpis convallis libero, vel dapibus enim quam sed mi. Cras consequat facilisis neque eu ullamcorper.',
          rating: 3
        },
        {
          img: 'saif.png',
          name: 'بدر سيف',
          description: 'مصمم تطبيقات موبايل',
          quote: 'Aliquam erat volutpat. Mauris ullamcorper, lectus in cursus ullamcorper, urna ligula scelerisque sapien, ac vehicula dolor libero eget tortor. Mauris et leo non eros vehicula tincidunt sit amet nec mi. Pellentesque viverra efficitur velit malesuada lobortis. Suspendisse suscipit venenatis dui ac pharetra. Nunc eu felis fermentum diam molestie dictum. Ut pretium laoreet tincidunt. Curabitur suscipit iaculis elit et lobortis.',
          rating: 2
        }
      ]
    }
  }),
  methods: {
    setIntroVideoHeight() {
      var vDiv = document.querySelector('#introductory-video')
      var viFrame = document.querySelector('#introductory-video iframe')
      var vDivHeight = (vDiv.clientWidth * 56) / 100

      vDiv.setAttribute('style', 'height: ' + vDivHeight + 'px')
      viFrame.setAttribute('height', vDivHeight)
    }
  },
  created() {
    this.$store.dispatch('getImgUrl', 'images/scroll.png').then(img => {
      this.scrollIcon = img
    }).catch(error => {
      throw new Error(error.message)
    })

    this.$store.dispatch('getImgUrl', 'images/quotation.png').then(img => {
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
  },
  mounted() {
    window.addEventListener('resize', this.setIntroVideoHeight)

    this.$nextTick(function() {
      this.setIntroVideoHeight()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
