import { ReactNode } from "react"

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col h-screen">
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  )
}
