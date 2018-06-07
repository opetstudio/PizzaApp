import { Platform } from 'react-native'
import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { RestapiTypes } from '../Redux/RestapiRedux'
import { RenpagiTypes } from '../Redux/RenpagiRedux'
import { SsdewasaTypes } from '../Redux/SsdewasaRedux'
import { SessionTypes } from '../Redux/SessionRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { getRestapi } from './RestapiSagas'
import { getRenpagi } from './RenpagiSagas'
import { getSsdewasa } from './SsdewasaSagas'
import { getSession, setSession } from './SessionSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const host = Platform.OS === 'ios' ? 'http://localhost:8090/api/' : 'http://10.0.2.2:8090/api/'
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
const apiRestapi = DebugConfig.useFixtures ? FixtureAPI : API.create(host)
const apiRenpagi = DebugConfig.useFixtures ? FixtureAPI : API.create(host)
const apiSsdewasa = DebugConfig.useFixtures ? FixtureAPI : API.create(host)

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),

    takeLatest(RestapiTypes.RESTAPI_REQUEST, getRestapi, apiRestapi),
    takeLatest(RenpagiTypes.RENPAGI_REQUEST, getRenpagi, apiRenpagi),
    takeLatest(SsdewasaTypes.SSDEWASA_REQUEST, getSsdewasa, apiSsdewasa)

    // takeLatest(SessionTypes.SESSION_REQUEST, getSession, null),
    // takeLatest(SessionTypes.SESSION_SUCCESS, setSession, null)
  ])
}
