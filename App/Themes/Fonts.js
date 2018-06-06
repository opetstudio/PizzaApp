import {Platform} from 'react-native'
import Colors from './Colors'
const type = {
  base: 'Avenir-Book',
  // bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic',
  light: Platform.OS === 'ios' ? 'HelveticaNeue-Light' : 'HelveticaNeueLight',
  bold: Platform.OS === 'ios' ? 'HelveticaNeue-Bold' : 'HelveticaNeueBold',
  medium:
    Platform.OS === 'ios' ? 'HelveticaNeue-Medium' : 'HelveticaNeueMedium',
  regular: 'HelveticaNeue',
  thin: Platform.OS === 'ios' ? 'HelveticaNeue-Thin' : 'HelveticaNeueThin'
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  h10: 15.9,
  h11: 14.1,
  h12: 12,
  h13: 11.7,
  h14: 9.9,
  h15: 9,
  h16: 18,
  h17: 17,
  h18: 50,
  h19: 2,
  h20: 1,
  h21: 12,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  h4MedWhiteP: {
    style: {
      fontSize: size.h4,
      fontFamily: type.medium,
      color: Colors.whitePrimary
    },
    props: {
      letterSpacing: 0.5,
      lineHeight: -8
    }
  },
  h10LtWhiteT: {
    style: {
      fontSize: size.h10,
      fontFamily: type.light,
      color: Colors.whiteTertiary
    },
    props: {
      lineHeight: 6.7
    }
  }
}

export default {
  type,
  size,
  style
}
