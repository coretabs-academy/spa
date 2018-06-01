export default {
    data: () => ({
        pw: true,
        password: '',
        password1: '',
        password2: '',
        i18ln: {
            currentPass: 'كلمة المرور الحالية',
            newPass: 'كلمة المرور الجديدة',
            reNewPass: 'تأكيد كلمة المرور الجديدة',
            submitBtnText: 'حفظ التغيرات'
        },
        pwRules: [
            v => !!v || '',
            v => (v && v.length >= 10) || 'كلمة السر يجب أن تتكون من 10 أحرف على الأقل'
          ]
    })
}
