export default {
  name: 'AccountConfirmedComponent',
  components: {},
  data: () => ({
    heading_title_text: 'رائع! لقد تم تفعيل حسابك',
    description_text: 'قبل تحديد المسار الذي ترغب بدراسته ننصحك بالبدء بجولة سريعة لاكتشاف ميولك، في حال لديك معرفة مسبقة عن الفرق بين المسارات وتريد البدء مباشرة بإمكانك تخطي هذه الجولة.',
    start_btn_text: 'ابدأ الجولة',
    dismiss_btn_text: 'تخطي'
  }),
  methods: {
    start() {
    },
    dismiss() {

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
