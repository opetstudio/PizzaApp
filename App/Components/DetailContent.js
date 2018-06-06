import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WebView, Text, View, Platform } from 'react-native'
import {
  Content,
  Card,
  CardItem,
  Left,
  Body,
  Container,
  IconNB,
  Button,
  Fab
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
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }

  render () {
    // const { data: { title, tanggal, isi_html }, even } = this.props
    const {title, htmlContent, date, contributorSpace} = this.props
    const formatedDate = moment(new Date(date)).format('dddd DD-MMM YYYY')

    const html = `<h3>${formatedDate}</h3><h2>${title}</h2><div>${htmlContent}</div>${AppConfig.getContributorSpace(contributorSpace)}`
    return (
      <View style={{ flex: 1 }}>
        <WebView style={{ flex: 1 }} source={{ html }} scalesPageToFit={Platform.OS === 'android'} />
        <View style={{ }}>
          <Fab
            active={this.state.active}
            direction='up'
            containerStyle={{}}
            style={{ backgroundColor: '#5067FF' }}
            position='bottomRight'
            onPress={() => this.setState({ active: !this.state.active })}
          >
            <IconNB name='md-share' />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <IconNB name='logo-whatsapp' />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <IconNB name='logo-facebook' />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <IconNB name='ios-mail' />
            </Button>
          </Fab>
        </View>
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
