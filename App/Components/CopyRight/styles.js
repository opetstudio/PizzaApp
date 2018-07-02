import { StyleSheet } from 'react-native'
import {Colors} from '../../Themes'

const colors = Colors

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackPrimaryOpacity,
    alignSelf: 'flex-end',
    marginLeft: -20,
    paddingLeft: 20
  },
  textStyle: {
    textAlign: 'center'
  }
})
