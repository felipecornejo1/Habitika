import { Header } from './index'

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
