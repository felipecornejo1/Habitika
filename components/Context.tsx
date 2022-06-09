// This component stores all states to make them accessible by every other component
// To access a state variable, the component must import the 'State' function from this component
import React, { createContext, useContext, useState } from 'react'

type dashboardTabType = 'habits' | 'tasks'

const Data = createContext({
  dashboardTab: 'habits',
  setDashboardTab: (dashboardTab: dashboardTabType) => {
    console.log(`hey`)
  },
})

export default function Context({ children }: { children: React.ReactNode }) {
  // States
  const [dashboardTab, setDashboardTab] = useState<dashboardTabType>('habits')

  return (
    <Data.Provider value={{ dashboardTab, setDashboardTab }}>
      {children}
    </Data.Provider>
  )
}

export const State = () => {
  return useContext(Data)
}
