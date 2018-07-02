import React from 'react'
import {View} from 'react-native'
import { StackNavigator, DrawerNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import {Thumbnail} from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LoginMethodScreen from '../Containers/Auth/LoginMethodScreen'
import DetailContentDeckSwiperScreen from '../Containers/DetailContentDeckSwiperScreen'
import DetailScreen from '../Containers/DetailScreen'
import SermonScreen from '../Containers/Sermon'
import HomeScreen from '../Containers/Home/HomeScreen'
import AboutAppScreen from '../Containers/AboutAppScreen'
import RenpagiScreen from '../Containers/Renpagi/RenpagiScreen'
import SsabatScreen from '../Containers/Ssabat/SsabatScreen'
import CPDashboardScreen from '../Containers/CPDashboard/CPDashboardScreen'
// import LaunchScreen from '../Containers/LaunchScreen'
import Drawer from '../Containers/Drawer'
import PresentationScreen from '../../ignite/DevScreens/PresentationScreen'
import DetailArticleCommentScreen from '../Containers/Comment/DetailArticleCommentScreen'
import SponsorScreen from '../Containers/Sponsor/SponsorScreen'
import SupportScreen from '../Containers/Support/SupportScreen'
import navigatorHelper from '../Lib/helper/navigator'
import {isIphoneX} from '../Lib/helper/platform'

import styles, {tabNavigationStyles} from './Styles/NavigationStyles'
import {Images, Colors} from '../Themes'


// const renunganTabNab = TabNavigator({
//   RenunganpagiScreen: { screen: RenpagiScreen, navigationOptions: { drawerLabel: 'RenpagiScreen' } },
//   SekolahsabatScreen: { screen: SsabatScreen, navigationOptions: { drawerLabel: 'SsabatScreen' } }
// }, {
//   navigationOptions: ({ navigation }) => ({
//     tabBarIcon: ({ focused, tintColor }) => {
//       const { routeName } = navigation.state
//       let iconName
//       if (routeName === 'CPDashboardScreen') {
//         iconName = `ios-home${focused ? '' : '-outline'}`
//       } else if (routeName === 'RenunganpagiScreen') {
//         iconName = `ios-partly-sunny${focused ? '' : '-outline'}`
//         const middleStyle = {
//           // borderRightWidth: 2,
//           // borderRightColor: '#777',
//           // borderLeftWidth: 2,
//           // borderLeftColor: '#777'
//         }
//         // return <View style={[styles.itemTabNavigator, middleStyle]}><Thumbnail source={Images.renunganPagiIcon} small square /></View>
//       } else if (routeName === 'SekolahsabatScreen') {
//         iconName = `ios-book${focused ? '' : '-outline'}`
//       }

//       // You can return any component that you like here! We usually use an
//       // icon component from react-native-vector-icons
//       // return <View style={[styles.itemTabNavigator]}><Thumbnail source={Images.renunganPagiIcon} small square /></View>
//       return <Ionicons name={iconName} size={25} color={tintColor} />
//     }
//   }),
//   ...TabNavigator.Presets.AndroidTopTabs,
//   tabBarOptions: {
//     showLabel: false,
//     showIcon: true,
//     upperCaseLabel: false,
//     pressColor: 'rgba(0,0,0,0)',
//     pressOpacity: 0,
//     activeTintColor: 'gray',
//     inactiveTintColor: Colors.charcoal,
//     // tintColor: '#333',
//     ...tabNavigationStyles
//   },
//   tabBarComponent: TabBarBottom,
//   tabBarPosition: 'top',
//   animationEnabled: false,
//   swipeEnabled: false,
//   initialRouteName: 'RenunganpagiScreen'
// })
// Manifest of possible screens
const menuRoutes = {
  CPDashboardScreen: { screen: CPDashboardScreen },
  SermonScreen: { screen: SermonScreen },
  // RenunganpagiScreen: { screen: RenpagiScreen, navigationOptions: { drawerLabel: 'RenpagiScreen' } },
  // SekolahsabatScreen: { screen: SsabatScreen, navigationOptions: { drawerLabel: 'SsabatScreen' } },
  // SponsorScreen: { screen: SponsorScreen, navigationOptions: { drawerLabel: 'Sponsors' } },
  // SupportScreen: { screen: SupportScreen, navigationOptions: { drawerLabel: 'Support' } },
  AboutAppScreen: { screen: AboutAppScreen, navigationOptions: { drawerLabel: 'Tentang JemaatApp' } },
  // PresentationScreen: { screen: (props) => <PresentationScreen screenProps={{ toggle: () => {} }} /> }
}
const PrimaryNav = DrawerNavigator(menuRoutes, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'CPDashboardScreen',
  navigationOptions: {
    headerStyle: styles.header
  },
  contentComponent: props => <Drawer {...props} />
})



const TabNav = TabNavigator(menuRoutes, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'CPDashboardScreen') {
        iconName = `ios-home${focused ? '' : '-outline'}`
      } else if (routeName === 'SermonScreen') {
        iconName = `ios-partly-sunny${focused ? '' : '-outline'}`
        const middleStyle = {
          // borderRightWidth: 2,
          // borderRightColor: '#777',
          // borderLeftWidth: 2,
          // borderLeftColor: '#777'
        }
        // return <View style={[styles.itemTabNavigator, middleStyle]}><Thumbnail source={Images.renunganPagiIcon} small square /></View>
      } else if (routeName === 'AboutAppScreen') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      // return <View style={[styles.itemTabNavigator]}><Thumbnail source={Images.renunganPagiIcon} small square /></View>
      return <Ionicons name={iconName} size={25} color={tintColor} />
    }
  }),
  ...TabNavigator.Presets.AndroidTopTabs,
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    upperCaseLabel: false,
    pressColor: 'rgba(0,0,0,0)',
    pressOpacity: 0,
    activeTintColor: 'gray',
    inactiveTintColor: Colors.charcoal,
    // tintColor: '#333',
    ...tabNavigationStyles
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  initialRouteName: 'CPDashboardScreen'
})

navigatorHelper.setMenuNavigationRoutes(menuRoutes)

const StackNav = StackNavigator({
  PrimaryNav: { screen: TabNav },
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
