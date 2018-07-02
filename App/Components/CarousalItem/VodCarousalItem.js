import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Badge from '../Badge'
import { styles } from './styles'
import CarousalItem from './Base'

const propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  locale: PropTypes.string,
  onPress: PropTypes.func,
  orientation: PropTypes.string,
  provider: PropTypes.object,
  wcmsUrl: PropTypes.string
}

export default class VodCarousalItem extends PureComponent {
  render () {
    const {
      orientation,
      item,
      locale,
      onPress,
      wcmsUrl,
      provider
    } = this.props
    const isLandscape = orientation === 'landscape'

    return (
      <CarousalItem
        imageStyle={isLandscape ? styles.landscapeStyle : styles.thumbnailStyle}
        innerStyle={isLandscape ? styles.landscapeStyle : styles.thumbnailStyle}
        item={item}
        itemStyle={isLandscape ? styles.landscapeItem : styles.itemWidth}
        onPress={onPress}
        orientation={orientation}
        title={item.title}
        wcmsUrl={wcmsUrl}
        provider={provider}
      >
        <Badge
          i18nKey='free'
          hidden={!(item.free === 1)}
          locale={locale}
          textStyleName='h13MedRedP'
        />
      </CarousalItem>
    )
  }
}

VodCarousalItem.propTypes = propTypes
