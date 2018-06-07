import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View } from 'react-native'
import styles from './Styles/StyledRow1Style'
import {
  ListItem,
  Body,
  Right,
  Text,
  Left,
  Thumbnail
} from 'native-base'

export default class StyledRow1 extends Component {
  // // Prop type warnings
  static propTypes = {
    avatar: PropTypes.number,
    firstText: PropTypes.string,
    secondText: PropTypes.string,
    rightText: PropTypes.string,
    itemOnPress: PropTypes.func
  }

  // Defaults for props
  static defaultProps = {
    firstText: ''
  }

  render () {
    const { firstText, secondText, rightText, itemOnPress, avatar } = this.props
    return (
      <View style={{ flex: 1 }}>
        <ListItem avatar={(avatar)} onPress={itemOnPress}>
          {avatar &&
            <Left>
              <Thumbnail small source={avatar} />
            </Left>
          }
          <Body>
            <Text>
              {firstText}
            </Text>
            {secondText && <Text numberOfLines={1} note>
              {secondText}
            </Text>}
          </Body>
          <Right>
            <Text note>
              {rightText}
            </Text>
          </Right>
        </ListItem>
      </View>
    )
  }
}
