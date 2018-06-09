import React, { Component } from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import DrawerFooter from '../Containers/DrawerFooter'
import DrawerHeader from '../Containers/DrawerHeader'
import LoginMethodScreen from '../Containers/Auth/LoginMethodScreen'
import DetailContentDeckSwiperScreen from '../Containers/DetailContentDeckSwiperScreen'
import DetailScreen from '../Containers/DetailScreen'
import HomeScreen from '../Containers/HomeScreen'
import AboutAppScreen from '../Containers/AboutAppScreen'
import RenunganpagiScreen from '../Containers/RenunganpagiScreen'
import SekolahsabatScreen from '../Containers/SekolahsabatScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import Sidedrawer from '../Components/Sidedrawer'
import PresentationScreen from '../../ignite/DevScreens/PresentationScreen'
import DetailArticleCommentScreen from '../Containers/DetailArticleCommentScreen'
import navigatorHelper from '../Utils/helper/navigator'
import {isIphoneX} from '../Utils/helper/platform'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const menuRoutes = {
  HomeScreen: { screen: HomeScreen, navigationOptions: { drawerLabel: 'Home' } },
  RenunganpagiScreen: { screen: RenunganpagiScreen, navigationOptions: { drawerLabel: 'Renungan Pagi' } },
  SekolahsabatScreen: { screen: SekolahsabatScreen, navigationOptions: { drawerLabel: 'Sekolah Sabat' } },
  AboutAppScreen: { screen: AboutAppScreen, navigationOptions: { drawerLabel: 'Tentang JemaatApp' } },
  PresentationScreen: { screen: (props) => <PresentationScreen screenProps={{ toggle: () => {} }} /> }
}
const PrimaryNav = DrawerNavigator(menuRoutes, {
  DrawerFooter: { screen: DrawerFooter },
  DrawerHeader: { screen: DrawerHeader },
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  },
  contentComponent: props => <Sidedrawer {...props} />
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
