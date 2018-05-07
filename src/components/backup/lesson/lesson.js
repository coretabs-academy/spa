export default {
   name: 'LessonComponent',
   components: {},
   data: () => ({
      lesson: {
         type: '',
         data: '',
         notes: ''
      },
      loaded: true
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
      document.querySelectorAll('..lesson img').forEach((img) => {
         let src = img.src.replace(/^.*[\\/]/, '')
         this.$store.commit('getGithubFileURL', {
            repo: `${this.$route.params.track}-tutorials`,
            path: `${this.$api.b64DecodeUnicode(this.$route.query.url).replace(/[a-zA-Z-]+\.txt/, '')}/${src}`
         })
         img.src = this.$store.state.githubFileURL
      })

      document.querySelectorAll('.lesson pre code').forEach((code) => {
         hljs.highlightBlock(code)
      });
   },
   methods: {
      getLesson() {
         this.lesson.type = this.$route.query.type
         this.$http.get(this.$api.b64DecodeUnicode(this.$route.query.url))
            .then(data => {
               this.lesson.data = data
               switch (this.lesson.type) {
                  case 'task':
                  case 'text':
                     this.lesson.data = data
                  case 'video':
                     this.lesson.data = {
                        autthour
                     }
                  case 'quiz':
                     this.lesson.data = data
                     break;
               }
               this.loaded = true
            }).catch(err => {
               console.error(err)
            })
      },
      previewText(mdText) {
         return this.$markdown.render(mdText)
      }
   }
}
