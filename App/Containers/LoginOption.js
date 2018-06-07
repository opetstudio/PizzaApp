import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import {
  Button
} from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import SessionActions from '../Redux/SessionRedux'

import { AccessToken, LoginManager, LoginButton } from 'react-native-fbsdk'
import firebase from 'react-native-firebase'

import StyledText from '../Components/StyledText'
import I18n from '../I18n'
import {path} from 'ramda'

// Styles
import styles, { socialConnect } from './Styles/LoginOptionStyle'
import { Colors, Images } from '../Themes'

const socialAccounts = [
  {
    key: 'facebook',
    name: 'Facebook',
    icon: Images.facebookWhite
  },
  {
    key: 'twitter',
    name: 'Twitter',
    icon: Images.twitterWhite
  }
]

class LoginOption extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }
  async facebookLogin () {
    try {
      this.props.sessionRequest({data: {}})
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email'])

      if (result.isCancelled) {
        throw new Error('User cancelled request') // Handle this however fits the flow of your app
      }

      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`)

      // get the access token
      const data = await AccessToken.getCurrentAccessToken()

      if (!data) {
        throw new Error('Something went wrong obtaining the users access token') // Handle this however fits the flow of your app
      }
      console.log('data facebook==>', data)

      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)

      // login with credential
      const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential)
      // this.props.sessionSuccess('FB', currentUser)
      const dataUser = path(['user', '_user'], currentUser)
      this.props.sessionSuccess({
        loginWith: 'FB',
        currentUser: dataUser
      })

      console.info(JSON.stringify(currentUser.user.toJSON()))
    } catch (e) {
      // console.error(e)
      this.props.sessionFailure()
    }
  }
  _loginWithSocialAccount (accountKey) {
    switch (accountKey) {
      case 'facebook':
        this.facebookLogin()
        break
      default:
        alert('Login method belum support.')
    }
  }

  render () {
    const textMessage = I18n.t
    let prevTimeStamp = 0
    const buttonWithIcon = (account, index, onPress) => {
      const onPressHandler = e => {
        const currentTimeStamp = e.nativeEvent.timestamp
        if (currentTimeStamp - prevTimeStamp > 2000 || prevTimeStamp === 0) {
          prevTimeStamp = currentTimeStamp
          return void onPress()
        }
        return null
      }
      return (
        <TouchableHighlight
          style={[
            socialConnect.container,
            { backgroundColor: Colors[account.key] }
          ]}
          onPress={onPressHandler}
          key={`account-${index}`}
        >
          <View style={socialConnect.buttonWrap}>
            <Image source={account.icon} style={socialConnect.icon} />
            <View style={socialConnect.partition} />
            <StyledText
              addedStyle={socialConnect.label}
              textStyle={'h10LtWhiteT'}
            >
              {textMessage(account.name)}
            </StyledText>
          </View>
        </TouchableHighlight>
      )
    }
    return (
      <View style={styles.container}>
        <StyledText
          textStyle={'h10LtWhiteT'}
          addedStyle={{ paddingVertical: 15 }}
          i18nKey='login-method-text1'
        />
        {socialAccounts.map((account, index) =>
          buttonWithIcon(account, index, () => this._loginWithSocialAccount(account.key))
        )}
        {/* <Button
          style={{ backgroundColor: Colors.facebook, alignSelf: 'center' }}
          onPress={() => this.facebookLogin()}
        >
          <Text>FB Login</Text>
        </Button> */}
        {/* <LoginButton
          onPress={() => {}}
          publishPermissions={['email']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert('Login failed with error: ' + error.message)
              } else if (result.isCancelled) {
                alert('Login was cancelled')
              } else {
                alert('Login was successful with permissions: ' + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert('User logged out')}
          /> */}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sessionRequest: (data) => dispatch(SessionActions.sessionRequest(data)),
    sessionSuccess: (data) => dispatch(SessionActions.sessionSuccess(data)),
    sessionFailure: () => dispatch(SessionActions.sessionFailure())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginOption)
