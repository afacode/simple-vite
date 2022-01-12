const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const app = new Koa()

app.use(async ctx => {
  console.log(ctx.url)
  const { url, query } = ctx.request
  if (url === '/') {
    ctx.type = 'text/html'
    const content = fs.readFileSync('./index.html', 'utf-8')
    ctx.body = content
  } else if (url.endsWith('.js')) {
    ctx.type = 'application/javascript'
    const pathFile = path.resolve(__dirname, url.slice(1))
    console.log(pathFile)
    const content = fs.readFileSync(pathFile, 'utf-8')
    ctx.body = content
  }
})

app.listen(8989, () => {
  console.log('simple vite app start port 8989')
})