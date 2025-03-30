import { useState } from "react"
import Tesseract from "tesseract.js"

export function useOCR() {
  const [isProcessing, setIsProcessing] = useState(false)

  const extractTextFromImage = async (
    image: File | string
  ): Promise<string> => {
    setIsProcessing(true)
    try {
      const result = await Tesseract.recognize(image, "eng")
      const text = result.data.text
      return text.trim()
    } catch (err) {
      console.error("OCR failed:", err)
      return "OCR failed. Please try again."
    } finally {
      setIsProcessing(false)
    }
  }

  return { extractTextFromImage, isProcessing }
}
