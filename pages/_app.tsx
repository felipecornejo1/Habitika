import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components/index'
import { MainContextProvider } from '../Context/MainContextProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainContextProvider>
  )
}

export default MyApp
