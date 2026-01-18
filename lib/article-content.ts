import { readFileSync } from "fs"
import { join } from "path"

export function getArticleContent(slug: string): string {
  try {
    const filePath = join(process.cwd(), "app", "articles", `${slug}.md`)
    const content = readFileSync(filePath, "utf-8")
    return content
  } catch (error) {
    return ""
  }
}

export function markdownToHtml(markdown: string): string {
  let html = markdown

  // Convert headers
  html = html.replace(/^# (.+)$/gm, '<h1 class="font-serif text-4xl font-bold mb-6 mt-8">$1</h1>')
  html = html.replace(/^## (.+)$/gm, '<h2 class="font-serif text-3xl font-bold mb-4 mt-8">$1</h2>')
  html = html.replace(/^### (.+)$/gm, '<h3 class="font-serif text-2xl font-bold mb-3 mt-6">$1</h3>')

  // Convert paragraphs (lines that aren't headers or empty)
  html = html.split("\n\n").map((paragraph) => {
    if (paragraph.trim() === "") return ""
    if (paragraph.startsWith("<h")) return paragraph
    return `<p class="mb-6 leading-relaxed text-lg">${paragraph.trim()}</p>`
  }).join("\n")

  // Convert bold
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")

  // Convert italic
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>")

  return html
}

