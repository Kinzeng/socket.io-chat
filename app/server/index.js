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

let count = 0
io.on('connection', (socket) => {
  count++
  console.log(`a user has connected - ${count} users in chat`)

  socket.on('client:message', (data) => {
    console.log(`\tmessage received from ${data.name}: ${data.message}`)
    io.emit('server:message', data)
    // socket.emit('server:sender', 'You sent the message')
  })

  socket.on('disconnect', () => {
    count--
    console.log(`a user has disconnected - ${count} users in chat`)
  })
})

httpServer.listen(config.port, config.host, () => {
  console.log(`App listening on ${config.host}:${config.port}`)
})

module.exports = app
