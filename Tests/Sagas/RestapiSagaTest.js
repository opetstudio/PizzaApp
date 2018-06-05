import FixtureAPI from '../../App/Services/FixtureApi'
import { put, call } from 'redux-saga/effects'
import { getRestapi } from '../../App/Sagas/RestapiSagas'
import RestapiActions from '../../App/Redux/RestapiRedux'
import API from '../../App/Services/Api'
import ConvertRestapiResp from '../../App/Transforms/ConvertRestapiResp'
import { path } from 'ramda'

const stepper = (fn) => (mock) => fn.next(mock).value

test('first calls API', () => {
  const step = stepper(getRestapi(FixtureAPI, { data: { page: 1 } }))
  // first yield is API
  expect(step()).toEqual(call(FixtureAPI.getRestapi, { page: 1 }))
})

// test('real calls API', () => {
//   console.log('teeeessss')
//   const api = API.create()
//   const step = stepper(getRestapi(api, { data: { page: 1 } }))
//   // step()
//   // api['getRestapi'].apply(this, {page: 1}).then((result) => {
//   //   console.log('result===>', result)
//   //   // this.showResult(result, label || `${endpoint}(${args.join(', ')})`)
//   // })
//   // const step = stepper(getRestapi(FixtureAPI, { data: { page: 1 } }))
//   // // first yield is API
//   expect(step()).toEqual(call(FixtureAPI.getRestapi, { page: 1 }))
// })

test('success path', async () => {
  const api = API.create('http://localhost:8090/api/')
  const response = await api.getRestapi({ newerModifiedon: 1494844278993 })
  // const response = FixtureAPI.getRestapi({ page: 1 })
  const step = stepper(getRestapi(api, { newerModifiedon: 1494844278993 }))
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
  expect(stepResponse).toEqual(put(RestapiActions.restapiSuccess(byId, allIds, maxModifiedon)))
})

test('failure path', () => {
  const response = {ok: false}
  const step = stepper(getRestapi(FixtureAPI, {data: {page: 1}}))
  // first step API
  step()
  // Second step failed response
  expect(step(response)).toEqual(put(RestapiActions.restapiFailure()))
})
