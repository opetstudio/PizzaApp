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

  const newerModifiedon = 0
  const response = await api.getRestapi({ newerModifiedon })
  // console.log('responseeee', response)
  expect(response.data.minModifiedon > newerModifiedon).toBe(true)
  expect('minModifiedon' in response.data).toBe(true)
  expect('maxModifiedon' in response.data).toBe(true)
  expect('byId' in response.data).toBe(true)
  expect('allIds' in response.data).toBe(true)
  expect(response.data.allIds.length).toBe(5)
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
  const newerModifiedon = 0
  const response = await api.getRenpagi({ newerModifiedon })
  // console.log('responseeee', response)
  expect(response.data.minModifiedon > newerModifiedon).toBe(true)
  expect('minModifiedon' in response.data).toBe(true)
  expect('maxModifiedon' in response.data).toBe(true)
  expect(response.data.maxModifiedon).toBe(1518280007246)
  expect('byId' in response.data).toBe(true)
  expect('allIds' in response.data).toBe(true)
  expect(response.data.allIds.length).toBe(30)
  
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
  const newerModifiedon = 0
  const response = await api.getSsdewasa({ newerModifiedon })
  // console.log('responseeee', response)
  expect(response.data.minModifiedon > newerModifiedon).toBe(true)
  expect('minModifiedon' in response.data).toBe(true)
  expect('maxModifiedon' in response.data).toBe(true)
  expect('byId' in response.data).toBe(true)
  expect('allIds' in response.data).toBe(true)
  expect(response.data.allIds.length).toBe(30)
  // expect(response.data.alldata.length).toBe(2)

  // expect(response.data).toEqual({
  //   ok: true,
  //   data: expectedFile
  // })
})
test('Api getComment returns the right response', async () => {
  const api = API.create('http://localhost:8090/api/')
  const newerModifiedon = 0
  const response = await api.getcomment({ newerModifiedon })
  expect(response.status).toBe(200)
  // expect(response.data.minModifiedon > newerModifiedon).toBe(true)
  // expect('minModifiedon' in response.data).toBe(true)
  // expect('maxModifiedon' in response.data).toBe(true)
  // expect('byId' in response.data).toBe(true)
  // expect('allIds' in response.data).toBe(true)
  // expect(response.data.allIds.length).toBe(30)
})
test('Api postUser returns the right response', async () => {
  const api = API.create('http://localhost:8090/api/')
  const email = 'opetstudio@gmail.com'
  const data = {
    email,
    msisdn: '34343'
  }

  // const response = await api.postUser(data)
  // console.log('response: ', response)
  // expect(response.status).toBe(200)
  // expect(JSON.parse(response.config.data)).toEqual(data)
  // expect('status' in response.data).toBe(true)
  // expect('message' in response.data).toBe(true)
  // expect(response.data.minModifiedon > newerModifiedon).toBe(true)
  // expect('minModifiedon' in response.data).toBe(true)
  // expect('maxModifiedon' in response.data).toBe(true)
  // expect('byId' in response.data).toBe(true)
  // expect('allIds' in response.data).toBe(true)
  // expect(response.data.allIds.length).toBe(30)
})
test('Api getListUser returns the right response', async () => {
  const api = API.create('http://localhost:8090/api/')
  const newerModifiedon = 0
  const listId = ['59186fc6db7839453c4c6ac9', '5b263863b364d6f616c080ae', '5b2643440606f34f7aaff90a']
  const response = await api.getListUser({ newerModifiedon, listId })
  expect(response.status).toBe(200)
  // expect(response.data.minModifiedon > newerModifiedon).toBe(true)
  // expect('minModifiedon' in response.data).toBe(true)
  expect('maxModifiedon' in response.data).toBe(true)
  expect('byId' in response.data).toBe(true)
  expect('allIds' in response.data).toBe(true)
  expect(response.data.allIds.length).toBe(listId.length)
})
