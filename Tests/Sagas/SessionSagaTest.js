import FixtureAPI from '../../App/Services/FixtureApi'
import { put, call } from 'redux-saga/effects'
import {loginWithSocmed} from '../../App/Sagas/SessionSagas'
// import CommentActions from '../../App/Redux/CommentRedux'
import {getTokenUsingSocialAccount} from '../../App/Services/identity'
// import API from '../../App/Services/Api'
// import { path } from 'ramda'

const stepper = (fn) => (mock) => fn.next(mock).value

test('first calls API', () => {
  const action = {data: {accountType: 'facebook'}}
  const step = stepper(loginWithSocmed(FixtureAPI, action))
  // // first yield is API
  expect(step()).toEqual(call(getTokenUsingSocialAccount, action.data))
})

// test('getcomment success path', async () => {
//   const api = API.create('http://localhost:8090/api/')
//   const response = await api.getcomment({ newerModifiedon: 1494844278993 })
//   // const response = FixtureAPI.getRestapi({ page: 1 })
//   const step = stepper(getComment(api, { newerModifiedon: 1494844278993 }))
//   // first step API
//   step()
//   // Second step successful return
//   // const stepResponse = step({ok: true, data: {}})
//   const stepResponse = step(response)
//   // Get the avatar Url from the response
//   // const dataApi = path(['data'], response) // https://api.github.com/user
//   const dataResp = path(['data'], response)
//   // console.log('======>', dataResp)

//   const { byId, allIds, maxModifiedon } = dataResp

//   // const byId = dataApi
//   expect(stepResponse).toEqual(put(CommentActions.commentSuccess(byId, allIds, maxModifiedon)))
// })
// test('postcomment success path', async () => {
//   const api = API.create('http://localhost:8090/api/')
//   const postData = { contentComment: 'nice articlessss', contentType: 'ss', contentId: 'content-1' }
//   const response = await api.postComment(postData)

//   // const response = FixtureAPI.getRestapi({ page: 1 })
//   const step = stepper(postingComment(api, postData))
//   // first step API
//   step()
//   // Second step successful return
//   const stepResponse = step(response)
//   // Get the avatar Url from the response
//   // const dataApi = path(['data'], response) // https://api.github.com/user
//   const dataResp = path(['data'], response)
//   // console.log('======>', dataResp)
//   const { byId, allIds, maxModifiedon } = dataResp

//   // const byId = dataApi
//   expect(stepResponse).toEqual(put(CommentActions.commentPostsuccess(byId, allIds, maxModifiedon)))
// })
