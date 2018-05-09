export default {
  name: 'SignInComponent',
  components: {},
  data: () => ({
    heading_text: 'تسجيل الدخول',
    forgot_link_text: '<a href="/forgot-password">نسيت كلمة المرور؟</a>',
    submit_btn_text: 'دخول',
    signup_btn_text: 'حساب جديد',
    alert: {
      success: false,
      error: false,
      message: ''
    },
    valid: 0,
    vs: {
      v1: 0,
      v2: 0
    },
    email: '',
    email_label: 'البريد الإلكتروني',
    emRules: [
      v => !!v || '',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'البريد الإلكتروني غير صالح'
    ],
    password: '',
    password_label: 'كلمة السر',
    pw: true,
    pwRules: [
      v => !!v || '',
      v => (v && v.length >= 10) || 'كلمة السر يجب أن تتكون من 10 أحرف على الأقل'
    ]
  }),
  updated() {
    this.chackValid()
  },
  methods: {
    chackValid() {
      var root = this

      root.vs.v1 = 1
      root.vs.v2 = 1

      root.emRules.forEach((rule) => {
        if (rule(root.email) !== true) {
          root.vs.v1 = 0
        }
      })

      root.pwRules.forEach((rule) => {
        if (rule(root.password) !== true) {
          root.vs.v2 = 0
        }
      })

      root.valid = root.vs.v1 + root.vs.v2
    },
    submit() {
    },
    setSplashHeight() {
      var sDiv = document.querySelector('#splash')
      if (sDiv) {
        var sDivHeight = sDiv.clientWidth - 20
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
