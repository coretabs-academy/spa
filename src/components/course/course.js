export default {
   name: 'CourseComponent',
   components: {},
   data: () => ({
      course: {
         type: '',
         data: ''
      },
      loaded: true
   }),
   created() {
      this.getCourse()
   },
   watch: {
      $route(to, from) {
         this.getCourse()
      }
   },
   updated() {
      document.querySelectorAll('.course img').forEach((img) => {
         let src = img.src.replace(/^.*[\\/]/, '')
         this.$store.commit('getGithubFileURL', {
            repo: `${this.$route.params.track}-tutorials`,
            path: `${this.$api.b64DecodeUnicode(this.$route.query.url).replace(/[a-zA-Z-]+\.txt/, '')}/${src}`
         })
         img.src = this.$store.state.githubFileURL
      })

      // document.querySelectorAll('.course iframe').forEach((iframe) => {
      //    iframe.src = iframe.src.replace("http://", "//")
      // })

      document.querySelectorAll('.course pre code').forEach((code) => {
         hljs.highlightBlock(code)
      });
   },
   methods: {
      getCourse() {
         this.course.type = this.$route.query.type
         this.$http.get(this.$api.b64DecodeUnicode(this.$route.query.url))
            .then(data => {
               this.course.data = data
               switch (this.course.type) {
                  case 'task':
                  case 'text':
                     this.course.data = data
                  case 'video':
                     this.course.data = {
                        autthour
                     }
                  case 'quiz':
                     this.course.data = data
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
