import React from 'react'

function ChatRoom({ messages }) {
  return (
    <div className="p-4">
      <div className="bg-white p-4 rounded mt-4 shadow overflow-y-auto max-w-96">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 p-2 rounded ${
              msg.type === 'sent-message' ? 'bg-[#B871FF] text-white self-end' : 'bg-gray-200 text-gray-800 self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatRoom
