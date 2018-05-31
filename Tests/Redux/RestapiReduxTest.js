import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/RestapiRedux'

test('request', () => {
  const data = 'taco'
  const state = reducer(INITIAL_STATE, Actions.restapiRequest(data))
  
  expect(state.fetching).toBe(true)
  expect(state.data).toBe(data)
  expect(state.payload).toBeNull()
})

test('success', () => {
  const byId = {'id1': { 'title': 'title2' }}
  const state = reducer(INITIAL_STATE, Actions.restapiSuccess(byId))

  expect(state.fetching).toBe(false)
  expect(state.byId).toEqual(byId)
  expect(state.error).toBeNull()
})

test('failure', () => {
  const state = reducer(INITIAL_STATE, Actions.restapiFailure())

  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
  expect(state.payload).toBeNull()
})
