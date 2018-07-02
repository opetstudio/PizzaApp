import React from 'react'
import { View } from 'react-native'
import { TabNavigator } from 'react-navigation'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import I18n from '../../I18n'
import Nearby from './Nearby'
import Chats from './Chats'
import Groups from './Groups'
import { tabNavigationStyles } from './styles'
import HeaderMenu from '../../Components/HeaderMenu'
import RenpagiScreen from '../Renpagi/RenpagiScreen'
import SsabatScreen from '../Ssabat/SsabatScreen'

const textMessage = I18n.t
const propTypes = {
  locale: PropTypes.string,
  navigation: PropTypes.object
}
const tabList = [
  {
    name: 'tab-renungan',
    screen: RenpagiScreen,
    navigationOptions: {
      tabBarLabel: () => textMessage('tab-renungan')
    }
  },
  {
    name: 'tab-ssabat',
    screen: SsabatScreen,
    navigationOptions: {
      tabBarLabel: () => textMessage('tab-ssabat')
    }
  }
]

const generateTabs = () => {
  var tabs = {}
  tabList.map(tab => {
    const navigationOptions = tab.navigationOptions || null
    tabs[tab.name] = {
      screen: tab.screen,
      navigationOptions
    }
  })
  return tabs
}

const MessageTabs = TabNavigator(generateTabs(), {
  lazy: true,
  ...TabNavigator.Presets.AndroidTopTabs,
  tabBarOptions: {
    upperCaseLabel: false,
    pressColor: 'rgba(0,0,0,0)',
    pressOpacity: 0,
    ...tabNavigationStyles
  },
  tabBarPosition: 'top',
  initialRouteName: 'tab-renungan'
})

export const Sermon = ({ navigation, locale }) => (
  <View style={tabNavigationStyles.container}>
    <HeaderMenu isHomePage navigation={navigation} title='header-message' />
    <MessageTabs navigation={navigation} screenProps={locale} />
  </View>
)

function mapStateToProps (state) {
  return {
    //   locale:
    //     (state.get('languageProvider') &&
    //       state.get('languageProvider').toJS()['locale']) ||
    //     null,
  }
}

Sermon.propTypes = propTypes

Sermon.router = MessageTabs.router

export default connect(mapStateToProps)(Sermon)
