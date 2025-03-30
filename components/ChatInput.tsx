"use client"

import React, { useState, useRef } from "react"

export default function ChatInput() {
  // 💾 Stores the typed text (e.g., "2 + 2")
  const [typedValue, setTypedValue] = useState("")

  // 💾 Stores the image preview data URL (base64)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  // Tracks whether the user is currently dragging over the input box
  const [isDragging, setIsDragging] = useState(false)

  // Reference to the contentEditable div
  const inputRef = useRef<HTMLDivElement>(null)

  // 🧠 Fires when user types in the box
  const handleInput = () => {
    if (inputRef.current) {
      const newText = inputRef.current.innerText
      setTypedValue(newText) // <-- 🔧 This is where typed input is stored
      // 🔍 You can manipulate or process `newText` here before storing
    }
  }

  // 🧠 Fires when something is being dragged over the box
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  // 🧠 Fires when dragging leaves the box
  const handleDragLeave = () => {
    setIsDragging(false)
  }

  // 🧠 Fires when user drops something (image or text)
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer.files
    const text = e.dataTransfer.getData("text/plain")

    // 📥 Handle dropped image
    if (files && files.length > 0) {
      const file = files[0]
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (event) => {
          const imgSrc = event.target?.result as string

          setImagePreview(imgSrc) // <-- 🔧 This is where dropped image data is stored
          // 🔍 You can manipulate/process the image data here (e.g., send to OCR, etc.)
        }
        reader.readAsDataURL(file)
      }
    }
    // 📥 Handle dropped plain text
    else if (text) {
      if (inputRef.current) {
        inputRef.current.innerText = text
        setTypedValue(text) // <-- 🔧 This is where dropped text is stored
        // 🔍 You can manipulate/process the dropped text here
      }
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      {/* 🧾 This is the input box (also a drop zone) */}
      <div
        ref={inputRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed rounded p-4 min-h-[60px] transition-colors ${
          isDragging ? "bg-gray-100" : "bg-white"
        }`}
      >
        {/* Placeholder shown when nothing typed or dropped */}
        {typedValue === "" && !imagePreview && (
          <span className="text-gray-400">Type or drop math problem here</span>
        )}
      </div>

      {/* 🖼️ Image preview section */}
      {imagePreview && (
        <div className="mt-4">
          <p className="mb-2 text-sm text-gray-600">Dropped Image Preview:</p>
          <img
            src={imagePreview}
            alt="Dropped Preview"
            className="max-w-full rounded shadow"
          />
        </div>
      )}
    </div>
  )
}
