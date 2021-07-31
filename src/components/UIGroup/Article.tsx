import "zenn-content-css"

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
}

const Article: React.VFC<Props> = ({ post }) => {
  return (
    <>
      <section className="bg-white rounded-2xl py-10 px-5 contentWrapper">
        <div className="znc" dangerouslySetInnerHTML={{ __html: post.content }} />
      </section>
      <style jsx>{`
        .contentWrapper {
          @apply w-full;
        }
        @media (min-width: 768px) {
          .contentWrapper {
            width: calc(100% - 21.15rem);
          }
        }
      `}</style>
    </>
  )
}

export default Article
