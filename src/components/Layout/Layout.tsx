import Head from "next/head"
import Header from "@/components/UIGroup/Header"

type Props = {
  title?: string
  description?: string
  ogType?: string
  ogUrl?: string
  ogImage?: string
  favicon?: string
  children: React.ReactNode
}

const SEO: React.VFC<Props> = ({
  title = "fukDev｜ゆるい感じの個人ブログ",
  description = "ゆるい感じに技術記事や趣味についてを投稿する個人ブログです。",
  ogType = "website",
  ogUrl = "",
  ogImage = "/fukDev/fukDev_ogp.png",
  favicon = "/fukDev/fukDev_favicon.png",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content={description} />
        <link rel="icon" href={favicon} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="fukDev｜ゆるい感じの個人ブログ" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        <meta name="theme-color" content="#F749B2" />
      </Head>
      <Header />
      {children}
    </>
  )
}

export default SEO
