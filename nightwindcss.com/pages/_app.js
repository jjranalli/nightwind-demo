import { ThemeProvider } from "next-themes"
import "../styles/global/styles.scss"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="nightwind-mode"
      defaultTheme="system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
