export interface Article {
  slug: string
  title: string
  dek: string
  byline: string
  date: string
  readingMinutes: number
  pdfPath: string
  imagePath: string
  category: string
}

export const articles: Article[] = [
  {
    slug: "da-recall-campaign-briefing",
    title: "The DA Recall Campaign: A City's Debate Over Criminal Justice",
    dek: "In January 2022, a group of San Francisco residents began collecting signatures to recall District Attorney Chesa Boudin. The campaign became a referendum on criminal justice reform in a city at the forefront of progressive policies.",
    byline: "Sarah Chen",
    date: "2025-01-15",
    readingMinutes: 12,
    pdfPath: "/reports/da-recall-campaign-briefing.pdf",
    imagePath: "/san-francisco-housing-market.jpg",
    category: "Politics",
  },
  {
    slug: "honduras-fentanyl-trade-in-san-francisco",
    title: "The Fentanyl Pipeline: Tracing Central American Drug Networks to San Francisco",
    dek: "Federal agents intercepted a shipment of fentanyl at the Port of Oakland. The drugs had originated in Honduras, passed through Mexico, and were destined for distribution in San Francisco. This investigation traces how fentanyl reaches the city.",
    byline: "Michael Torres",
    date: "2025-01-20",
    readingMinutes: 18,
    pdfPath: "/reports/honduras-fentanyl-trade-in-san-francisco.pdf",
    imagePath: "/public-transportation-initiative.jpg",
    category: "Investigative",
  },
  {
    slug: "fear-and-loathing-bay-bridge-2026-ballot-binge",
    title: "FEAR AND LOATHING ON THE BAY BRIDGE: THE 2026 BALLOT BINGE",
    dek: "We were somewhere around the toll plaza on the Bay Bridge when the realization began to take hold: The year is 2026, and the ballot is thick with the kind of bureaucratic madness that makes a man want to drive his convertible straight into the San Francisco Bay.",
    byline: "The Gonzo Desk",
    date: "2025-01-25",
    readingMinutes: 9,
    pdfPath: "/reports/fear-and-loathing-bay-bridge-2026-ballot-binge.pdf",
    imagePath: "/golden-gate-bridge-at-dawn.jpg",
    category: "Opinion",
  },
  {
    slug: "silicon-valley-ai-regulation-dilemma",
    title: "The Silicon Valley AI Regulation Dilemma: Innovation vs. Accountability",
    dek: "In the heart of Silicon Valley, where venture capital flows like water and startups are born and die in the span of a single funding round, a quiet battle is being waged over the future of artificial intelligence.",
    byline: "Jessica Martinez",
    date: "2025-01-26",
    readingMinutes: 11,
    pdfPath: "/reports/silicon-valley-ai-regulation-dilemma.pdf",
    imagePath: "/tech-sustainable-ai.jpg",
    category: "Technology",
  },
  {
    slug: "the-coup-the-crypto-and-the-15-dollar-chocolate-bar",
    title: "The Coup, The Crypto, and The $15 Chocolate Bar: How the Venezuela Raid Just Hit Your SF Sunday",
    dek: "While you were sleeping off your third espresso martini, the geopolitical map just glitch-reset. At 2:00 AM, the U.S. military initiated 'Operation Absolute Resolve'. By the time you ordered your first oat milk latte at Ritual, Venezuelan President Nicolás Maduro was snatched, bagged, and sitting in a brig on the USS Iwo Jima.",
    byline: "The Gonzo Desk",
    date: "2026-01-04",
    readingMinutes: 8,
    pdfPath: "/reports/the-coup-the-crypto-and-the-15-dollar-chocolate-bar.pdf",
    imagePath: "/modern-art-exhibition.png",
    category: "Opinion",
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

