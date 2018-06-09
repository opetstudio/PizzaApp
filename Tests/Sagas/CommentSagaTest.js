import FixtureAPI from '../../App/Services/FixtureApi'
import { put, call } from 'redux-saga/effects'
import { getComment } from '../../App/Sagas/CommentSagas'
import CommentActions from '../../App/Redux/CommentRedux'
import API from '../../App/Services/Api'
import { path } from 'ramda'

const stepper = (fn) => (mock) => fn.next(mock).value

test('first calls API', () => {
  const step = stepper(getComment(FixtureAPI, { data: { page: 1 } }))
  // first yield is API
  expect(step()).toEqual(call(FixtureAPI.getcomment, { page: 1 }))
})

test('success path', async () => {
  const api = API.create('http://localhost:8090/api/')
  const response = await api.getcomment({ newerModifiedon: 1494844278993 })
  // const response = FixtureAPI.getRestapi({ page: 1 })
  const step = stepper(getComment(api, { newerModifiedon: 1494844278993 }))
  // first step API
  step()
  // Second step successful return
  // const stepResponse = step({ok: true, data: {}})
  const stepResponse = step(response)
  // Get the avatar Url from the response
  // const dataApi = path(['data'], response) // https://api.github.com/user
  const dataResp = path(['data'], response)
  // console.log('======>', dataResp)

  const { byId, allIds, maxModifiedon } = dataResp

  // const byId = dataApi
  expect(stepResponse).toEqual(put(CommentActions.commentSuccess(byId, allIds, maxModifiedon)))
})
