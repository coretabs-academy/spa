export default {
  name: 'ForgotPasswordComponent',
  components: {},
  data: () => ({
    heading_text: 'نسيت كلمة المرور؟',
    forgot_text: 'أدخل عنوانك الإلكتروني وسنُرسل بريدًا لإعادة تعيين كلمة المرور.',
    submit_btn_text: 'إرسال',
    alert: {
      success: false,
      error: false,
      message: ''
    },
    valid: false,
    email: '',
    email_label: 'البريد الإلكتروني',
    emRules: [
      v => !!v || '',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'البريد الإلكتروني غير صالح'
    ]
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
    window.addEventListener('resize', this.setSplashHeight)

    this.$nextTick(function() {
      this.setSplashHeight()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
