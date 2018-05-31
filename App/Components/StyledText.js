import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import { Fonts } from '../Themes'
import styles from './Styles/StyledTextStyle'
import { insertSpace, isAndroid } from '../Utils/helper/spaceInsertor';
import I18n from '../I18n'

export default class StyledText extends Component {
  // // Prop type warnings
  static propTypes = {
    addedStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    children: PropTypes.node,
    ellipse: PropTypes.string,
    i18nKey: PropTypes.string,
    i18nValue: PropTypes.object,
    isTextValueOveri18n: PropTypes.bool,
    isUnderline: PropTypes.bool,
    lines: PropTypes.number,
    onPress: PropTypes.func,
    textStyle: PropTypes.string,
    upperCase: PropTypes.bool,
    wrapStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  }
  //
  // // Defaults for props
  static defaultProps = {
    letterSpacing: 0,
    isUnderline: false,
  }

  render () {
    const props = this.props;
    const textMessage = I18n.t
    const fontStyle = Fonts.style
    const styling = fontStyle[props.textStyle] || fontStyle['h4'];
    const underline = props.isUnderline && <View style={styles.textUnderline} />;
    let children = props.i18nKey
      ? textMessage(props.i18nKey, props.i18nValue)
      : props.children;
    return (
      <View style={props.wrapStyle}>
        <Text
          onPress={props.onPress}
          style={[styles.transparentText, styling.style, props.addedStyle]}
          letterSpacing={styling.letterSpacing}
          lineHeight={styling.lineHeight}
          allowFontScaling={false}
          ellipsizeMode={props.ellipse}
          numberOfLines={props.lines}
        >
        {children}
        </Text>
        {underline}
      </View>
    )
  }
}