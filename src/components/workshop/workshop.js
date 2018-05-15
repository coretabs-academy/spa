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
            start: ['بدأ', 'إستمرار'],
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
   methods: {}
}
