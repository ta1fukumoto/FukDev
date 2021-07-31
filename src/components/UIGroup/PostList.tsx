import Link from "next/link"
import Date from "@/components/UIParts/Date"
import Tag from "../UIParts/Tag"

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

const PostList: React.VFC<Props> = ({ posts }) => {
  return (
    <div className="w-full">
      {posts.map(({ slug, title, date, emoji, category }: AllPosts) => {
        const url = slug.startsWith("https://") ? slug : `/posts/${slug}`

        return (
          <Link href={url} key={slug}>
            <a className="flex items-center md:items-start space-x-5 w-full py-5 shadow-md mb-5 rounded-2xl p-5 bg-white md:transition-transform md:transform md:hover:-translate-x-2">
              {emoji && (
                <div className="bg-dark-black rounded-xl p-3 md:p-4 text-4xl md:text-6xl bg-secondary">
                  {emoji}
                </div>
              )}
              <div className="flex-1">
                <h2 className="mb-1 text-lg md:text-xl font-bold tracking-wide">{title}</h2>
                <div className="flex md:flex-col justify-between items-center md:items-start">
                  <div className="text-gray-500">
                    <Date dateString={date} />
                  </div>
                  <div className="md:mt-2">
                    <Tag tag={category} />
                  </div>
                </div>
              </div>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default PostList
