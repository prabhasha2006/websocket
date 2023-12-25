require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')
//app
const app = express()

//middleware
app.use(express.json())
app.use((request, res, next) => {
    console.log(request.path, request.method)
    next()
})
app.use('/api/workouts', workoutRoutes)
//router
app.get('/', (request, res) => {
    res.json({mssg: "Hello Kumuthu"})
    res.sendFile('/index.html', { root: __dirname })
}) 
//listen
app.listen(process.env.PORT, () => {
    console.log('Listerning Port => ',process.env.PORT)
})

//websocker
/*const express = require('express')
const webserver = express()
 .use((req, res) =>
   res.sendFile('/index.html', { root: __dirname })
 )
 .listen(2006, () => console.log(`RedDragon eveocode hosting on ${2006}`))
const { WebSocketServer } = require('ws')
const sockserver = new WebSocketServer({ port: 443 })
sockserver.on('connection', ws => {
 console.log('New client connected!')
 ws.send('connection established')
 ws.on('close', () => console.log('Client has disconnected!'))
 ws.on('message', data => {
   sockserver.clients.forEach(client => {
     console.log(`distributing message: ${data}`)
     client.send(`${data}`)
   })
 })
 ws.onerror = function () {
   console.log('websocket error')
 }
})*/