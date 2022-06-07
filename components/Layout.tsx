import { Header, Navbar } from './index'

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Navbar />
    </>
  )
}
