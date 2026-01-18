import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"
import { articles } from "./articles"

export default function HomePage() {
  const heroArticle = articles[0]
  const moreArticles = articles.slice(1)

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
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <article className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="order-2 md:order-1">
              <div className="mb-4">
                <span className="inline-block text-xs font-bold uppercase tracking-wider bg-foreground text-background px-3 py-1.5 shadow-sm">
                  {heroArticle.category}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-balance">
                {heroArticle.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                <span>{heroArticle.byline}</span>
                <span>•</span>
                <span>{new Date(heroArticle.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {heroArticle.readingMinutes} min read
                </span>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-6 sm:mb-8">
                {heroArticle.dek}
              </p>
              <Link
                href={`/articles/${heroArticle.slug}`}
                className="inline-block px-6 py-3 sm:px-8 sm:py-3.5 bg-foreground text-background font-medium hover:opacity-90 active:opacity-80 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Read Full Story
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-full h-[280px] sm:h-[350px] md:h-[500px] bg-muted relative overflow-hidden rounded-sm shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={heroArticle.imagePath}
                  alt={heroArticle.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
                  <div className="h-1 w-16 bg-background mb-3 opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* More Articles Section */}
        <section>
          <h3 className="font-serif text-xl sm:text-2xl font-bold mb-6 sm:mb-8 pb-2 border-b-2 border-foreground">
            More Articles
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {moreArticles.map((article) => (
              <article key={article.slug} className="group">
                <Link href={`/articles/${article.slug}`} className="block">
                  <div className="mb-4 sm:mb-6 overflow-hidden rounded-sm shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <div className="w-full h-[200px] sm:h-[240px] bg-muted relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Image
                        src={article.imagePath}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-background rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider bg-foreground text-background px-3 py-1.5 shadow-sm">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight mb-3 group-hover:text-destructive transition-colors duration-200 text-balance">
                    {article.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2">
                    {article.dek}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span>{article.byline}</span>
                    <span>•</span>
                    <span>{new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readingMinutes} min
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
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
