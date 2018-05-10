import ModulesNavComponent from '../modules-nav/modules-nav.vue'
export default {
   name: 'WorkshopComponent',
   components: {
      ModulesNavComponent
   },
   data: () => ({
      i18n: {
         card1: {
            timeline: {
               unit: 'ساعة',
               title: 'الجدول الزمني'
            },
            last_update: 'آخر تحديث',
            start: ['بدأ', 'إستمرار'],
            level: {
               title: 'المستوى',
               value: ['مبتدئ', 'متوسط', 'صعب']
            }
         },
         card2: {
            users: 'المدربون',
            desc: 'عن ورشة العمل',
            resutlBtn: 'مشاهدة حية',
            resutl: 'النتيجة النهائية',
            techniques_used: 'التقنيات المستخدمة'
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
   created() {

   },
   watch: {
      $route(to, from) {}
   },
   methods: {
      goToLessons(url) {
         this.$parent.$emit('clearTimeout')
         this.$router.push({
            name: 'modules',
            params: {
               module: 'collo',
               modules: this.workshop.modules
            }
         })
      }
   }
}
