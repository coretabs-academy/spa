export default {
  data() {
    return {
      e1: 0,
      heading_text: 'اختر الإجابة الصحيحة',
      result: '',
      results_texts: {
        success: 'أحسنت الإجابة صحيحة',
        fail: 'أحسنت المحاولة! ',
        hint: 'هل تريد الحصول على تلميح ؟'
      },
      buttons_texts: {
        confirm: 'تأكيد الإجابة',
        retry: 'أعد المحاولة',
        dismiss: 'تجاهل السؤال',
        next: 'السؤال التالي'
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
            '2': 'aeaoaa'
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
        this.checkAnswers(question)
      } else {
        if (question.choose.includes(answer)) {
          question.choose.splice(question.choose.indexOf(answer), 1)
        } else {
          question.choose.push(answer)
        }
      }
    },
    checkAnswers(question) {
      question.choose.sort()
      if (question.choose.toString() === question.correct.toString()) {
        this.result = this.results_texts.success
      } else {
        this.result = this.results_texts.fail
      }
    },
    goNext() {
      this.e1 += 1
      this.result = ''
    }
  }
}
