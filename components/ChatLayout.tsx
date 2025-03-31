"use client"

import { useChat } from "@/app/context/ChatContext"

export default function ChatLayout() {
  const { messages } = useChat()
  console.log(messages)

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`max-w-sm p-3 rounded-lg shadow ${
            msg.role === "user" ? "bg-white self-end" : "bg-gray-100 self-start"
          }`}
        >
          {msg.content}
        </div>
      ))}
    </div>
  )
}
