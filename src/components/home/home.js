export default {
   name: 'HomeComponent',
   data: () => ({
      introduction: {
         title: 'إن تعلم البرمجة شيء رائع!',
         p1: 'الأروع من ذلك أن أكاديمية Coretabs ستقوم بتوجيهك لبدأ تعلمها عبر عمل تطبيقات من أول يوم.',
         p2: 'مستعد لتغيير حياتك وتعلم مهارات جديدة؟',
         button1: 'نعم، اكتشف ميولي',
         button2: 'لا، أنا لست قدها'
      }
   }),
   methods: {
      setIntroVideoHeight() {
         var vDiv = document.querySelector('#introductory-video')
         // var viFrame = document.querySelector('#introductory-video iframe')
         var vDivHeight = (vDiv.clientWidth * 74.8) / 100

         vDiv.setAttribute('style', 'height: ' + vDivHeight + 'px !important')
         // viFrame.setAttribute('height', vDivHeight)
      }
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
