import { Platform } from 'react-native'
import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'
import AppConfig from '../Config/AppConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { RestapiTypes } from '../Redux/RestapiRedux'
import { RenpagiTypes } from '../Redux/RenpagiRedux'
import { SsdewasaTypes } from '../Redux/SsdewasaRedux'
import { SessionTypes } from '../Redux/SessionRedux'
import { CommentTypes } from '../Redux/CommentRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { getRestapi } from './RestapiSagas'
import { getRenpagi } from './RenpagiSagas'
import { getSsdewasa } from './SsdewasaSagas'
import {getComment, postingComment} from './CommentSagas'
import {getListUser} from './UserSagas'
import { postSessionRegServer, loginWithSocmed } from './SessionSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const host = __DEV__ ? Platform.OS === 'ios' ? 'http://localhost:8090/api/' : 'http://10.0.2.2:8090/api/' : AppConfig.backendURL
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
const apiJemaatApp = DebugConfig.useFixtures ? FixtureAPI : API.create(host)
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
    takeLatest(SsdewasaTypes.SSDEWASA_REQUEST, getSsdewasa, apiSsdewasa),
    takeLatest(CommentTypes.COMMENT_REQUEST, getComment, apiJemaatApp),
    takeLatest(CommentTypes.COMMENT_POST, postingComment, apiJemaatApp),

    // user
    // takeLatest(CommentTypes.USER_REQUEST, getListUser, apiJemaatApp),

    // Auth
    takeLatest(SessionTypes.SESSION_LOGIN_WITH_SOCMED, loginWithSocmed, apiJemaatApp),
    takeLatest(SessionTypes.SESSION_REGSERVER, postSessionRegServer, apiJemaatApp)
    // takeLatest(SessionTypes.SESSION_SUCCESS, setSession, null)
  ])
}
