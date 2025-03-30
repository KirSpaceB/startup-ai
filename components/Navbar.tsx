"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b shadow-sm">
      <div className="text-xl font-bold">
        <Link href="/">Startup AI</Link>
      </div>
      <div className="space-x-2">
        <Link href="/homework-help">
          <Button variant="outline">Homework Help</Button>
        </Link>
        <Link href="/upload">
          <Button>Try It</Button>
        </Link>
      </div>
    </nav>
  )
}
