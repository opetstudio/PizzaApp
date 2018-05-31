import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { Root } from "native-base"
import SplashScreen from 'react-native-splash-screen'

import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import Dialog from '../Components/Dialog'


import PopupActions, { PopupSelectors } from '../Redux/PopupRedux'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {

    SplashScreen.hide();
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    return (
      <Root>

        <View style={styles.applicationView}>
          {/* <StatusBar barStyle='light-content' /> */}
          <Dialog
            message={this.props.message}
            isOpen={this.props.isOpen}
            hidePopup={this.props.hidePopup}
          />
          <ReduxNavigation />
        </View>
      </Root>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: PopupSelectors.getPopupMessage(state.popup),
    // isOpen: false
    isOpen: PopupSelectors.getPopupOpen(state.popup),
      // locale: selectLocale(),
  loading: false,
  // error: selectError(),
  // loginStatus: selectStatus(),
  appState: 'active',
  appUpdate: false,
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  appGoingBackground: () => {},
  appInFocus: ()=>{},
  // popupHide: () => dispatch(PopupActions.popupHide()),
  hidePopup: () => dispatch(PopupActions.popupHide()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
