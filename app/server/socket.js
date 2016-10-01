export default (socket) => {
  console.log('a user has connected')

  socket.on('client:message', (data) => {
    console.log(data)
  })

  socket.on('disconnect', () => {
    console.log('a user has disconnected')
  })
}
