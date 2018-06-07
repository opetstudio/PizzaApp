import { StyleSheet, Platform } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

const deviceHeight = Metrics.screenHeight
const deviceWidth = Metrics.screenWidth

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  drawerCoverWrapper: {
    // flex: 1,
    // height: deviceHeight / 3.5,
    width: null,
    // marginBottom: 10,
    // backgroundColor: 'blue'
  },
  drawerCover: {
    alignSelf: 'stretch',
    height: deviceHeight / 3.5,
    width: null,
    position: 'relative'
  },
  drawerImageWrapper: {
    position: 'absolute',
    top: 60,
    left: Platform.OS === 'android' ? deviceWidth / 12 : deviceWidth / 11,
    width: 210,
    // height: 150,
    // resizeMode: 'cover',
    // backgroundColor: 'red',
    flexDirection: 'row',
    // marginTop: -25,
    justifyContent: 'flex-start'
  },
  drawerImage: {
    position: 'absolute',
    left: Platform.OS === 'android' ? deviceWidth / 10 : deviceWidth / 9,
    top: 60,
    width: 210,
    height: 75,
    resizeMode: 'cover',
    // backgroundColor: 'red'
  },
  profileImageView: {
    // borderRadius: 50,
    // marginLeft: 14,
    // marginTop: 35,
    borderWidth: 5,
    borderColor: '#ffffff',
    overflow: 'hidden'
  },
  profileImage: {
    width: 63,
    height: 63
  },
  profileText1: {
    backgroundColor: 'transparent',
    fontSize: 24,
    marginTop: 5,
    color: Colors.greySecondary
  }
})
