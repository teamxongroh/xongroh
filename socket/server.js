const PORT = '8002'
require('dotenv').config()

const allowedOriginsJson = process.env.ALLOWED_ORIGINS_JSON || '[]'
const allowedOrigins = JSON.parse(allowedOriginsJson)

const io = require('socket.io')(PORT, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
  },
})

function getUsernameFromToken(token) {
  return token
}

// 2nd namespace
const userIo = io.of('/user')

userIo.on('connection', (socket) => {
  console.log('Connected on User namespace ' + socket.username)
})

// Middleware
userIo.use((socket, next) => {
  if (socket.handshake.auth.token) {
    socket.username = getUsernameFromToken(socket.handshake.auth.token)
    next()
  } else {
    next(new Error('Please send token'))
  }
})

io.on('connection', (socket) => {
  console.log('Socket ID ' + socket.id + ' active')

  socket.on('send-chat-message', (message, room) => {
    socket.to(room).emit('receive-chat-message', message)
  })

  socket.on('join-room', (room, cb) => {
    socket.join(room)
    cb(`Handshake ID: ${room}`)
  })
})

console.log(`Server running on port ${PORT}`)