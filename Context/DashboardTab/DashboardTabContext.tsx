import { createContext } from 'react'
import { dashboardTab, IDashboardTabState } from '../../interfaces'

export type dashboardTabContextProps = {
  dashboardTabState: IDashboardTabState
  openTab: (tab: dashboardTab) => void
}

export const DashboardTabContext = createContext<dashboardTabContextProps>(
  {} as dashboardTabContextProps
)
