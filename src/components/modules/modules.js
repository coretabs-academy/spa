export default {
   name: 'ModulesComponent',
   components: {},
   data: () => ({
      height: 0,
      trackURL: '',
      loaded: false,
      categories: [],
      drawer: {
         isOpen: true,
         isRight: false
      },
      current: {
         categorie: {
            id: '',
            title: '',
            topic: {
               title: ''
            }
         }
      }
   }),
   created() {
      this.drawer.isRight = this.$store.state.direction === 'rtl'
      this.$store.commit('getGithubFileURL', {
         repo: `${this.$route.params.track}-tutorials`,
         path: 'topics.json'
      })
      this.$http.get(this.$store.state.githubFileURL)
         .then(data => {

         })

   },
   // isTopicActive(topic) {
   //
   // },
   getType(type) {
      switch (type) {
         case 0:
         case 1:
            return 'play_arrow'
            break
         case 2:
            return 'menu'
            break
         case 3:
            return 'star'
            break
         case 4:
            return 'build'
            break
      }
      // return 'build'
   }
}
