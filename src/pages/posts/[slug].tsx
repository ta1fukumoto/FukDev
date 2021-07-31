import { GetStaticPaths, GetStaticProps } from "next"
import { getAllPosts, getPostBySlug, generateTableOfContent } from "src/lib/api"

import Layout from "@/components/Layout/Layout"
import Container from "@/components/Layout/Container"
import Article from "@/components/UIGroup/Article"
import Aside from "@/components/UIGroup/Aside"
import Date from "@/components/UIParts/Date"

import { BiCalendarEdit } from "react-icons/bi"
import markdownToHtml from "zenn-markdown-html"

type Post = {
  slug: string
  title: string
  date: string
  emoji: string
  category: "Tech" | "Tips" | "Hobby"
  content: string
}

type Props = {
  post: Post
  toc: string
}

const ArticlePage: React.VFC<Props> = ({ post, toc }) => {
  const title = `${post.title} - fukDev`

  return (
    <Layout title={title}>
      <Container>
        <article className="w-full">
          <header className="max-w-3xl mx-auto mb-8">
            <div className="py-4 text-6xl text-center">{post.emoji}</div>
            <h1 className="flex justify-center mb-5 text-2xl md:text-3xl font-bold">
              {post.title}
            </h1>
            <div className="flex justify-center items-center space-x-1 text-gray-500">
              <BiCalendarEdit size={16} />
              <Date dateString={post.date} />
            </div>
          </header>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-5">
            <Article post={post} />
            <Aside toc={toc} />
          </div>
        </article>
      </Container>
    </Layout>
  )
}

export default ArticlePage

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"])

  const slugs = posts.map(({ slug }) => ({
    params: {
      slug: slug,
    },
  }))

  return {
    paths: slugs,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const post = getPostBySlug(slug, ["slug", "title", "date", "emoji", "category", "content"])

  const content = markdownToHtml(post.content || "")

  const toc = generateTableOfContent(content)

  return {
    props: {
      post: {
        ...post,
        content,
      },
      toc: toc,
    },
  }
}
