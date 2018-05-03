export default {
    data() {
        return {
            successTxt: 'أحسنت اللإجابة صحيحة',
            failTxt: 'أحسنت المحاولة!',
            retryTxt: 'أعد المحاولة',
            confirmTxt: 'تأكيد الإجابة',
            nextQs: 'السؤال التالي',
            e1: 0,
            items: [
                {
                    'question': 'bla bla bla',
                    'answers': {
                        '1': 'beboba',
                        '2': 'aeaoaa'
                    },
                    'correct': ['1'],
                    'hint': 'koko kaka'
                },
                {
                    'question': 'ola ola ola',
                    'answers': {
                        '1': 'beboba',
                        '2': 'aeaoaa'
                    },
                    'correct': ['2'],
                    'hint': 'tiki taka'
                },
                {
                    'question': 'pla pla pla',
                    'answers': {
                        '1': 'beboba',
                        '2': 'aeaoaa'
                    },
                    'correct': ['1', '2'],
                    'hint': 'foo boo'
                }
            ]
        }
    }
}
