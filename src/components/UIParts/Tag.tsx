import cn from "classnames"

type Props = {
  tag: string
}

const Tag: React.VFC<Props> = ({ tag }) => {
  return (
    <div
      className={cn({
        ["inline-block py-1 px-2 rounded text-sm bg-accent text-white tracking-wider"]:
          tag === "Tech",
        ["inline-block py-1 px-2 rounded text-sm bg-[#CC2448] text-white tracking-wider"]:
          tag === "Tips",
        ["inline-block py-1 px-2 rounded text-sm bg-primary text-white tracking-wider"]:
          tag === "Hobby",
        ["inline-block py-1 px-2 rounded text-sm bg-[#3EA8FF] text-white tracking-wider"]:
          tag === "Zenn",
        ["inline-block py-1 px-2 rounded text-sm bg-[#55c500] text-white tracking-wider"]:
          tag === "Qiita",
      })}
    >
      {tag}
    </div>
  )
}

export default Tag
