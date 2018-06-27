
import React from 'react'
import { TouchableHighlight, View, Image } from 'react-native'
import PropTypes from 'prop-types'
import Styles from './Styles'
import I18n from '../../I18n'
import StyledText from '../StyledText'

const textMessage = I18n.t
let prevTimeStamp = 0

class ButtonWithIcon extends React.Component {
  static propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    sourceIcon: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
  }
  render () {
    const {
      backgroundColor,
      onPress,
      sourceIcon,
      label
    } = this.props

    const onPressHandler = e => {
      const currentTimeStamp = e.nativeEvent.timestamp
      if (currentTimeStamp - prevTimeStamp > 2000 || prevTimeStamp === 0) {
        prevTimeStamp = currentTimeStamp
        return void onPress()
      }
      return null
    }

    const renderViewButton = () => {
      return (
        <View style={Styles.buttonWrap}>
          <Image source={sourceIcon} style={Styles.icon} />
          <View style={Styles.partition} />
          <StyledText
            addedStyle={Styles.label}
            textStyle={'h10LtWhiteT'}
        >
            {textMessage(label)}
          </StyledText>
        </View>
      )
    }
    if (onPress) {
      return (
        <TouchableHighlight
          style={[
            Styles.container,
            { backgroundColor: backgroundColor }
          ]}
          onPress={onPressHandler}
        >
          {renderViewButton()}
        </TouchableHighlight>
      )
    }
    return (
      <View
        style={[
          Styles.container,
          { backgroundColor: backgroundColor }
        ]}
      >
        {renderViewButton()}
      </View>
    )
  }
}

export default ButtonWithIcon
