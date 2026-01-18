import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Clock, Download } from "lucide-react"
import type React from "react"
import { getArticleBySlug } from "../../articles"
import { getArticleContent } from "@/lib/article-content"

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

function renderMarkdown(content: string) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let currentParagraph: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    if (line.startsWith("# ")) {
      if (currentParagraph.length > 0) {
        elements.push(
          <p key={`p-${i}`} className="mb-5 sm:mb-6 leading-relaxed text-base sm:text-lg">
            {currentParagraph.join(" ")}
          </p>
        )
        currentParagraph = []
      }
      elements.push(
        <h1 key={`h1-${i}`} className="font-serif text-3xl sm:text-4xl font-bold mb-5 sm:mb-6 mt-8 sm:mt-12 first:mt-0">
          {line.substring(2)}
        </h1>
      )
    } else if (line.startsWith("## ")) {
      if (currentParagraph.length > 0) {
        elements.push(
          <p key={`p-${i}`} className="mb-5 sm:mb-6 leading-relaxed text-base sm:text-lg">
            {currentParagraph.join(" ")}
          </p>
        )
        currentParagraph = []
      }
      elements.push(
        <h2 key={`h2-${i}`} className="font-serif text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 mt-8 sm:mt-10">
          {line.substring(3)}
        </h2>
      )
    } else if (line.startsWith("### ")) {
      if (currentParagraph.length > 0) {
        elements.push(
          <p key={`p-${i}`} className="mb-5 sm:mb-6 leading-relaxed text-base sm:text-lg">
            {currentParagraph.join(" ")}
          </p>
        )
        currentParagraph = []
      }
      elements.push(
        <h3 key={`h3-${i}`} className="font-serif text-xl sm:text-2xl font-bold mb-3 sm:mb-4 mt-6 sm:mt-8">
          {line.substring(4)}
        </h3>
      )
    } else if (line === "") {
      if (currentParagraph.length > 0) {
        elements.push(
          <p key={`p-${i}`} className="mb-5 sm:mb-6 leading-relaxed text-base sm:text-lg">
            {currentParagraph.join(" ")}
          </p>
        )
        currentParagraph = []
      }
    } else {
      currentParagraph.push(line)
    }
  }

  if (currentParagraph.length > 0) {
    elements.push(
      <p key="p-final" className="mb-5 sm:mb-6 leading-relaxed text-base sm:text-lg">
        {currentParagraph.join(" ")}
      </p>
    )
  }

  return elements
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const content = getArticleContent(slug)
  const articleContent = renderMarkdown(content)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="text-center">
            <Link href="/" className="block hover:opacity-90 transition-opacity">
              <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-1 sm:mb-2">
                BAY AREA TIMES
              </h1>
            </Link>
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Independent Journalism for the Bay Area
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <article>
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors active:opacity-70"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mb-8 sm:mb-10">
            <div className="w-full h-[280px] sm:h-[400px] md:h-[500px] bg-muted relative overflow-hidden rounded-sm shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
              <Image
                src={article.imagePath}
                alt={article.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
                <div className="h-1 w-16 bg-background opacity-80"></div>
              </div>
            </div>
          </div>

          {/* Article Header */}
          <div className="mb-8 sm:mb-10">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block text-xs font-bold uppercase tracking-wider bg-foreground text-background px-3 py-1.5 shadow-sm">
                {article.category}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-balance">
              {article.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              {article.dek}
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
              <span>{article.byline}</span>
              <span>•</span>
              <span>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {article.readingMinutes} min read
              </span>
            </div>
            <div className="border-t pt-6 sm:pt-8">
              <a
                href={article.pdfPath}
                download
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 bg-foreground text-background font-medium hover:opacity-90 active:opacity-80 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none border-t pt-6 sm:pt-8">
            <div className="font-serif text-base sm:text-lg leading-relaxed">
              {articleContent}
            </div>
          </div>

          {/* PDF Download Footer */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t">
            <div className="bg-muted p-5 sm:p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 sm:mb-3">Full Report Available</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Download the complete PDF report for detailed analysis, data, and additional resources.
              </p>
              <a
                href={article.pdfPath}
                download
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 bg-foreground text-background font-medium hover:opacity-90 active:opacity-80 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Download Full PDF Report
              </a>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-foreground mt-12 sm:mt-16 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">BAY AREA TIMES</h2>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 sm:mb-4">
            Est. 2025 • Independent Journalism
          </p>
          <div className="text-xs text-muted-foreground">© 2025 Bay Area Times. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

