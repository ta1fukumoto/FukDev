import Image from "next/image"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { Profile } from "@/types/profile"

const profile: Profile = {
  name: "taichi fukumoto",
  img: "/profile.jpg",
  description:
    "福岡のITベンチャーで取締役兼CTOをやっています。新しいモノや技術が好き。個人ブログはゆるく書いています。",
  github: "https://github.com/ta1fukumoto",
  twitter: "https://twitter.com/ta1fukumoto",
  sourceCode: "https://github.com/ta1fukumoto/FukDev",
  copyWrite: "taichi fukumoto",
}

type Props = {
  toc?: string
}

const Aside: React.VFC<Props> = ({ toc = "" }) => {
  return (
    <div className="relative md:w-80 md:flex-shrink-0">
      <div className="md:sticky top-5">
        <aside className="shadow-md mb-5 rounded-2xl p-5 bg-white">
          <div className="flex justify-start items-center space-x-5 mb-4">
            <div className="p-0.5 rounded-full bg-primary">
              <div className="-mb-1">
                <Image
                  className="rounded-full"
                  src={profile.img}
                  width={60}
                  height={60}
                  alt="プロフィール画像"
                />
              </div>
            </div>
            <h2 className="text-base md:text-xl font-bold">{profile.name}</h2>
          </div>
          <p className="mb-4 text-base leading-relaxed">{profile.description}</p>
          <div className="flex justify-start items-center space-x-5">
            <a
              className="flex flex-col items-center"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} className="mb-2" />
              <span className="text-xs">GitHub</span>
            </a>
            <a
              className="flex flex-col items-center"
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={28} className="mb-2" />
              <span className="text-xs">Twitter</span>
            </a>
          </div>
        </aside>
        {toc && (
          <aside className="hidden md:block shadow-md mb-5 rounded-2xl p-5 bg-white">
            <div className="toc" dangerouslySetInnerHTML={{ __html: toc }} />
          </aside>
        )}
        <footer className="text-center text-gray-500">
          <a
            className="text-xs md:text-sm"
            href={profile.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
          >
            SourceCode
          </a>
          <div className="text-xs md:text-sm">&copy; {profile.copyWrite}</div>
        </footer>
      </div>
    </div>
  )
}

export default Aside
