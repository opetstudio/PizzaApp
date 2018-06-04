import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import {
  DeckSwiper,
  Card,
  CardItem,
  Left,
  Body,
  Text
} from 'native-base'
import styles from './Styles/DetailContentDeckSwiperStyle'

export default class DetailContentDeckSwiper extends Component {
  // // Prop type warnings
  static propTypes = {
    allData: PropTypes.array.isRequired
    // someSetting: PropTypes.bool.isRequired,
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <DeckSwiper
          ref={mr => (this._deckSwiper = mr)}
          dataSource={this.props.allData}
          looping={false}
          renderEmpty={() =>
            <View style={{ alignSelf: 'center' }}>
              <Text>Over</Text>
            </View>}
          renderItem={item =>
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  {/* <Thumbnail source={item.image} /> */}
                  <Body>
                    <Text>
                      {item.title}
                    </Text>
                    <Text note>NativeBase</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                {/* <Image
                  style={{
                    resizeMode: "cover",
                    width: null,
                    flex: 1,
                    height: 300
                  }}
                  source={item.image}
                /> */}
                <Text>tess</Text>
              </CardItem>
              <CardItem>
                {/* <IconNB name={"ios-heart"} style={{ color: "#ED4A6A" }} /> */}
                <Text>
                  {item.title}
                </Text>
              </CardItem>
            </Card>
          }
        />
      </View>
    )
  }
}
