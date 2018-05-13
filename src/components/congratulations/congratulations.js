export default {
  name: 'CongratulationsComponent',
  components: {},
  data: () => ({
    heading_title_text: 'تهانينا!',
    description_text: 'لقد قمت بإنشاء حسابك بنجاح، تفقد بريدك الإلكتروني لتفعيل حسابك.',
    submit_btn_text: 'أعد إرسال بريد التفعيل',
    counter: 30
  }),
  methods: {
    submit() {
    },
    setSplashHeight() {
      var sDiv = document.querySelector('#splash')
      if (sDiv) {
        var sDivHeight = sDiv.clientWidth / 2
        sDiv.setAttribute('style', 'height: ' + sDivHeight + 'px !important')
      }
    }
  },
  mounted() {
    setInterval(() => {
      if (this.counter > 0) {
        this.counter -= 1
      }
    }, 1000)

    window.addEventListener('resize', this.setSplashHeight)

    this.$nextTick(function() {
      this.setSplashHeight()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
