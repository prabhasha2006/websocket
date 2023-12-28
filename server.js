require('dotenv').config()
const express = require('express')
const app = express()
const workoutRoutes = require('./routes/workouts')
const socketio = require('socket.io')(5556, {
    cors: {
        origin: ['http://localhost:5557/']
    }
})
//app

//middleware
app.use(express.json())
app.use((request, res, next) => {
    console.log(request.path, request.method)
    next()
})
app.use('/api/workouts', workoutRoutes)

//Identify direct path
app.use(express.static(`${process.cwd()}/website`));

//router
app.get('/', (request, res) => {
    //res.json({mssg: "Hello Kumuthu"})
    res.sendFile('./website/index.html', { root: __dirname })
}) 
//listen
app.listen(process.env.PORT, () => {
    console.log('Listerning Port => ',process.env.PORT)
})

//websocker
socketio.on('connection', socket => {
    console.log('connected..! ', socket.id)
})
