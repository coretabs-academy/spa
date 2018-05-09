export default {
  name: 'ResetPasswordComponent',
  components: {},
  data: () => ({
    heading_text: 'إعادة تعيين كلمة المرور',
    submit_btn_text: 'حفظ',
    alert: {
      success: false,
      error: false,
      message: ''
    },
    valid: false,
    password: '',
    password_label: 'كلمة المرور الجديدة',
    pw: true,
    pwRules: [
      v => !!v || '',
      v => (v && v.length >= 10) || 'كلمة السر يجب أن تتكون من 10 أحرف على الأقل'
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
