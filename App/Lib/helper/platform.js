import { Platform, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const IPHONE_X_SIZE = 812

export const platform = Platform.OS

export const isIos = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'

export const isIphoneX =
  isIos && (height === IPHONE_X_SIZE || width === IPHONE_X_SIZE)
