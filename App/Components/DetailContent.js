import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { WebView, Text } from 'react-native'
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
    const {title, htmlContent, date} = this.props
    const formatedDate = moment(new Date(date)).format('dddd DD-MMM YYYY')

    const html = `<h3>${formatedDate}</h3><h2>${title}</h2> ${htmlContent}`
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1 }}>
          <WebView scalesPageToFit={false} source={{ html }} />
        </Content>
      </Container>
    )
  }
}
