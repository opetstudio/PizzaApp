import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/SessionRedux'

test('request', () => {
  const data = 'taco'
  const state = reducer(INITIAL_STATE, Actions.sessionLoginWithSocmed(data, 'tes'))
  expect(state.isLoginCompleted).toBe(false)
  // expect(state.data).toBe(data)
  // // expect(state.payload).toBeNull()
  // expect(state.payload).toBe('tes')
})

// test('success', () => {
//   const byId = {'id1': { 'title': 'title2' }}
//   const allIds = [1, 2, 3]
//   let state = reducer(INITIAL_STATE, Actions.renpagiSuccess(byId, allIds))

//   expect(state.fetching).toBe(false)
//   expect(state.byId).toEqual(byId)
//   expect(state.allIds).toEqual(allIds)
//   expect(state.error).toBeNull()
// })

// test('failure', () => {
//   const state = reducer(INITIAL_STATE, Actions.renpagiFailure())

//   expect(state.fetching).toBe(false)
//   expect(state.error).toBe(true)
//   expect(state.payload).toBeNull()
// })
