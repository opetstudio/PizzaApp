import React from 'react'
import { BackHandler, Platform } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import NavigatorHelper from '../utils/helper/navigator'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

class ReduxNavigation extends React.Component {
  componentWillMount () {
    if (Platform.OS === 'ios') return
    // BackHandler.addEventListener('hardwareBackPress', () => {
    //   const { dispatch, nav } = this.props
    //   // change to whatever is your first screen, otherwise unpredictable results may occur
    //   if (nav.routes.length === 1 && (nav.routes[0].routeName === 'LaunchScreen')) {
    //     return false
    //   }
    //   // if (shouldCloseApp(nav)) return false
    //   dispatch({ type: 'Navigation/BACK' })
    //   return true
    // })
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props
      console.log('this.props', this.props)
      console.log('nav.routes[0].routeName', nav.routes[0].routeName)
      console.log('nav.routes.length', nav.routes.length)
      // change to whatever is your first screen, otherwise unpredictable results may occur
      // if (nav.routes.length === 1 && (nav.routes[0].routeName === 'LaunchScreen')) {
      if (nav.routes.length > 1 && (nav.routes[0].index === 0 && nav.index === 0)) {
        return false
      }
      // if (shouldCloseApp(nav)) return false
      dispatch({ type: 'Navigation/BACK' })
      return true
    })
  }

  componentWillUnmount () {
    if (Platform.OS === 'ios') return
    BackHandler.removeEventListener('hardwareBackPress')
  }

  render () {
    return <AppNavigation
      screenProps={{ locale: 'ID' }}
      navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav, addListener: createReduxBoundAddListener('root') })}
      onNavigationStateChange={(prevState, currentState) => {}
        // screenTracking(
        //   prevState,
        //   currentState,
        //   this.props.profile,
        //   this.props.myPackagesList,
        // )
      }
      ref={navigatorRef => {
        NavigatorHelper.setContainer(navigatorRef)
      }}
    />
  }
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
