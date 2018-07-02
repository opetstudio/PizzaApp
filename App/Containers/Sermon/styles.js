import { StyleSheet } from 'react-native'
import {Colors, Fonts, Metrics} from '../../Themes'
// import fontStyle from '../../themes/fonts';
// import { width } from '../../themes/dimensions';

const colors = Colors
const fontStyle = Fonts.style
const width = Metrics.screenWidth

export const myDataStyles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15
  },
  packageContainer: {
    backgroundColor: colors.darkSlateBluePrimary,
    paddingHorizontal: 15,
    borderRadius: 2
  },
  header: {
    paddingVertical: 15
  },
  whiteBorder: {
    borderBottomColor: colors.whiteTertiaryOpacity,
    borderBottomWidth: 0.5
  },
  marginTop0: {
    marginTop: 0
  },
  chevronImage: {
    marginLeft: 5
  },
  detailsWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export const settings = StyleSheet.create({
  container: {
    paddingTop: 15,
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  section: {
    paddingTop: 10,
    paddingBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  logoutButton: {
    marginVertical: 10,
    marginHorizontal: 102
  },
  linkIcon: {
    width: 16,
    height: 16,
    marginLeft: 3
  },
  connectSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  connectButton: {
    flexDirection: 'row'
  }
})

export const myPackagesStyles = StyleSheet.create({
  container: {
    marginBottom: 30
  },
  btnContainer: {
    flexDirection: 'row'
  },
  list: {
    borderRadius: 2,
    marginTop: 15
  },
  addMargin: {
    marginBottom: 20
  },
  headingWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buyPackageBtn: {
    flex: 0.5
  },
  flex1: {
    flex: 1
  },
  justifyEnd: { justifyContent: 'flex-end' }
})

export const tabNavigationStyles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: colors.white,
    height: 4,
    width: width / 2
  },
  labelStyle:
    width <= 320 ? fontStyle.h13MedWhiteT.style : fontStyle.h11MedWhiteT.style,
  style: {
    backgroundColor: colors.colorPrimary
  },
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
})

export const genreTabStyle = StyleSheet.create({
  resetView: {
    paddingLeft: 20,
    paddingVertical: 30,
    alignContent: 'flex-end'
  },
  resetText: {
    marginTop: 13
  },

  buttonContainer: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonPrimary: {
    flex: 1,
    width: 10,
    paddingHorizontal: 10,
    marginLeft: 20
  }
})

export const styles = StyleSheet.create({
  refreshIcon: {
    marginTop: 2,
    marginLeft: 4,
    marginRight: 2
  },
  refreshBtn: {
    flexDirection: 'row',
    padding: 5
  },
  lastUpdatedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  }
})
