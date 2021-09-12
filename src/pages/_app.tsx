import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../utils/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
export default MyApp
