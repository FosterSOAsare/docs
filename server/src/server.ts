import http from 'http'
import app from './app'
import dotenv from 'dotenv'

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;


(async function () {
  server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`)
  })
}())