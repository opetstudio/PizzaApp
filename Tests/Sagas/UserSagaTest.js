import FixtureAPI from '../../App/Services/FixtureApi'
import { put, call } from 'redux-saga/effects'
import { getListUser } from '../../App/Sagas/UserSagas'
import UserActions from '../../App/Redux/UserRedux'
import API from '../../App/Services/Api'
import { path } from 'ramda'

const stepper = (fn) => (mock) => fn.next(mock).value

test('first calls API', () => {
  const step = stepper(getListUser(FixtureAPI, { data: { page: 1 } }))
  // first yield is API
  expect(step()).toEqual(call(FixtureAPI.getListUser, { page: 1 }))
})
