export default {
    name: 'SignUpComponent',
    data: () => ({
      reader: null,
      i18n: {
        saveChanges: 'حفظ التغييرات',
        text1: 'بتفعيل هذا الخيار ستصلك اخر الاخبار والمستجدات بالمنصة'
      },
      user: {
        image: 'https://i.pinimg.com/originals/05/8e/11/058e113deb326bd3583527b2ff650af0.jpg',
        username: 'john',
        fullname: 'john Doe'
      },
      apiReply: {
        newImage: 'https://pbs.twimg.com/profile_images/453785506073964544/XLrNdA2n.jpeg'
      },
      validImage: {
        valid: 1,
        imageData: ''
      },
      alert: {
        success: false,
        error: false,
        message: ''
      },
      imageData: '',
      valid: 0,
      vs: {
        v1: 0,
        v2: 0,
        v3: 0
      },
      fullname: '',
      fullname_label: 'اسمك الكامل',
      fnRules: [
        v => !!v || '',
        v => (v && v.length <= 20) || 'اسم المستخدم لا يجب أن يتجاوز 20 حرفًا'
      ],
      mailSubs: false,
      email: '',
      email_label: 'البريد الإلكتروني',
      emRules: [
        v => !!v || '',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'البريد الإلكتروني غير صالح'
      ],
      username: '',
      username_label: 'اسم المستخدم',
      unRules: [
        v => !!v || '',
        v => (v && v.length <= 20) || 'اسم المستخدم لا يجب أن يتجاوز 20 حرفًا'
      ]
    }),
    watch: {
      'validImage.valid': function() {
        this.chackValid()
      }
    },
    updated() {
      this.chackValid()
    },
    methods: {
      previewImage(event) {
        let input = event.target
        this.reader = new FileReader()
        if (input.files && input.files[0]) {
          const img = new Image()
          img.src = window.URL.createObjectURL(input.files[0])
          img.onload = () => {
            let width = img.naturalWidth
            let height = img.naturalHeight
            window.URL.revokeObjectURL(img.src)
            if (width === height) {
              this.validImage.valid = 1
              this.validImage.imageData = input.files[0]
              this.reader.onload = (e) => {
                this.imageData = e.target.result
              }
              this.reader.readAsDataURL(input.files[0])
            } else {
              this.validImage.valid = 0
            }
          }
        }
      },
      chackValid() {
        var root = this
        root.vs.v1 = 1
        root.vs.v2 = 1
        root.vs.v3 = 1
        root.fnRules.forEach((rule) => {
          if (rule(root.fullname) !== true) {
            root.vs.v1 = 0
          }
        })
        root.emRules.forEach((rule) => {
          if (rule(root.email) !== true) {
            root.vs.v2 = 0
          }
        })
        root.unRules.forEach((rule) => {
          if (rule(root.username) !== true) {
            root.vs.v3 = 0
          }
        })
        root.valid = root.vs.v1 + root.vs.v2 + root.vs.v3 + root.validImage.valid
      },
      json(success) {
        if (success === true) {
          return JSON.parse('{"success": true, "message": "تم تحديث ملفك الشخصي بنجاح"}')
        } else {
          return JSON.parse('{"success": false, "message": "خطأ! يُرجى المحاولة لاحقًا"}')
        }
      },
      submit() {
        if (this.$refs.form.validate()) {
          var root = this
          // axios.post('/updateprofile', {username: this.username, email: this.email , fullname:this.fullname , mailSubs: this.mailSubs}).then(
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
            setTimeout(() => {
              root.$router.push('/congratulations')
            }, 1000)
          } else {
            root.alert.error = true
          }
        }
      }
    },
    mounted() {
      window.addEventListener('resize', this.setAvatarsHeight)
      this.imageData = this.apiReply.newImage
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onResize)
    }
  }
