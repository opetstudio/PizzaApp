import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View } from 'react-native'
import { isEmpty, isNull, isUndefined } from 'lodash'
import Swiper from 'react-native-swiper' // eslint-disable-line import/default
import LinearGradient from 'react-native-linear-gradient'
import {Colors, Images} from '../../Themes'
import {styles, containerHeight} from './styles'
import { generateImageURL } from '../../Lib/helper/imageUrlGenerator'
import { getMatchStatus } from '../../Lib/helper/dateHelper'
import ImageWithDefault from '../ImageWithDefault'
import Badge from '../Badge'
import CopyRight from '../CopyRight'

const colors = Colors

class TrendingNow extends PureComponent {
  static propTypes = {
    items: PropTypes.array,
    onItemPress: PropTypes.func.isRequired,
    providers: PropTypes.array,
    rootURL: PropTypes.string,
    locale: PropTypes.string
  }
  static defaultProps = {
    items: [],
    rootURL: ''
  }
  constructor (props) {
    super(props)
    this.state = { activeTrending: 0 }

    this._renderItem = this._renderItem.bind(this)
    this._isProvidedByPizzaApp = this._isProvidedByPizzaApp.bind(this)
  }
  _isProvidedByPizzaApp = item => {
    const { providers } = this.props
    const providerObj = providers.find(p => p.tid === item.provider)
    const providerName = providerObj && providerObj.name
    return providerName === 'PizzaApp'
  };
  _renderItem (item, index) {
    const { onItemPress, rootURL } = this.props
    const url = generateImageURL(item.images, rootURL, 'banner').url || null
    let prevTimeStamp = 0
    const onPressHandler = e => {
      const currentTimeStamp = e.nativeEvent.timestamp
      if (currentTimeStamp - prevTimeStamp > 2000 || prevTimeStamp === 0) {
        prevTimeStamp = currentTimeStamp
        return void onItemPress(item.id)
      }
      return null
    }
    const { start_time: startTime, end_time: endTime } = item
    const matchStatus =
      startTime && endTime && getMatchStatus(startTime, endTime)
    return (
      <View key={index} style={styles.trendingImageContainer} >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.container}
          onPress={onPressHandler}
        >
          <ImageWithDefault
            style={styles.trendingImage}
            imageUrl={url}
            defaultImage={Images.defaultImageBanner}
          >
            <LinearGradient
              // using 'locations' as a workaround - 'start', 'end' attributes not working
              locations={[0, 0.72, 1]}
              colors={[
                colors.transparent,
                colors.transparent,
                colors.blackPrimary
              ]}
              style={styles.linearGradient}
            />
          </ImageWithDefault>
          <View style={styles.titleContainer}>
            <View style={styles.badgeContainer}>
              {matchStatus && <Badge i18nKey={matchStatus} />}
            </View>
          </View>
        </TouchableOpacity>
        {!isNull(item.copyright_landscape) &&
          !isUndefined(item.copyright_landscape) && (
            <CopyRight
              addedStyle={styles.copyRightText}
              text={item.copyright_landscape}
            />
          )}
      </View>
    )
  }
  render () {
    const { items } = this.props
    const sortedItems = [...items].sort((_, i) =>
      this._isProvidedByPizzaApp(i)
    )
    const trendingSection = (
      <Swiper
        activeDotColor={colors.redPrimary}
        activeDotStyle={styles.activeDotStyle}
        autoplay
        autoplayTimeout={3.5}
        dotColor={colors.whitePrimary}
        dotStyle={styles.dotStyle}
        height={containerHeight}
        paginationStyle={styles.paginationStyle}
        removeClippedSubviews
      >
        {sortedItems.map(this._renderItem)}
      </Swiper>
    )
    return <View>{!isEmpty(items) && trendingSection}</View>
  }
}

export default TrendingNow
