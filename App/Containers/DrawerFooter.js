import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
  Button
} from 'native-base'
import { connect } from 'react-redux'
import StyledText from '../Components/StyledText'
import LanguageProvider from '../Components/LanguageProvider'
import NavigatorHelpr from '../Utils/helper/navigator'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import SessionActions, {SessionSelectors} from '../Redux/SessionRedux'

// Styles
import styles from './Styles/DrawerFooterStyle'

class DrawerFooter extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }
  render () {
    const isLoggedIn = this.props.currentUser !== null
    const footerStyle = isLoggedIn
    ? styles.footerButton2
    : styles.footerButton1
    const supportText = isLoggedIn
      ? styles.supportTextLogin
      : styles.supportTextNotLogin
    const borderLanguageStyle = isLoggedIn
      ? styles.borderLanguage
      : styles.borderLanguageNotLogin
    __DEV__ && console.log('[DrawerFooter] isLoggedIn', isLoggedIn)
    const logoutSection = isLoggedIn ? (
      <TouchableOpacity style={styles.logout} onPress={() => this.props.sessionLogout()}>
        <StyledText
          addedStyle={styles.footerLogout}
          textStyle='h11LtGreyS'
          i18nKey='drawer-logout'
        />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.logout} onPress={() => this.props.navigation.navigate('LoginMethodScreen')}>
        <StyledText
          addedStyle={styles.footerLogout}
          textStyle='h11LtGreyS'
          i18nKey='drawer-login'
        />
      </TouchableOpacity>
    )
    return (
      <View style={styles.footer}>
        <TouchableOpacity style={footerStyle} onPress={() => {}}>
          <StyledText
            i18nKey='drawer-support'
            textStyle='h11LtGreyS'
            addedStyle={supportText}
          />
          <View style={borderLanguageStyle} />
        </TouchableOpacity>
        {/* <LanguageProvider
          isLoggedIn={isLoggedIn}
          chosenLocale={chosenLocale}
          languages={languages}
          onChangeLocale={onChangeLocale}
        /> */}
        {logoutSection}
        {/* <Button full>
          <Text>Logout</Text>
        </Button> */}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: SessionSelectors.getCurrentUser(state.session)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sessionLogout: () => dispatch(SessionActions.sessionLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerFooter)
