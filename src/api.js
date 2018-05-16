import axios from 'axios'
import router from './router'
import showdown from 'showdown'

showdown.setFlavor('github')
const markdown = new showdown.Converter({
   emoji: false,
   tables: true,
   underline: true,
   tasklists: true,
   noHeaderId: true,
   strikethrough: true,
   tablesHeaderId: true,
   parseImgDimensions: true
   // splitAdjacentBlockquotes:true,
   // omitExtraWLInCodeBlocks: true,
})

export default {
   install: (Vue) => {
      Vue.prototype.$http = {
         async get(url) {
            return new Promise((resolve, reject) => {
               axios.get(url)
                  .then(result => {
                     resolve(result.data)
                  }, error => {
                     reject(error)
                  })
            })
         },
         async post(url) {
            return new Promise((resolve, reject) => {

            })
         }
      }
      Vue.prototype.$api = {
            getWorkshopId(workshops) {
               let index = workshops.findIndex(function(workshop) {
                  return router.app.$route.params.workshop === workshop.url.params.workshop
               }.bind(this))
               if (index === -1) {
                  router.push('/404')
               } else {
                  return workshops[index]
               }
            },
            getModuleId(modules) {
               let index = modules.findIndex(function(module) {
                  return router.app.$route.params.module === module.url.params.module
               }.bind(this))
               return modules[index]
            },
            getLessonId(lessons) {
               let index = lessons.findIndex(function(module) {
                  return router.app.$route.params.lesson === module.url.params.lesson
               }.bind(this))
               if (index === -1) {
                  router.push('/404')
               } else {
                  return lessons[index]
               }
            },
            getWorkshopsData(url) {
               return new Promise((resolve, reject) => {
                  Vue.prototype.$http.get(url)
                     .then(data => {
                        let workshops = []
                        data.forEach((workshop, workshopIndex) => {
                           workshops.push({
                              index: workshopIndex + 1,
                              url: {
                                 name: 'workshop',
                                 params: {
                                    workshop: workshop.slug,
                                 }
                              },
                              level: workshop.level,
                              title: workshop.title,
                              duration: workshop.duration,
                              description: workshop.description,
                              shown_percentage: workshop.shown_percentage,
                              workshop_result_url: workshop.workshop_result_url,
                              used_technologies: workshop.used_technologies.split(', ').reverse(),
                              last_update_date: Vue.prototype.$date.get(new Date(workshop.last_update_date)),
                              authors: workshop.authors,
                              modules: []
                           })
                           workshop.modules.forEach((module, moduleIndex) => {
                              workshops[workshopIndex].modules.push({
                                 active: true,
                                 title: module.title,
                                 index: moduleIndex + 1,
                                 url: {
                                    name: 'modules',
                                    params: {
                                       module: module.slug
                                    }
                                 },
                                 lessons: []
                              })
                              module.lessons.forEach((lesson, lessonIndex) => {
                                 let url = ''
                                 let notes = ''
                                 if (lesson.type === '0' || lesson.type === '1') {
                                    url = Vue.prototype.$encryption.b64EncodeUnicode(lesson.video_url)
                                    notes = Vue.prototype.$encryption.b64EncodeUnicode(lesson.markdown_url)
                                 } else {
                                    url = Vue.prototype.$encryption.b64EncodeUnicode(lesson.markdown_url)
                                    notes = ''
                                 }
                                 workshops[workshopIndex].modules[moduleIndex].lessons.push({
                                    index: lessonIndex + 1,
                                    url: {
                                       name: 'lessons',
                                       params: {
                                          module: module.slug,
                                          lesson: lesson.slug,
                                          workshopURL: workshop.url,
                                          modules: workshops[workshopIndex].modules
                                       },
                                       query: {
                                          url: url,
                                          notes: notes,
                                          type: Vue.prototype.$encryption.b64EncodeUnicode(lesson.type)
                                       }
                                    },
                                    query: {
                                       url: url,
                                       notes: notes,
                                       type: Vue.prototype.$encryption.b64EncodeUnicode(lesson.type)
                                    },
                                    type: lesson.type,
                                    title: lesson.title,
                                    is_shown: lesson.is_shown
                                 })
                              })
                           })
                        })
                        resolve(workshops)
                     })
                     .catch(err => {
                        reject(err)
                     })
               })
            }
         },
         Vue.prototype.$util = {
            prettyDigit(n) {
               return (n < 10) ? `0${n}` : n
            }
         }
      Vue.prototype.$date = {
         get(date) {
            return `${Vue.prototype.$util.prettyDigit(date.getDate())}/${Vue.prototype.$util.prettyDigit(date.getMonth())}/${date.getFullYear()}`
         }
      }
      Vue.prototype.$encryption = {
         b64DecodeUnicode(str) {
            return decodeURIComponent(atob(str).split('').map(function(c) {
               return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            }).join(''))
         },
         b64EncodeUnicode(str) {
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
               function toSolidBytes(match, p1) {
                  return String.fromCharCode('0x' + p1)
               }))
         }
      }

      Vue.prototype.$markdown = {
         render(mdText) {
            // return '<iframe width="1000" height="500" src="https://scrimba.com/c/cPvE3cE"></iframe>'
            let youtube = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g
            let link = /(?!\S+youtube\.com|youtu\.be)(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
            mdText = mdText.replace(youtube, '<iframe class="youtube" height="720" src="https://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>')
            mdText = mdText.replace(link, '<a href="$1" target="_blank">$1</a>')
            let html = markdown.makeHtml(mdText)
            html = html.replace(/<blockquote>(.*?)<\/blockquote>/gs, '<blockquote><div class="quotes no-select"><i class="material-icons">format_quote</i></div>$1<div class="quotes no-select"><i class="material-icons">format_quote</i></div></blockquote>')
            html = html.replace(/<pre>(.*?)<\/pre>/gs, '<pre><div class="code-action"><v-btn flat icon><v-icon>content_copy</v-icon></v-btn></div>$1</pre>')
            return html
         }
      }
   }
}
