import ChatInput from "@/components/ChatInput"
import ChatLayout from "@/components/ChatLayout"
import { ChatProvider } from "@/app/context/ChatContext"

export default function HomeworkHelpPage() {
  return (
    <ChatProvider>
      <div className="flex flex-col h-screen">
        <ChatLayout>{/* We'll put ChatMessages here later */}</ChatLayout>
        <ChatInput />
      </div>
    </ChatProvider>
  )
}
