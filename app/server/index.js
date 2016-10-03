import http from 'http'
import express from 'express'
import socketio from 'socket.io'
import config from '../../config'
import middleware from './middleware'

console.log(config)

const app = middleware(express())
const httpServer = http.Server(app)
const io = socketio(httpServer)

app.all('*', (req, res) => {
  res.render('index')
})

const sockets = []
const users = []
io.on('connection', (socket) => {
  socket.on('client:login', (name) => {
    sockets.push(socket)
    users.push(name)

    console.log(`${name} has connected - ${sockets.length} users in chat`)
    socket.broadcast.emit('server:login', {message: `${name} has joined the chat.`, type: 'login'})
  })

  socket.on('client:message', (message) => {
    console.log(`\tmessage received from ${message.name}: ${message.message}`)
    io.emit('server:message', {...message, type: 'message'})
    // socket.emit('server:sender', 'You sent the message')
  })

  socket.on('disconnect', () => {
    const i = sockets.indexOf(socket)
    const user = users[i]

    console.log(`${user} has disconnected - ${sockets.length} users in chat`)
    socket.broadcast.emit('server:disconnect', {message: `${user} has left the chat.`, type: 'logout'})

    sockets.splice(i, 1)
    users.splice(i, 1)
  })
})

httpServer.listen(config.port, config.host, () => {
  console.log(`App listening on ${config.host}:${config.port}`)
})

module.exports = app
