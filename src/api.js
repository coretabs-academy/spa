import axios from 'axios'
import showdown from 'showdown'

showdown.setFlavor('github')
let markdown = new showdown.Converter({
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
