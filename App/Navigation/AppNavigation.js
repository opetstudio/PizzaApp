import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import LoginMethodScreen from '../Containers/Auth/LoginMethodScreen'
import DetailContentDeckSwiperScreen from '../Containers/DetailContentDeckSwiperScreen'
import DetailScreen from '../Containers/DetailScreen'
import HomeScreen from '../Containers/Home/HomeScreen'
import AboutAppScreen from '../Containers/AboutAppScreen'
import RenpagiScreen from '../Containers/Renpagi/RenpagiScreen'
import SsabatScreen from '../Containers/Ssabat/SsabatScreen'
// import LaunchScreen from '../Containers/LaunchScreen'
import Drawer from '../Containers/Drawer'
import PresentationScreen from '../../ignite/DevScreens/PresentationScreen'
import DetailArticleCommentScreen from '../Containers/Comment/DetailArticleCommentScreen'
import SponsorScreen from '../Containers/Sponsor/SponsorScreen'
import SupportScreen from '../Containers/Support/SupportScreen'
import navigatorHelper from '../Lib/helper/navigator'
import {isIphoneX} from '../Lib/helper/platform'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const menuRoutes = {
  HomeScreen: { screen: HomeScreen, navigationOptions: { drawerLabel: 'Home' } },
  RenunganpagiScreen: { screen: RenpagiScreen, navigationOptions: { drawerLabel: 'RenpagiScreen' } },
  SekolahsabatScreen: { screen: SsabatScreen, navigationOptions: { drawerLabel: 'SsabatScreen' } },
  SponsorScreen: { screen: SponsorScreen, navigationOptions: { drawerLabel: 'Sponsors' } },
  SupportScreen: { screen: SupportScreen, navigationOptions: { drawerLabel: 'Support' } },
  AboutAppScreen: { screen: AboutAppScreen, navigationOptions: { drawerLabel: 'Tentang JemaatApp' } },
  PresentationScreen: { screen: (props) => <PresentationScreen screenProps={{ toggle: () => {} }} /> }
}
const PrimaryNav = DrawerNavigator(menuRoutes, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  },
  contentComponent: props => <Drawer {...props} />
})

navigatorHelper.setMenuNavigationRoutes(menuRoutes)

const StackNav = StackNavigator({
  PrimaryNav: { screen: PrimaryNav },
  DetailScreen: { screen: DetailScreen },
  DetailContentDeckSwiperScreen: { screen: DetailContentDeckSwiperScreen },
  DetailArticleCommentScreen: { screen: DetailArticleCommentScreen },
  LoginMethodScreen: { screen: LoginMethodScreen }

   // LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'PrimaryNav',
  navigationOptions: {
    headerStyle: styles.header
  },
  cardStyle: isIphoneX ? { shadowColor: 'transparent' } : {}
})

export default StackNav
