import React from 'react'
import { Image, View } from 'react-native'
import PropTypes from 'prop-types'

import StyledText from '../../Components/StyledText'
import {styles} from './styles'
import {Images} from '../../Themes'

const images = {
  live: Images.liveIcon,
  upcoming: Images.upcomingIcon,
  replay: Images.replayIcon,
  justended: Images.replayIcon,
  free: Images.free
}

const Badge = ({i18nKey, style, hidden, textStyleName}) =>
    !hidden && (
    <View
      style={[styles.badgeStyle, style]}
    >
      {images[i18nKey] ? (
        <Image source={images[i18nKey]} style={styles.badgeIcon} />
      ) : null}
      <StyledText
        textStyle={textStyleName || 'h7BoldWhiteT'}
        i18nKey={i18nKey}
        upperCase
      />
    </View>
)

Badge.propTypes = {
  children: PropTypes.any,
  hidden: PropTypes.bool,
  i18nKey: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  textStyleName: PropTypes.string
}

export default Badge
