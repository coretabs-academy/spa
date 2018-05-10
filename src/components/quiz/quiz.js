export default {
  data() {
    return {
      e1: 0,
      heading_text: 'اختر الإجابات الصحيحة',
      result: '',
      status: {
        right: ''
      },
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
      },
      questions: [
        {
          'text': 'bla bla bla',
          'answers': {
            '1': 'beboba',
            '2': 'aeaoaa'
          },
          'correct': ['1'],
          'hint': 'koko kaka',
          choose: []
        },
        {
          'text': 'ola ola ola',
          'answers': {
            '1': 'beboba',
            '2': 'aeaoaa'
          },
          'correct': ['2'],
          'hint': 'tiki taka',
          choose: []
        },
        {
          'text': 'pla pla pla',
          'answers': {
            '1': 'beboba',
            '2': 'aeaoaa',
            '3': 'fg fgfg '
          },
          'correct': ['1', '2'],
          'hint': 'foo boo',
          choose: []
        }
      ]
    }
  },
  methods: {
    chooseAnswer(question, answer) {
      if (question.correct.length === 1) {
        question.choose = []
        if (!question.choose.includes(answer)) {
          question.choose.push(answer)
        }
        this.checkAnswers(question, answer)
      } else {
          if (this.status.right) {
            this.status.right = ''
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
        this.result = this.results_texts.success
        if (question.correct.length > 1) this.status.right = 'true_answer_checkbox'
        document.getElementById(`step${answer}`).classList.remove('wrong_step')
      } else {
        this.result = this.results_texts.fail
        document.getElementById(`step${answer}`).classList.add('wrong_step')
      }
    },
    goNext() {
      this.e1 += 1
      this.result = ''
    },
    goPrev() {
      this.e1 -= 1
    }
  }
}
