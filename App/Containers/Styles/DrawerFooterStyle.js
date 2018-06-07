import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

const width = Metrics.screenWidth

export default StyleSheet.create({
  container: {
    flex: 0,
    bottom: 0,
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: 'red'
  },
  footer: {
    flex: 0,
    bottom: 0,
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: Colors.greySecondary
    // backgroundColor: 'red'

  },
  footerButton1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    width: width / 2.5,
  },
  footerButton2: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
    width: width / 4,
  },
  footerLogout: {
    marginTop: 5,
    alignItems: 'center',
  },
  supportTextLogin: {
    marginLeft: 15,
  },
  supportTextNotLogin: {
    marginLeft: 40,
  },
  borderLanguage: {
    borderColor: Colors.greySecondary,
    borderLeftWidth: 1,
    height: 50,
    marginLeft: 5,
    marginTop: -10,
  },
  borderLanguageNotLogin: {
    borderColor: Colors.greySecondary,
    borderLeftWidth: 1,
    height: 50,
    marginTop: -10,
    marginLeft: 10,
  },
  logout: {
    borderColor: Colors.greySecondary,
    borderLeftWidth: 1,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: width / 3.85,
    alignItems: 'center',
    alignContent: 'center'
  },
})
