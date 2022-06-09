import { DashboardTabProvider } from './DashboardTab/DashboardTabProvider'

interface props {
  children: JSX.Element | JSX.Element[]
}

export const MainContextProvider = ({ children }: props) => {
  return <DashboardTabProvider>{children}</DashboardTabProvider>
}
