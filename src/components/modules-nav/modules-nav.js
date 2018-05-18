export default {
   name: 'ModulesNavComponent',
   components: {},
   data: () => ({
      current: {
         module: {},
      }
   }),
   props: ['modules'],
   created() {
      if (typeof this.$route.params.module !== 'undefined') {
         this.current.module = this.$api.getModuleId(this.modules)
      } else {
         this.current.module = this.modules[0]
      }
   },
   watch: {},
   methods: {
      getClass(module) {
         if (this.isComplete(module)) {
            return 'complete-state'
         } else {
            return 'active-state'
         }
      },
      isComplete(module) {
         let complete = true;
         for (let i = 0; i < module.lessons.length; i++) {
            if (module.lessons[i].is_shown === false) {
               complete = false;
               break;
            }
         }
         return complete;
      },
      // getClass(module) {
      //    let cls = ''
      //    if (module.complete) {
      //       cls = 'complete-state'
      //    } else if (module.id === this.current.module.id) {
      //       cls = 'active-state'
      //    }
      //    return !module.active ? `elevation-1 ${cls}` : cls
      // },
      // islessonActive(id, number) {
      //    let moduleId = Number(this.$route.params.course)
      //    let lesson = Number(this.$route.params.number)
      //    if (moduleId === id && lesson > number) {
      //       if (number + 1 === lesson) {
      //          return 'lesson-complete-state'
      //       } else {
      //          return 'lesson-all-complete-state'
      //       }
      //    } else if (moduleId === id && lesson === number) {
      //       return 'lesson-active-state'
      //    }
      // },
      isLessonActive(lesson) {

      },
      getLessonAction(type) {
         switch (type) {
            case "0":
               return 'play_arrow'
            case "1":
            return 'play_arrow'
               // break
            case "2":
            return 'menu'
               // break
            case "3":
               return 'star'
               break
            case "4":
               return 'build'
               // break
         }
      }
   }
}
