import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  sessionRequest: ['data'],
  sessionSuccess: ['payload'],
  sessionFailure: null,
  sessionLogout: null
})

export const SessionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  loginWith: null,
  currentUser: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const SessionSelectors = {
  getData: state => state.data,
  getCurrentUser: state => state.currentUser,
  getFetching: state => state.fetching
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, action) => {
  const { data } = action
  console.log('[SessionRedux] request action', action)
  console.log('[SessionRedux] request state', state)
  return state.merge({ fetching: true, data, payload: null })
}

// successful api lookup
export const success = (state, {payload}) => {
  console.log('[SessionRedux] success payload', payload)
  console.log('[SessionRedux] success state', state)
  // const { loginWith, currentUser } = payload
  return state.merge({ fetching: false, error: null, payload, currentUser: payload.currentUser })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })
export const logout = state =>
  state.merge({ fetching: false, error: false, payload: null, currentUser: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SESSION_REQUEST]: request,
  [Types.SESSION_SUCCESS]: success,
  [Types.SESSION_LOGOUT]: logout,
  [Types.SESSION_FAILURE]: failure
})
