import React, { useState } from 'react'

function ChatInput({ sendMessage, userId }) {
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const messageObject = {
        text: message,
        userId: userId,
      }
      sendMessage(messageObject)
      setMessage('')
    }
  }

  return (
    <div className="p-4">
      <input
        id="message"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        className="w-full rounded-lg p-2 border border-gray-300"
      />
      <button onClick={handleSendMessage} className="bg-blue-500 text-white rounded p-2 ml-2">
        Send
      </button>
    </div>
  )
}

export default ChatInput
