import Head from "next/head"
import { useTheme } from "next-themes"
import { useEffect } from "react"

import Navbar from "./navbar/navbar"
import Footer from "./footer/footer"
import nightwind from "nightwind/helper"

export default function Layout({ children }) {
  const title = "Nightwind"
  const subtitle = " - The dark side of Tailwind"
  const description =
    "An automatic, overridable, customisable Tailwind dark mode plugin."

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    document.documentElement.classList.contains("dark")
      ? setTheme("dark")
      : setTheme("light")
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>

        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:image" content="/og_image.jpg" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://nightwindcss.com" />

        <meta name="twitter:title" content={title + subtitle} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://nightwindcss.com/twitter_card.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <div className="relative min-h-screen flex flex-col justify-between">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}
