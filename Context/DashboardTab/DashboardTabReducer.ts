import { dashboardTab, IDashboardTabState } from '../../interfaces'

type dashboardTabAction = {
  type: 'openTab'
  payload: { tab: dashboardTab }
}

export const DashboardTabReducer = (
  state: IDashboardTabState,
  action: dashboardTabAction
) => {
  switch (action.type) {
    case 'openTab':
      return { ...state, tab: action.payload.tab }
    default:
      return state
  }
}
