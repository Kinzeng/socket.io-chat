import http from 'http'
import express from 'express'
import socketio from 'socket.io'
import config from '../../config'
import middleware from './middleware'
import socket from './socket'

const app = middleware(express())
const httpServer = http.Server(app)
const io = socketio(httpServer)

app.all('*', (req, res) => {
  res.render('index')
})

io.on('connection', socket)

httpServer.listen(config.port, () => {
  console.log('App listening on port ' + config.port)
})

module.exports = app
