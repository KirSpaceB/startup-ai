"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Message = {
  id: string
  role: "user" | "ai"
  content: string
}

type ChatContextType = {
  messages: Message[]
  addMessage: (message: Message) => void
}

// Create context with default type safety
const ChatContext = createContext<ChatContextType | undefined>(undefined)

// Provider component
export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([])

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message])
  }

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  )
}

// Custom hook for cleaner usage
export function useChat() {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider")
  }
  return context
}
