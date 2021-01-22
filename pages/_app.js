import "../styles/global/styles.scss"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" storageKey="nightwind-mode">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
