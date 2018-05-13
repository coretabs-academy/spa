export default {
   name: 'LessonComponent',
   components: {},
   data: () => ({
      type: '',
      loaded: false,
      notes_content: '',
      lesson_content: ''
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
            repo: `${this.$route.params.track}-tutorials`,
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
         this.type = Number(this.$route.query.type)
         switch (this.type) {
            case "0":
            case "1":
               this.lesson_content = this.$encryption.b64DecodeUnicode(this.$route.query.url)
               this.$http.get(this.$encryption.b64DecodeUnicode(this.$route.query.notes))
                  .then(data => {
                     this.notes_content = this.previewMarkdowText(data)
                     this.loaded = true
                  }).catch(err => {
                     console.error(err)
                  })
               break
            case "2":
               this.$http.get(this.$encryption.b64DecodeUnicode(this.$route.query.url))
                  .then(data => {
                     this.lesson_content = this.previewMarkdowText(data)
                     this.loaded = true
                  }).catch(err => {
                     console.error(err)
                  })
               break
            case "3":
               this.$http.get(this.$encryption.b64DecodeUnicode(this.$route.query.url))
                  .then(data => {
                     this.lesson_content = this.previewMarkdowText(data)
                     this.loaded = true
                  }).catch(err => {
                     console.error(err)
                  })
               break
            case "4":
               this.$http.get(this.$encryption.b64DecodeUnicode(this.$route.query.url))
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
