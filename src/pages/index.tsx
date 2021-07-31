import { GetStaticProps } from "next"
import { getAllPosts } from "src/lib/api"
import Layout from "@/components/Layout/Layout"
import Container from "@/components/Layout/Container"
import Aside from "@/components/UIGroup/Aside"
import PostList from "@/components/UIGroup/PostList"

type AllPosts = {
  slug: string
  title: string
  date: string
  emoji: string
  category: "Tech" | "Tips" | "Hobby"
}

type Props = {
  posts: AllPosts[]
}

const Index: React.VFC<Props> = ({ posts }) => {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-5">
          <PostList posts={posts} />
          <Aside />
        </div>
      </Container>
    </Layout>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["slug", "title", "date", "emoji", "category"])

  return {
    props: {
      posts: posts,
    },
  }
}
