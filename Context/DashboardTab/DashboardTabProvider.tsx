import { useReducer } from 'react'
import { dashboardTab, IDashboardTabState } from '../../interfaces'
import { DashboardTabContext } from './DashboardTabContext'
import { DashboardTabReducer } from './DashboardTabReducer'

const INITIAL_STATE: IDashboardTabState = {
  tab: 'habits',
}

interface props {
  children: JSX.Element | JSX.Element[]
}

export const DashboardTabProvider = ({ children }: props) => {
  const [dashboardTabState, dispatch] = useReducer(
    DashboardTabReducer,
    INITIAL_STATE
  )

  const openTab = (tab: dashboardTab) => {
    dispatch({ type: 'openTab', payload: { tab } })
  }

  return (
    <DashboardTabContext.Provider value={{ dashboardTabState, openTab }}>
      {children}
    </DashboardTabContext.Provider>
  )
}
