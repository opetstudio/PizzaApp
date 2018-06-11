import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import {arrayMerge} from '../Utils/helper/datamining'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  commentRequest: ['data'],
  commentSuccess: ['byId', 'allIds', 'maxModifiedon'],
  commentFailure: ['errorCode', 'errorMessage'],
  commentPost: ['dataPost'],
  commentPostsuccess: ['byId', 'allIds', 'maxModifiedon'],
  commentPostfailure: ['errorCode', 'errorMessage']
})

export const CommentTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  byId: null,
  allIds: [],
  maxModifiedon: 0,
  fetching: null,
  payload: null,
  error: null,
  posting: null,
  dataPost: null,
  errorCode: null,
  errorMessage: null
})

/* ------------- Selectors ------------- */

export const CommentSelectors = {
  getMaxModifiedon: state => state.maxModifiedon,
  getData: state => state.data,
  getById: state => state.byId,
  getAllIds: state => state.allIds,
  getAllDataArr: state => state.allIds.map(id => state.byId[id]),
  getFetching: state => state.fetching || false
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { byId, allIds, maxModifiedon } = action
  return state.merge({ fetching: false, error: null, byId: {...state.byId, ...byId}, allIds: arrayMerge([state.allIds, allIds]), maxModifiedon })
}
// Something went wrong somewhere.
export const failure = (state, { errorCode, errorMessage }) =>
state.merge({ fetching: false, posting: false, error: true, payload: null, dataPost: null, errorCode, errorMessage })

// POSTING COMMENT
export const post = (state, { dataPost }) =>
  state.merge({ posting: true, dataPost })
export const postsuccess = (state, action) => {
  const { byId, allIds, maxModifiedon } = action
  return state.merge({ posting: false, error: null, byId: {...state.byId, ...byId}, allIds: arrayMerge([state.allIds, allIds]), maxModifiedon })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COMMENT_REQUEST]: request,
  [Types.COMMENT_SUCCESS]: success,
  [Types.COMMENT_FAILURE]: failure,
  [Types.COMMENT_POST]: post,
  [Types.COMMENT_POSTSUCCESS]: postsuccess
})
