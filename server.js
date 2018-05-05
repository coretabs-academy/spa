const history = require('connect-history-api-fallback')
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

const staticFileMiddleware = express.static('public_html')
app.use(staticFileMiddleware)
app.use(history({
   disableDotRule: true,
   verbose: true
}))

const indexHTML = (() => {
   return fs.readFileSync(path.resolve('./public_html/index.html'), 'utf-8')
})()

app.get('*', (req, res) => {
   res.write(indexHTML)
   res.end()
})
const port = process.env.PORT || 3000
app.listen(port, () => {
   console.log(`server started as http://localhost:${port}`)
})
