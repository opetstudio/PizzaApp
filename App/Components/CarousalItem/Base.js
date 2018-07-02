import React, { PureComponent } from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'
import StyledText from '../StyledText'
import { styles } from './styles'
import ImageWithDefault from '../ImageWithDefault'
import StyledTouchableOpacity from '../StyledTouchableOpacity'
import { generateImageURL } from '../../Lib/helper/imageUrlGenerator'

import {Images} from '../../Themes'

const propTypes = {
  badge: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  disabled: PropTypes.bool,
  children: PropTypes.node,
  imageStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array
  ]),
  imageUrl: PropTypes.string,
  innerStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array
  ]),
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  itemStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array
  ]),
  onPress: PropTypes.func,
  orientation: PropTypes.string,
  provider: PropTypes.object,
  title: PropTypes.string,
  wcmsUrl: PropTypes.string
}

const defaultProps = {
  title: '',
  onPress: () => {}
}

const renderTitle = text => {
  if (!text) {
    return null
  }
  return (
    <StyledText
      textStyle='h5MedWhiteP'
      addedStyle={styles.itemTitle}
      lines={2}
      ellipse='tail'
    >
      {text}
    </StyledText>
  )
}

const getDefaultImage = orientation => {
  const landscapeDefault = Images.defaultImageBannerLandscape
  const portraitDefault = Images.defaultImageCarousal
  return orientation === 'landscape' ? landscapeDefault : portraitDefault
}

const getImageUrl = (item, orientation, wcmsUrl) => {
  const images = (item && item.images) || ''
  const imageObj = generateImageURL(images, wcmsUrl, 'carousel', orientation)

  if (imageObj && imageObj.url) {
    return imageObj.url
  }

  return ''
}

const renderProviderLogo = (provider, wcmsUrl) => {
  if (!provider) {
    return null
  }
  const images = (provider && provider.images) || ''
  const imageObj = generateImageURL(images, wcmsUrl, 'images')

  if (!imageObj.url) {
    return null
  }
  return <Image source={{ uri: imageObj.url }} style={styles.providerLogo} />
}

export const GhostItem = ({ isCircle, circleSize, addedStyle }) => {
  if (isCircle) {
    return (
      <View style={[{ width: circleSize, height: circleSize }, addedStyle]} />
    )
  } else {
    return <View style={[styles.itemWidth, addedStyle]} />
  }
}

export default class CarousalItem extends PureComponent {
  render () {
    const {
      badge,
      disabled = false,
      imageStyle,
      innerStyle,
      item,
      itemStyle,
      onPress,
      orientation,
      title,
      wcmsUrl,
      provider,
      children
    } = this.props

    const _onClick = () => onPress(item.id || item.contentId)

    return (
      <View style={itemStyle}>
        <StyledTouchableOpacity disabled={disabled} onPress={_onClick}>
          <ImageWithDefault
            style={innerStyle}
            imageStyle={imageStyle}
            imageUrl={getImageUrl(item, orientation, wcmsUrl)}
            defaultImage={getDefaultImage(orientation)}
          >
            <View style={styles.badgeContainer}>{badge}</View>
            {renderProviderLogo(provider, wcmsUrl)}
          </ImageWithDefault>
          {renderTitle(title)}
          {children}
        </StyledTouchableOpacity>
      </View>
    )
  }
}

CarousalItem.propTypes = propTypes
CarousalItem.defaultProps = defaultProps
