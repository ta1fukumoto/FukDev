import Image from "next/image"
import Link from "next/link"
import Container from "@/components/Layout/Container"

const Header: React.VFC = () => {
  return (
    <>
      <header className="h-16 bg-secondary shadow-md mb-8 md:mb-14">
        <Container>
          <div className="flex justify-center md:justify-between w-full">
            {/* ロゴ */}
            <Link href="/">
              <a title="fukDev">
                <Image src="/fukDev/fukDev_logo.svg" width={100} height={64} alt={"fukDev"} />
              </a>
            </Link>
            {/* PCのナビゲーション */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/">
                <a className="pb-1.5 text-xl leading-5 font-bold">Home</a>
              </Link>
              <Link href="/zenn">
                <a>
                  <Image src="/zenn/Zenn.svg" width={80} height={64} alt={"Zenn"} />
                </a>
              </Link>
              <Link href="/qiita">
                <a>
                  <Image src="/qiita/Qiita.svg" width={80} height={64} alt={"Qiita"} />
                </a>
              </Link>
            </nav>
          </div>
        </Container>
      </header>
      {/* スマホのナビゲーション */}
      <nav className="md:hidden fixed bottom-0 z-50 w-full h-14 bg-secondary flex justify-center items-center space-x-6">
        <Link href="/">
          <a className="pb-1.5 text-base leading-5 font-bold">Home</a>
        </Link>
        <Link href="/zenn">
          <a>
            <Image src="/zenn/Zenn.svg" width={60} height={56} alt={"Zenn"} />
          </a>
        </Link>
        <Link href="/qiita">
          <a>
            <Image src="/qiita/Qiita.svg" width={60} height={56} alt={"Qiita"} />
          </a>
        </Link>
      </nav>
    </>
  )
}

export default Header
