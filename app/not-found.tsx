import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
          BAY AREA TIMES
        </h1>
        <p className="text-xl text-muted-foreground mb-8">More reporting coming soon.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}

