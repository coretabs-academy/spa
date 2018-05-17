import ModulesNavComponent from '../modules-nav/modules-nav.vue'
export default {
   name: 'WorkshopComponent',
   components: {
      ModulesNavComponent
   },
   data: () => ({
      i18n: {
         card1: {
            duration: {
               unit: 'ساعة',
               title: 'الجدول الزمني'
            },
            last_update_date: 'آخر تحديث',
            start: ['بدء', 'استمرار'],
            level: {
               title: 'المستوى',
               value: ['مبتدئ', 'متوسط', 'صعب']
            }
         },
         card2: {
            authors: 'المدربون',
            resutlBtn: 'مشاهدة حية',
            resutl: 'النتيجة النهائية',
            description: 'عن ورشة العمل',
            used_technologies: 'التقنيات المستخدمة'
         },
         card3: {
            here: 'هنا',
            title: 'هل لديك إستفسارات؟',
            text: 'بإمكانك طرح أسئلتك و مناقشة ورشة العمل هذه مع مجتمع المبرمجين و الموجهين في القسم الخاص بها بالمنتدى'
         }
      },
      loaded: true
   }),

   props: ['workshop'],
   created() {},
   watch: {
      $route(to, from) {}
   },
   methods: {
    toggleAvatar() {
      var isBreak = false
      document.querySelectorAll('.author').forEach((author) => {
        if (author.querySelector('.info').clientWidth >= (author.clientWidth - 58)) {
          document.querySelectorAll('.avatar').forEach((avatar) => {
            avatar.style.display = 'none'
          })
          isBreak = true
        } else {
          if (!isBreak) {
            document.querySelectorAll('.avatar').forEach((avatar) => {
              avatar.style.display = 'inline-flex'
            })
          }
        }
      })
    }
   },
   mounted() {
    window.addEventListener('resize', this.toggleAvatar)

    this.$nextTick(function() {
      this.toggleAvatar()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
