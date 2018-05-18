export default {
   name: 'LessonComponent',
   components: {},
   data: () => ({
      type: '',
      loaded: false,
      notes_content: '',
      lesson_content: '',
      i18n: {
         video: [{
            icon: 'add',
            text: 'ملاحظات الدرس'
         }, {
            icon: 'add',
            text: 'لديك سؤال'
         }]
      },
      current: {
         tab: null
      }
   }),
   created() {
      this.getLesson()
   },
   watch: {
      $route(to, from) {
         this.getLesson()
      }
   },
   updated() {

      document.querySelectorAll('#lesson-markdown img').forEach((img) => {
         let src = img.src.replace(/^.*[\\/]/, '')
         this.$store.commit('getGithubFileURL', {
            repo: `fullstack-tutorials`,
            // repo: `${this.$route.params.track}-tutorials`,
            path: `${this.$encryption.b64DecodeUnicode(this.$route.query.url).replace(/[a-zA-Z-]+\.txt/, '')}/${src}`
         })
         img.src = this.$store.state.githubFileURL
      })

      document.querySelectorAll('#lesson-markdown pre code').forEach((code) => {
         hljs.highlightBlock(code)
      });
   },
   methods: {
      getLesson() {
         let url = this.$encryption.b64DecodeUnicode(this.$route.query.url)
         this.type = this.$encryption.b64DecodeUnicode(this.$route.query.type)
         let notes = this.$encryption.b64DecodeUnicode(this.$route.query.notes)
         switch (this.type) {
            case "0":
            case "1":
               this.lesson_content = url
               this.$http.get(notes)
                  .then(data => {
                     this.notes_content = this.previewMarkdowText(data)
                     this.loaded = true
                  }).catch(err => {
                     console.error(err)
                  })
               break
            case "2":
               this.$http.get(url)
                  .then(data => {
                     this.lesson_content = this.previewMarkdowText(data)
                     this.loaded = true
                  }).catch(err => {
                     console.error(err)
                  })
               break
            case "3":
               this.$http.get(url)
                  .then(data => {
                     this.lesson_content = this.previewMarkdowText(data)
                     this.loaded = true
                  }).catch(err => {
                     console.error(err)
                  })
               break
            case "4":
               this.$http.get(url)
                  .then(data => {
                     this.lesson_content = this.previewMarkdowText(data)
                     this.loaded = true
                  }).catch(err => {
                     console.error(err)
                  })
               break
         }
      },
      previewMarkdowText(mdText) {
         return this.$markdown.render(mdText)
      }
   }
}
