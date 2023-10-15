// src/ChatApp.js
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
import ChatRoom from './ChatRoom'
import ChatInput from './ChatInput'
import useAuth from '@/hooks/useAuth'

import sha256 from 'crypto-js/sha256'

const URL = import.meta.env.VITE_SOCKET
const socket = io(URL)

function Chat() {
  const { id } = useParams()
  const { userId } = useAuth()

  function hexToInteger(hex) {
    return parseInt(hex, 16)
  }

  function integerToHex(int) {
    return int.toString(16)
  }

  function generateUniqueString(hexString1, hexString2) {
    const int1 = hexToInteger(hexString1)
    const int2 = hexToInteger(hexString2)

    const sortedIntegers = [int1, int2].sort((a, b) => a - b)

    const combinedData = integerToHex(sortedIntegers[0]) + integerToHex(sortedIntegers[1])
    const uniqueString = sha256(combinedData).toString()
    return uniqueString
  }

  const uniqueString = generateUniqueString(id, userId)
  console.log('Unique String:', uniqueString)

  const [messages, setMessages] = useState([])
  const [room, setRoom] = useState('default')

  useEffect(() => {
    socket.on('receive-chat-message', (message) => {
      setMessages([...messages, { text: message.text, type: 'received-message', userId: message.userId }])
    })
    joinRoom(uniqueString)
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
