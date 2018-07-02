import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

const colors = Colors
const width = Metrics.screenWidth
const fontStyle = Fonts.style

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.backgroundColor
  },
  itemTabNavigator: {
    width: '100%',
    // height: '100%',
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const tabNavigationStyles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: colors.white,
    height: 10,
    width: width / 3
  },
  labelStyle:
    width <= 320 ? fontStyle.h13MedWhiteT.style : fontStyle.h11MedWhiteT.style,
  style: {
    // backgroundColor: colors.colorPrimary
  },
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
})
