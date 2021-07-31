import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import Parser from "rss-parser"
import cheerio from "cheerio"

const postsDirectory = join(process.cwd(), "_posts")

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // 引数のfieldsで指定した情報だけを配列にして返す
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // 投稿を日付の降順で並び替える
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export const getRSSFeed = async (siteName: string, url: string) => {
  const parser = new Parser()
  const feed = await parser.parseURL(url)

  const feedData = feed.items.map((data: any) => ({
    slug: data.link,
    title: data.title,
    date: data.isoDate,
    emoji: "",
    category: siteName,
  }))

  return feedData
}

export const generateTableOfContent = (body: string) => {
  const $ = cheerio.load(body, { decodeEntities: false })
  let generateHtml = ""
  generateHtml = generateHtml + "<ul>"
  $("h1, h2").each((index, elm) => {
    //h1 or h2タグの中身を取得し不要な部分を置換
    const innerHeading = $(elm).html()
    const text = innerHeading?.replace(/<a .+<\/a>/g, "")

    //h1 or h2のタグの名前を取得
    const tag = $(elm)[0].name

    //idを取得
    const refId = $(elm)[0].attribs.id

    generateHtml =
      generateHtml +
      `<li class="toc_${tag}" key=${index}>` +
      `  <a href="#${refId}">${text}</a>` +
      "</li>"
  })
  generateHtml = generateHtml + "</ul>"
  return generateHtml
}
