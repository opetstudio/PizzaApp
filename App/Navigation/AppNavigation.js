import React, { Component } from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import DetailContentDeckSwiperScreen from '../Containers/DetailContentDeckSwiperScreen'
import DetailScreen from '../Containers/DetailScreen'
import HomeScreen from '../Containers/HomeScreen'
import AboutAppScreen from '../Containers/AboutAppScreen'
import RenunganpagiScreen from '../Containers/RenunganpagiScreen'
import SekolahsabatScreen from '../Containers/SekolahsabatScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import Sidedrawer from '../Components/Sidedrawer'
import PresentationScreen from '../../ignite/DevScreens/PresentationScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: { drawerLabel: 'Home' } },
  RenunganpagiScreen: { screen: RenunganpagiScreen, navigationOptions: { drawerLabel: 'Renungan Pagi' } },
  SekolahsabatScreen: { screen: SekolahsabatScreen, navigationOptions: { drawerLabel: 'Sekolah Sabat' } },
  AboutAppScreen: { screen: AboutAppScreen, navigationOptions: { drawerLabel: 'Tentang JemaatApp' } },
  PresentationScreen: { screen: (props) => <PresentationScreen screenProps={{ toggle: () => {} }} /> }
  // LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  },
  contentComponent: props => <Sidedrawer {...props} />
})

const StackNav = StackNavigator({
  PrimaryNav: { screen: PrimaryNav },
  DetailScreen: { screen: DetailScreen },
  DetailContentDeckSwiperScreen: { screen: DetailContentDeckSwiperScreen }
   // LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'PrimaryNav',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default StackNav
