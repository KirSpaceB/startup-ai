import ChatInput from "@/components/ChatInput"
import ChatLayout from "@/components/ChatLayout"
import UploadForm from "@/components/UploadForm"

export default function HomeworkHelpPage() {
  return (
    <div className="flex flex-col h-screen">
      <ChatLayout>{/* We'll put ChatMessages here later */}</ChatLayout>
      <ChatInput />
    </div>
  )
}
