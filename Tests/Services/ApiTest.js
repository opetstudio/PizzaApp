import API from '../../App/Services/Api'
// import FixtureAPI from '../../App/Services/FixtureApi'
// import R from 'ramda'

// test('All fixtures map to actual API', () => {
//   const fixtureKeys = R.keys(FixtureAPI).sort()
//   const apiKeys = R.keys(API.create())

//   const intersection = R.intersection(fixtureKeys, apiKeys).sort()

//   // There is no difference between the intersection and all fixtures
//   expect(R.equals(fixtureKeys, intersection)).toBe(true)
// })

test('Api getRestapi returns the right response', async () => {
  const api = API.create('http://localhost:8090/api/')
  // const expectedFile = require('../../App/Fixtures/restapi.json')

  // const resp = new Promise(api.getRestapi())
  // const resp = new Promise((resolve, reject) => {
  //   api.getRestapi().then(r => resolve(r)).catch(e => reject(e))
  // })
  // console.log('resp', resp)
  // api.getRestapi().then(resp => console.log('resp', resp))
  // console.log('resp', resp)
  const newerModifiedon = 1494844278993
  const response = await api.getRestapi({ newerModifiedon })
  // console.log('responseeee', response)
  expect(response.data.minModifiedon > newerModifiedon).toBe(true)
  expect('minModifiedon' in response.data).toBe(true)
  expect('maxModifiedon' in response.data).toBe(true)
  expect('byId' in response.data).toBe(true)
  expect('allIds' in response.data).toBe(true)
  expect(response.data.allIds.length).toBe(4)
  // expect(response.data.alldata.length).toBe(2)

  // expect(response.data).toEqual({
  //   ok: true,
  //   data: expectedFile
  // })
})
test('Api getRenpagi returns the right response', async () => {
  const api = API.create('http://localhost:8090/api/')
  // const expectedFile = require('../../App/Fixtures/restapi.json')

  // const resp = new Promise(api.getRestapi())
  // const resp = new Promise((resolve, reject) => {
  //   api.getRestapi().then(r => resolve(r)).catch(e => reject(e))
  // })
  // console.log('resp', resp)
  // api.getRestapi().then(resp => console.log('resp', resp))
  // console.log('resp', resp)
  const newerModifiedon = 1494844278993
  const response = await api.getRenpagi({ newerModifiedon })
  // console.log('responseeee', response)
  expect(response.data.minModifiedon > newerModifiedon).toBe(true)
  expect('minModifiedon' in response.data).toBe(true)
  expect('maxModifiedon' in response.data).toBe(true)
  expect('byId' in response.data).toBe(true)
  expect('allIds' in response.data).toBe(true)
  expect(response.data.allIds.length).toBe(151)
  
  // expect(response.data.alldata.length).toBe(2)

  // expect(response.data).toEqual({
  //   ok: true,
  //   data: expectedFile
  // })
})
test('Api getSsdewasa returns the right response', async () => {
  const api = API.create('http://localhost:8090/api/')
  // const expectedFile = require('../../App/Fixtures/restapi.json')

  // const resp = new Promise(api.getRestapi())
  // const resp = new Promise((resolve, reject) => {
  //   api.getRestapi().then(r => resolve(r)).catch(e => reject(e))
  // })
  // console.log('resp', resp)
  // api.getRestapi().then(resp => console.log('resp', resp))
  // console.log('resp', resp)
  const newerModifiedon = 1494844278993
  const response = await api.getSsdewasa({ newerModifiedon })
  // console.log('responseeee', response)
  expect(response.data.minModifiedon > newerModifiedon).toBe(true)
  expect('minModifiedon' in response.data).toBe(true)
  expect('maxModifiedon' in response.data).toBe(true)
  expect('byId' in response.data).toBe(true)
  expect('allIds' in response.data).toBe(true)
  expect(response.data.allIds.length).toBe(267)

  // expect(response.data.alldata.length).toBe(2)

  // expect(response.data).toEqual({
  //   ok: true,
  //   data: expectedFile
  // })
})

// test('FixtureAPI getUser returns the right file for gantman', () => {
//   const expectedFile = require('../../App/Fixtures/gantman.json')

//   expect(FixtureAPI.getUser('GantMan')).toEqual({
//     ok: true,
//     data: expectedFile
//   })
// })

// test('FixtureAPI getUser returns the right file for skellock as default', () => {
//   const expectedFile = require('../../App/Fixtures/skellock.json')

//   expect(FixtureAPI.getUser('Whatever')).toEqual({
//     ok: true,
//     data: expectedFile
//   })
// })
