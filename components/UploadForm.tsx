"use client"
import { Button } from "@/components/ui/button"
// 1. Create textbox that allows user to upload image
// 2. Create button that allows user to upload image

export default function UploadForm() {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-col gap-2">
        <Button>Upload Image</Button>

        <p>Response Area</p>
        <textarea name="" id="" className="bg-white border-8">
          test
        </textarea>
      </div>
    </div>
  )
}
