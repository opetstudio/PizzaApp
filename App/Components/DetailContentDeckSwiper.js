import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, WebView, ScrollView, Platform } from 'react-native'
import {
  Container,
  Content,
  Text
} from 'native-base'
import styles from './Styles/DetailContentDeckSwiperStyle'
import Swiper from 'react-native-swiper'
import moment from 'moment'
import { Metrics } from '../Themes'
import HeaderMenu from '../Components/HeaderMenu'

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
  _renderRow (v) {
    const {title, isi_html: isiHtml, tanggal} = v
    const formatedDate = moment(new Date(tanggal)).format('dddd DD-MMM YYYY')
    const html = `<h3>${formatedDate}</h3><h2>${title}</h2> ${isiHtml}`
    // if (Platform.OS === 'ios') {
      return (
        <View style={styles.slide}>
          {/* <HeaderMenu
            hasBack
            navigation={this.props.navigation}
            title={title}
            /> */}
          {/* <Text style={styles.text}>{title}</Text> */}
          { Platform.OS === 'android' &&
            <WebView source={{ html }} />
          }
          { Platform.OS === 'ios' &&
            <WebView source={{ html }} scalesPageToFit={false} />
          }
        </View>
      )
    // }
    // return (
    //   // <Text>{html}</Text>
    //   <WebView source={{ html }} scrollEnabled />
    // )
  }
  render () {
    // const v = this.props.allData[1]
    // const {title, isi_html: isiHtml, tanggal} = v
    // const formatedDate = moment(new Date(tanggal)).format('dddd DD-MMM YYYY')
    // const html = `<h3>${formatedDate}</h3><h2>${title}</h2> ${isiHtml}`
    // const headerH = this.props.headerHeight
    // if (Platform.OS === 'android') {
    //   return (<View style={{flex: 1}}>
    //     {/* <WebView style={{ flex: 1 }} source={{ html }} /> */}
    //     {this._renderRow(this.props.allData[0])}
    //   </View>)
    //   // return (
    //   //   <Swiper style={styles.wrapper} showsButtons height={Metrics.screenHeight - Metrics.navBarHeight}>
    //   //     {this.props.allData.map(v => this._renderRow(v))}
    //   //   </Swiper>)
    // }
    return (
      <Swiper style={styles.wrapper} showsButtons>
        {this.props.allData.map(v => this._renderRow(v))}
      </Swiper>
    )
  }
}
