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
            icon: 'description',
            text: 'ملاحظات الدرس'
         }, {
            icon: 'info',
            text: 'لديك سؤال'
         }],
         quiz: {
            heading_text: 'اختر الإجابات الصحيحة',
            results_texts: {
               success: 'أحسنت الإجابة صحيحة',
               fail: 'أحسنت المحاولة! ',
               hint: 'هل تريد الحصول على تلميح ؟'
            },
            buttons_texts: {
               confirm: 'تأكيد الإجابة',
               retry: 'أعد المحاولة',
               dismiss: 'تجاهل السؤال',
               next: 'السؤال التالي',
               pre: 'السؤال السابق'
            }
         }
      },
      quiz: {
         result: '',
         status: {
            right: ''
         }
      },
      current: {
         quiz: 0,
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
      })
   },
   methods: {
      getLesson() {
         let url = this.$encryption.b64DecodeUnicode(this.$route.query.url)
         this.type = this.$encryption.b64DecodeUnicode(this.$route.query.type)
         let notes = this.$encryption.b64DecodeUnicode(this.$route.query.notes)
         switch (this.type) {
            case '0':
            case '1':
               this.lesson_content = url
               this.$http.get(notes)
                  .then(data => {
                     this.notes_content = this.previewMarkdowText(data)
                     this.loaded = true
                  }).catch(err => {
                     console.error(err)
                  })
               break
            case '2':
               this.$http.get(url)
                  .then(data => {
                     this.lesson_content = this.previewMarkdowText(data)
                     this.loaded = true
                  }).catch(err => {
                     console.error(err)
                  })
               break
            case '3':
               this.$http.get(url)
                  .then(data => {
                     this.lesson_content = data
                     this.loaded = true
                  }).catch(err => {
                     console.error(err)
                  })
               break
            case '4':
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
      },
      chooseAnswer(question, answer) {
         if (question.correct.length === 1) {
            question.choose = []
            if (!question.choose.includes(answer)) {
               question.choose.push(answer)
            }
            this.checkAnswers(question, answer)
         } else {
            if (this.quiz.status.right) {
               this.quiz.status.right = ''
            }
            if (question.choose.includes(answer)) {
               question.choose.splice(question.choose.indexOf(answer), 1)
            } else {
               question.choose.push(answer)
            }
         }
      },
      checkAnswers(question, answer) {
         question.choose.sort()
         if (question.choose.toString() === question.correct.toString()) {
            this.quiz.result = this.i18n.quiz.results_texts.success
            if (question.correct.length > 1) this.quiz.status.right = 'true_answer_checkbox'
            question.true = true
            question.wrong = false
         } else {
            this.quiz.result = this.i18n.quiz.results_texts.fail
            question.true = false
            question.wrong = true
         }
      },
      goNextAnswers() {
         this.current.quiz += 1
         this.quiz.result = ''
      },
      goPrevAnswers() {
         this.current.quiz -= 1
      }
   }
}
