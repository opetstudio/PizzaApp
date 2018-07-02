import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { find, toString } from 'lodash'
import PropTypes from 'prop-types'

import Carousel from '../Carousal'

import { generateImageURL } from '../../Lib/helper/imageUrlGenerator'
import { textMessage } from '../../Lib/helper/languageSelector'

export default class VideoCarousels extends PureComponent {
  render () {
    const {
      config,
      data,
      locale,
      onItemPress,
      onClickMoreCategory,
      onClickMoreGenre,
      providers,
      showPopup,
      wcmsUrl
    } = this.props

    return (
      <View>
        {data.map(category => {
          // const title = category.resourceId
          const title = find(config, {
            tid: toString(category.resourceId)
          })
          // const i18nTitleKey = 'TITLE-CAROUSEL'
          // const i18nTitleValue = 'Title Carousel'
          const i18nTitleKey =
            category.i18nkey || (title && title.i18nKey) || ''
          const i18nTitleValue = {
            item: title ? textMessage(title.i18nKey) : ''
          }

          const iconImage = title && title.images
          // orientation yet to be defined in the API's
          // will be used for telling if the carousel will be potrait or landscape
          const orientation = title && title.orientation
          const url =
            generateImageURL(iconImage, wcmsUrl, 'images').url || null
          const navigateToMore = () => {
            // if (category.type === 'categories') {
            //   onClickMoreCategory(category.resourceId, null, true) // show items in sibling categories
            // } else {
            //   onClickMoreGenre(category.resourceId)
            // }
          }
          // const isChannel = !!parseInt(category.circleImage)

          // if (isChannel) {
          category.displayMore = false
          // }

          return (
            <Carousel
              // circleImage={category.circleImage}
              i18nTitleInfo={i18nTitleKey}
              i18nValue={i18nTitleValue}
              // icon
              // iconImage={url}
              items={category}
              key={category.resourceId}
              locale={locale}
              onMorePress={navigateToMore}
              onPress={onItemPress}
              orientation={orientation}
              providers={providers}
              showPopup={showPopup}
              wcmsUrl={wcmsUrl}
            />
          )
        })}
      </View>
    )
  }
}

VideoCarousels.propTypes = {
  config: PropTypes.array,
  data: PropTypes.array,
  locale: PropTypes.string,
  onClickMoreCategory: PropTypes.func.isRequired,
  onClickMoreGenre: PropTypes.func.isRequired,
  onItemPress: PropTypes.func.isRequired,
  providers: PropTypes.array,
  showPopup: PropTypes.func,
  wcmsUrl: PropTypes.string
}
