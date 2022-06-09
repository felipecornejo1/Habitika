import { useContext } from 'react'
import { DashboardTabContext } from '../Context/DashboardTab/DashboardTabContext'

export const useDashboardTabs = () => {
  const { dashboardTabState, openTab } = useContext(DashboardTabContext)

  return {
    dashboardTabState,
    openTab,
  }
}
