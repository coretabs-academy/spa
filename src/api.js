import axios from 'axios'
import showdown from 'showdown'

let markdown = new showdown.Converter()

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
            let youtube = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g,
               link = /(?!\S+youtube\.com|youtu\.be)(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
            mdText = mdText.replace(youtube, "<iframe class='youtube' src='https://www.youtube.com/embed/$1' frameborder='0' allowfullscreen></iframe>")
            mdText = mdText.replace(link, "<a href='$1' target='_blank'>$1</a>")
            let html = markdown.makeHtml(mdText)
            html = html.replace(/^<blockquote>[\n](.*)[\n]<\/blockquote>$/mg,"<blockquote><div class='quotes no-select'><i class='material-icons'>format_quote</i></div>$1<div class='quotes no-select'><i class='material-icons'>format_quote</i></div></blockquote>")
            return html
         }
      }
   }
}
