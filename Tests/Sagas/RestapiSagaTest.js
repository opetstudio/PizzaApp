import FixtureAPI from '../../App/Services/FixtureApi'
import { put, call } from 'redux-saga/effects'
import { getRestapi } from '../../App/Sagas/RestapiSagas'
// import GithubActions from '../../App/Redux/RestapiRedux'
import { path } from 'ramda'

const stepper = (fn) => (mock) => fn.next(mock).value

test('first calls API', () => {
  const step = stepper(getRestapi(FixtureAPI, { data: { page: 1 } }))
  // first yield is API
  expect(step()).toEqual(call(FixtureAPI.getRestapi, { page: 1 } ))
})

test('success path', () => {
  const response = FixtureAPI.getRestapi({ page: 1 })
  const step = stepper(getRestapi(FixtureAPI, { data: { page: 1 }}))
  // first step API
  step()
  // Second step successful return
  const stepResponse = step(response)
  // Get the avatar Url from the response
  const firstUser = path(['data', 'items'], response)[0]
  const avatar = firstUser.avatar_url
  expect(stepResponse).toEqual(put(GithubActions.userSuccess(avatar)))
})

// test('failure path', () => {
//   const response = {ok: false}
//   const step = stepper(getUserAvatar(FixtureAPI, {username: 'taco'}))
//   // first step API
//   step()
//   // Second step failed response
//   expect(step(response)).toEqual(put(GithubActions.userFailure()))
// })
