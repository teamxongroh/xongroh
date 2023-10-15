// src/ChatApp.js
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
import ChatRoom from './ChatRoom'
import ChatInput from './ChatInput'
import useAuth from '@/hooks/useAuth'
import sha256 from 'crypto-js/sha256'

function Chat() {
  const URL = import.meta.env.VITE_SOCKET
  const { id } = useParams()
  const { userId } = useAuth()
  const partnerId = id
  const hashDigest = sha256(userId + partnerId)
  const [messages, setMessages] = useState([])
  const [room, setRoom] = useState('default')
  console.log(hashDigest.toString()s)

  const socket = io(URL)

  useEffect(() => {
    socket.on('receive-chat-message', (message) => {
      setMessages([...messages, { text: message.text, type: 'received-message', userId: message.userId }])
    })
    joinRoom(hashDigest.toString())
  }, [messages])

  const sendMessage = (message) => {
    socket.emit('send-chat-message', message, room)
    setMessages([...messages, { text: message.text, type: 'sent-message', userId: message.userId }])
  }

  const joinRoom = (newRoom) => {
    socket.emit('join-room', newRoom, (response) => {
      console.log(response)
      setRoom(newRoom)
    })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-800 p-4">Chat</h1>
      <ChatRoom messages={messages} />
      <ChatInput sendMessage={sendMessage} joinRoom={joinRoom} room={room} setRoom={setRoom} userId={userId} />
    </div>
  )
}

export default Chat
