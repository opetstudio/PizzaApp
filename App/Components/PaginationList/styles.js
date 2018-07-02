import { StyleSheet } from 'react-native'
import {Colors, Metrics} from '../../Themes'

const colors = Colors
const width = Metrics.screenWidth
const height = Metrics.screenHeight
const widthItem = width / 3 - (6 * 5)

export default StyleSheet.create({
  container: {
    flex: 1
  },
  gridWrapper: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.backgroundDark,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listWrapper: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  gridItem: {
    width: widthItem,
    height: widthItem,
    backgroundColor: colors.slateGreyPrimary,
    margin: 5
  },
  listItem: {
    flex: 1
  }
})
