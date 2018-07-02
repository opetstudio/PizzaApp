import { StyleSheet } from 'react-native'
import {Colors as colors} from '../../Themes'
// import colors from '../../themes/colors';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    paddingVertical: 10
  },
  // for Primary Button other component should be flex: 1
  primary: {
    backgroundColor: colors.redPrimary,
    flex: 1
  },
  primaryInactive: {
    backgroundColor: colors.redPrimaryOpacity,
    flex: 1
  },
  // for Secondary Button other component should be flex: 1
  secondary: {
    backgroundColor: colors.darkNavyBlueSecondary,
    borderColor: colors.redPrimary,
    borderWidth: 1,
    flex: 1
  },
  secondaryInactive: {
    backgroundColor: colors.darkNavyBlueSecondaryOpacity,
    borderColor: colors.redPrimaryOpacity,
    flex: 1
  }
})
