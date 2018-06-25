import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './Styles/DetailContentDeckSwiperStyle'
import Swiper from 'react-native-swiper'
import AppConfig from '../Config/AppConfig'
import DetailContent from '../Containers/DetailContent'

export default class DetailContentDeckSwiper extends Component {
  // // Prop type warnings
  static propTypes = {
    allData: PropTypes.array.isRequired
    // someSetting: PropTypes.bool.isRequired,
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   showComments: () => {}
  // }
  constructor (props) {
    super(props)
    this.state = {
    }
    this._renderRow = this._renderRow.bind(this)
  }
  _renderRow (v) {
    const {title, isi_html: isiHtml, tanggal, contributorSpace: contributorS, _id: contentId} = v
    const contributorSpace = contributorS || AppConfig.contributorSpace
    return (
      <View style={styles.slide} key={v._id}>
        <DetailContent
          title={title}
          date={tanggal}
          htmlContent={isiHtml}
          contributorSpace={contributorSpace}
          contentId={contentId}
          navigation={this.props.navigation}
          contentType={this.props.contentType}
        />
      </View>
    )
  }
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Swiper style={styles.wrapper} showsButtons>
          {this.props.allData.map(v => this._renderRow(v))}
        </Swiper>
      </View>
    )
  }
}
