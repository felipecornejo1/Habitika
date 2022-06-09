import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components/index'
import { MainContextProvider } from '../Context/MainContextProvider'
import { DashboardTabProvider } from '../Context/DashboardTab/DashboardTabProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DashboardTabProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DashboardTabProvider>
  )
}

export default MyApp
