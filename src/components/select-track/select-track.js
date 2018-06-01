export default {
  name: 'SelectTrackComponent',
  components: {},
  data: () => ({
    track_selected: '0',
    track_1_text_en: 'BACK-END TRACK',
    track_1_text_ar: 'مسار تطوير نظم خلفية',
    track_2_text_en: 'FRONT-END TRACK',
    track_2_text_ar: 'مسار تطوير واجهات الويب',
    submit_btn_text: 'ابدأ المسار'
  }),
  methods: {
    select(track) {
      this.track_selected = track
    },
    submit() {
    }
  }
}
