export default {
    name: 'SignUpComponent',
    data: () => ({
        valid: true,
        alert: {
            success: false,
            error: false,
            message: ''
        },
        username: '',
        nameRules: [
         v => !!v || 'اسم المستخدم مطلوب',
         v => (v && v.length <= 20) || 'اسم المستخدم لا يجب أن يتجاوز 20 حرفًا'
        ],
        email: '',
        emailRules: [
         v => !!v || 'البريد الإلكتروني مطلوب',
         v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'البريد الإلكتروني غير صالح'
        ]
    }),
    methods: {
        json(success) {
            if (success === true) { return JSON.parse('{"success": true, "message": "Thank you for register."}') } else { return JSON.parse('{"success": false, "message": "Failed! please try again later."}') }
        },
        submit() {
            if (this.$refs.form.validate()) {
                var root = this
                // axios.post('/signup', {username: this.username, email: this.email}).then(
                //     function (response) {
                //         root.alert.message = response.data.message
                //         if (response.data.success == "true") {
                //             root.alert.success = true
                //         } else {
                //             root.alert.error = true
                //         }
                //     }
                // )

                var data = this.json(true)
                root.alert.message = data.message
                if (data.success === true) {
                    root.alert.success = true
                } else {
                    root.alert.error = true
                }
            }
        }
    }
}
