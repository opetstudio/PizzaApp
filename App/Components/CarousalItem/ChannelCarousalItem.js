import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import { styles } from './styles'
import CarousalItem from './Base'

import { checkContentSubscribed } from '../../Lib/helper/contentCurator'

// import {
//   getLoggedInStatus,
//   getSubscriptions
// } from 'containers/ContentDetails/selectors'

const propTypes = {
  addedStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  circleSize: PropTypes.number,
  disabled: PropTypes.bool,
  horizontalGap: PropTypes.number,
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  loggedInStatus: PropTypes.bool,
  onPress: PropTypes.func,
  provider: PropTypes.object,
  subscriptions: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  verticalGap: PropTypes.number,
  wcmsUrl: PropTypes.string
}

class ChannelCarousalItem extends Component {
  render () {
    const {
      addedStyle = {},
      circleSize,
      disabled,
      item,
      loggedInStatus,
      onPress,
      provider,
      subscriptions = [],
      wcmsUrl
    } = this.props

    const sizeStyle = circleSize
      ? {
        width: circleSize,
        height: circleSize
      }
      : {}

    const borderRadiusStyle = circleSize
      ? {
        borderRadius: circleSize / 2
      }
      : {}

    const isEntitled = checkContentSubscribed(
      subscriptions,
      provider ? provider.name : '',
      item,
      loggedInStatus
    )

    return (
      <CarousalItem
        disabled={disabled}
        item={item}
        imageStyle={[styles.circleImageStyle, sizeStyle, borderRadiusStyle]}
        innerStyle={[
          styles.circleImageInnerContainerStyle,
          sizeStyle,
          isEntitled
            ? styles.circleBackgroundEntitled
            : styles.circleBackgroundNotEntitled
        ]}
        itemStyle={[styles.circleImageContainerStyle, sizeStyle, addedStyle]}
        onPress={onPress}
        wcmsUrl={wcmsUrl}
        orientation={'landscape'}
      />
    )
  }
}

ChannelCarousalItem.propTypes = propTypes

// const mapStateToProps = createStructuredSelector({
//   loggedInStatus: getLoggedInStatus(),
//   subscriptions: getSubscriptions()
// })

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(
//   ChannelCarousalItem
// )
export default ChannelCarousalItem
