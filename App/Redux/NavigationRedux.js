import AppNavigation from '../Navigation/AppNavigation'

export const reducer = (state, action) => {
  // console.log('[NavigationRedux] reducer ', action)
  const newState = AppNavigation.router.getStateForAction(action, state)
  // console.log('[NavigationRedux] newState ', newState)
  return newState || state
}
