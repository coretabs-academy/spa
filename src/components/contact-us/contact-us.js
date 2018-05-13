export default {
  name: 'ContactUsComponent',
  components: {},
  data: () => ({
    forums_icon: '',
    forums_text: 'تذكر في حال احتجت إلى مساعدة بإمكانك بدء نقاش مع زملائك والموجهين من خلال المنتدى <a href="http://forums.coretabs.net" target="_blank">من هنا</a>',
    heading_title_text: 'اتصل بنا',
    description_text: 'للتواصل معنا قم باستخدام النموذج التالي أو بإمكانك مراسلتنا مباشرة على العنوان <a href="mailto:info@coretabs.com">info@coretabs.com</a>',
    heading_text: 'نسيت كلمة المرور؟',
    forgot_text: 'أدخل عنوانك الإلكتروني وسنُرسل بريدًا لإعادة تعيين كلمة المرور.',
    submit_btn_text: 'إرسال',
    alert: {
      success: false,
      error: false,
      message: ''
    },
    valid: 0,
    vs: {
      v1: 0,
      v2: 0,
      v3: 0
    },
    fullname: '',
    fullname_label: 'اسمك الكامل',
    fnRules: [
      v => !!v || '',
      v => (v && v.length <= 20) || 'اسم المستخدم لا يجب أن يتجاوز 20 حرفًا'
    ],
    email: '',
    email_label: 'البريد الإلكتروني',
    emRules: [
      v => !!v || '',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'البريد الإلكتروني غير صالح'
    ],
    message: '',
    message_label: 'أدخل رسالتك هنا',
    meRules: [
      v => !!v || '',
      v => (v && v.length >= 10) || 'الرسالة قصيرة جدًا'
    ]
  }),
  created() {
    this.$store.dispatch('getImgUrl', 'icons/forums-logo.png').then(img => {
      this.forums_icon = img
    }).catch(error => {
        throw new Error(error.message)
    })
  },
  updated() {
    this.chackValid()
  },
  methods: {
    chackValid() {
      var root = this

      root.vs.v1 = 1
      root.vs.v2 = 1
      root.vs.v3 = 1

      root.fnRules.forEach((rule) => {
        if (rule(root.fullname) !== true) {
          root.vs.v1 = 0
        }
      })

      root.emRules.forEach((rule) => {
        if (rule(root.email) !== true) {
          root.vs.v2 = 0
        }
      })

      root.meRules.forEach((rule) => {
        if (rule(root.message) !== true) {
          root.vs.v3 = 0
        }
      })

      root.valid = root.vs.v1 + root.vs.v2 + root.vs.v3
    },
    submit() {
    }
  }
}
