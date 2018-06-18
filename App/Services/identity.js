// import firebase from 'react-native-firebase'
// import Auth0 from 'react-native-auth0'
import { AccessToken, LoginManager, LoginButton } from 'react-native-fbsdk'
import firebase from 'react-native-firebase'
import {path} from 'ramda'

// import config from '../Config/AppConfig'
// let firebase = null
// let auth0 = null

// const setAuth0 = () => new Auth0({
//   domain: config.auth0.host,
//   clientId: config.auth0.clientId
// })

const facebookLogin = async () => {
  try {
    const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email'])
    if (result.isCancelled) {
      throw new Error('User cancelled request') // Handle this however fits the flow of your app
    }
    __DEV__ && console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`)
    // get the access token
    const data = await AccessToken.getCurrentAccessToken()

    if (!data) {
      throw new Error('Something went wrong obtaining the users access token') // Handle this however fits the flow of your app
    }
    __DEV__ && console.log('data facebook==>', data)
    // create a new firebase credential with the token
    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)

    // // login with credential
    const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential)
    // // this.props.sessionSuccess('FB', currentUser)
    const dataUser = path(['user', '_user'], currentUser)
    // console.info(JSON.stringify(currentUser.user.toJSON()))
    return dataUser
  } catch (e) {
    __DEV__ && console.log(e)
    return null
  }
}

export const getTokenUsingSocialAccount = async ({accountType}) => {
  // if (!firebase) firebase = require('react-native-firebase')
  // if (!auth0) auth0 = setAuth0()
  // return auth0.webAuth
  //   .authorize({
  //     connection: accountType,
  //     scope: 'openid offline_access'
  //   })
  //   .catch(err => err)
  switch (accountType) {
    case 'facebook':
      // this.facebookLogin()
      // this.props.loginWithSocialAccount({ accountType: accountKey })
      return facebookLogin()
      // break
    default:
      alert('Login method belum support.')
  }
}
