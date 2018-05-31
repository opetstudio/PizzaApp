import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  restapiRequest: ['data'],
  restapiSuccess: ['byId'],
  restapiFailure: null
})

export const RestapiTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  byId: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const RestapiSelectors = {
  getData: state => state.data,
  getById: state => state.byId,
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { byId } = action
  return state.merge({ fetching: false, error: null, byId })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESTAPI_REQUEST]: request,
  [Types.RESTAPI_SUCCESS]: success,
  [Types.RESTAPI_FAILURE]: failure
})
