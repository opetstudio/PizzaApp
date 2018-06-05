import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { WebView, Text, View, Platform } from 'react-native'
import {
  Content,
  Card,
  CardItem,
  Left,
  Body,
  Container
} from 'native-base'
import moment from 'moment'
import styles from './Styles/DetailContentStyle'
import {
  AdMobBanner
} from 'react-native-admob'
import AppConfig from '../Config/AppConfig'

export default class DetailContent extends Component {
  // // Prop type warnings
  static propTypes = {
    title: PropTypes.string.isRequired,
    htmlContent: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    // const { data: { title, tanggal, isi_html }, even } = this.props
    const {title, htmlContent, date, contributorSpace} = this.props
    const formatedDate = moment(new Date(date)).format('dddd DD-MMM YYYY')

    const html = `<h3>${formatedDate}</h3><h2>${title}</h2><div>${htmlContent}</div>${AppConfig.getContributorSpace(contributorSpace)}`
    return (
      <View style={{ flex: 1 }}>
        <WebView style={{ flex: 1 }} source={{ html }} scalesPageToFit={Platform.OS === 'android'} />
        <AdMobBanner
          adSize='fullBanner'
          adUnitID={AppConfig.bannerAdUnitID}
          testDeviceID={AdMobBanner.simulatorId}
          onAdFailedToLoad={this._bannerError}
        />
      </View>
    )
  }
}
