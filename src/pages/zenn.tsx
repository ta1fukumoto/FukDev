import { GetStaticProps } from "next"
import { getRSSFeed } from "@/lib/api"
import Layout from "@/components/Layout/Layout"
import Container from "@/components/Layout/Container"
import Aside from "@/components/UIGroup/Aside"
import PostList from "@/components/UIGroup/PostList"

const Zenn = ({ data }: any) => {
  return (
    <Layout title="Zennの投稿 - fukDev">
      <Container>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-5">
          <PostList posts={data} />
          <Aside />
        </div>
      </Container>
    </Layout>
  )
}

export default Zenn

export const getStaticProps: GetStaticProps = async () => {
  const feedZenn = await getRSSFeed("Zenn", "https://zenn.dev/taichifukumoto/feed")

  return {
    props: {
      data: feedZenn,
    },
  }
}
