import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/AdsBannerStyle'

import {
  AdMobBanner
} from 'react-native-admob'
import AppConfig from '../Config/AppConfig'

export default class AdsBanner extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <AdMobBanner
        adSize='fullBanner'
        adUnitID={AppConfig.bannerAdUnitID}
        testDeviceID={AdMobBanner.simulatorId}
        onAdFailedToLoad={this._bannerError}
      />
    )
  }
}
