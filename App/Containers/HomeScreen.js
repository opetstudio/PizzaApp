import React, { Component } from 'react'
import { View, ImageBackground, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import {
  Container,
  Text
} from 'native-base'
// import { LoginButton } from 'react-native-fbsdk'
import HeaderMenu from '../Components/HeaderMenu'
import LoginOption from '../Containers/LoginOption'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// import API from '../Services/Api'
// import {getRestapi} from '../Sagas/RestapiSagas'
// import RestapiActions from '../Redux/RestapiRedux'
// import RenpagiActions from '../Redux/RenpagiRedux'
// import SsdewasaActions from '../Redux/SsdewasaRedux'
import SessionActions from '../Redux/SessionRedux'

// firebase
import firebase from 'react-native-firebase'
import {registerAppListener} from '../Listeners'
// import firebaseClient from '../FirebaseClient'

// Styles
import styles from './Styles/HomeScreenStyle'
import { Images } from '../Themes'
const launchscreenBg = Images.launchscreenBg
const launchscreenLogo = Images.launchscreenLogo

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      token: '',
      uid: 'xxx',
      tokenCopyFeedback: '',
      isAuthenticated: false
    }
  }
  componentWillMount () {
    // const api = API.create('http://localhost:8090/api/')
    // console.log('okeeee')
    // this.props.restapiRequest({ newerModifiedon: 1494844278993 })
    // this.props.renpagiRequest({ newerModifiedon: 1494844278993 })
    // this.props.ssdewasaRequest({ newerModifiedon: 1494844278993 })
  }
  componentDidMount () {
     // Build a channel
    // const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
    //  .setDescription('My apps test channel')

     // Create the channel
    // firebase.notifications().android.createChannel(channel)
 // Build a channel
    const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
    .setDescription('My apps test channel')
    // Create the channel
    firebase.notifications().android.createChannel(channel)
    registerAppListener(this.props.navigation)
    // firebase.notifications().getInitialNotification()
    //   .then((notificationOpen = {}) => {
    //     if (notificationOpen) {
    //       // Get information about the notification that was opened
    //       const notif = notificationOpen.notification
    //       this.setState({
    //         initNotif: notif.data
    //       })
    //       if (notif && notif.targetScreen === 'detail') {
    //         setTimeout(() => {
    //           this.props.navigation.navigate('Detail')
    //         }, 500)
    //       }
    //     }
    //   })

    // if (!await firebase.messaging().hasPermission()) {
    //   try {
    //     await firebase.messaging().requestPermission()
    //   } catch (e) {
    //     alert('Failed to grant permission')
    //   }
    // }

    // firebase.database().goOnline()
    // const fcmToken = firebase.database().ref('fcm_token')

    // firebase.messaging().getToken().then(token => {
    //   const newState = {}
    //   console.log('TOKEN (getFCMToken)', token)
    //   newState.token = token || 'xxx'
    //   if (this.state.isAuthenticated) {
    //     newState.uid = firebase.auth().currentUser.uid
    //     console.log('current user: ', newState.uid)
    //     fcmToken.child(newState.uid).set(newState)
    //   }
    //   this.setState(newState)
    // })

      // topic example
    // firebase.messaging().subscribeToTopic('sometopic')
    // firebase.messaging().unsubscribeFromTopic('sometopic')

    // var offline = await AsyncStorage.getItem('headless')
    // if (offline) {
    //   this.setState({
    //     offlineNotif: offline
    //   })
    //   AsyncStorage.removeItem('headless')
    // }
  }
  componentWillUnmount () {
    // this.onTokenRefreshListener();
    // this.notificationOpenedListener();
    // this.messageListener();
  }
  // showLocalNotification () {
  //   let notification = new firebase.notifications.Notification()
  //   notification = notification.setNotificationId(new Date().valueOf().toString())
  //   .setTitle('Test Notification with action')
  //   .setBody('Force touch to reply')
  //   .setSound('bell.mp3')
  //   .setData({
  //     now: new Date().toISOString()
  //   })
  //   notification.ios.badge = 10
  //   notification.android.setAutoCancel(true)

  //   notification.android.setBigPicture('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png', 'https://image.freepik.com/free-icon/small-boy-cartoon_318-38077.jpg', 'content title', 'summary text')
  //   notification.android.setColor('red')
  //   notification.android.setColorized(true)
  //   notification.android.setOngoing(true)
  //   notification.android.setPriority(firebase.notifications.Android.Priority.High)
  //   notification.android.setSmallIcon('ic_launcher')
  //   notification.android.setVibrate([300])
  //   notification.android.addAction(new firebase.notifications.Android.Action('view', 'ic_launcher', 'VIEW'))
  //   notification.android.addAction(new firebase.notifications.Android.Action('reply', 'ic_launcher', 'REPLY').addRemoteInput(new firebase.notifications.Android.RemoteInput('input')))
  //   notification.android.setChannelId('test-channel')

  //   firebase.notifications().displayNotification(notification)
  // }
  // scheduleLocalNotification () {
  //   let notification = new firebase.notifications.Notification()
  //   notification = notification.setNotificationId(new Date().valueOf().toString())
  //   .setTitle('Test Notification with action')
  //   .setBody('Force touch to reply')
  //   .setSound('bell.mp3')
  //   .setData({
  //     now: new Date().toISOString()
  //   })
  //   notification.android.setChannelId('test-channel')
  //   notification.android.setPriority(firebase.notifications.Android.Priority.High)
  //   notification.android.setSmallIcon('ic_launcher')

  //   firebase.notifications().scheduleNotification(notification, { fireDate: new Date().getTime() + 5000 })
  // }

  // sendRemoteNotification (token) {
  //   let body

  //   if (Platform.OS === 'android') {
  //     body = {
  //       'to': token,
  //     	'data': {
  //       'title': 'Simple FCM Client',
  //       'body': 'Click me to go to detail',
  //       targetScreen: 'detail',
  //       now: new Date().toISOString()
  //   		},
  //   		'priority': 10
  //     }
  //   } else {
  //     body = {
  //       'to': token,
  //       'notification': {
  //         'title': 'Simple FCM Client',
  //         'body': 'Click me to go to detail',
  //         'sound': 'default'
  //       },
  //       data: {
  //         targetScreen: 'detail',
  //         now: new Date().toISOString()
  //       },
  //       'priority': 10
  //     }
  //   }

  //   firebaseClient.send(JSON.stringify(body), 'notification')
  // }
  render () {
    // If the user has not authenticated
    // if (!this.state.isAuthenticated) {
    //   return null;
    // } else {
    //   console.log('current user: ', firebase.auth().currentUser.uid)
    // }
    return (
      <Container>
        <HeaderMenu
          hasHamburger
          hasSearch
          navigation={this.props.navigation}
          title={'JemaatApp'}
        />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.logoContainer}>
              <Image source={launchscreenLogo} style={styles.logo} />
              {/* <ImageBackground source={launchscreenLogo} style={styles.logo} /> */}
            </View>
            <View
              style={{
                flex: 1,
                // alignItems: 'center',
                marginLeft: 50,
                marginRight: 50,
                backgroundColor: 'transparent'
              }}
            >
              <LoginOption />
            </View>
          </ScrollView>
        </ImageBackground>
      </Container>
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
    // restapiRequest: (query) => dispatch(RestapiActions.restapiRequest(query)),
    // renpagiRequest: (query) => dispatch(RenpagiActions.renpagiRequest(query)),
    // ssdewasaRequest: (query) => dispatch(SsdewasaActions.ssdewasaRequest(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
