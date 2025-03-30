import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4">
          Extract Text from Images Using AI
        </h1>
        <p className="text-muted-foreground max-w-xl">
          Upload an image, run OCR, and get smart AI suggestions – all in one
          platform.
        </p>
      </section>
    </main>
  )
}
