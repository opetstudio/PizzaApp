import React, { PureComponent } from 'react'
import { ScrollView, View } from 'react-native'
import {
  Text,
  Thumbnail
} from 'native-base'
import _ from 'lodash'
import PropTypes from 'prop-types'
import TrendingNow from '../TrendingNow'

import { styles } from './styles'
import {Images} from '../../Themes'
import PaginationList from '../PaginationList'
import VideoCarousels from '../VideoCarousels'

const addTab = (data, configs) => {
  _.map(data, i => {
    const config = _.find(configs, ['tid', i.resourceId])
    if (config) {
      return Object.assign(i, {
        tab: config.tab,
        circleImage: config.circleImage
      })
    }
    return i
  })
}

export default class HomepageContent extends PureComponent {
  static propTypes = {
    onClickItem: PropTypes.func.isRequired,
    featuredData: PropTypes.array,
    wcmsUrl: PropTypes.string,
    locale: PropTypes.string,
    providers: PropTypes.array,
    categoriesConfig: PropTypes.array,
    genresConfigList: PropTypes.array,
    carousalData: PropTypes.array,
    onClickMoreCategory: PropTypes.func.isRequired,
    onClickMoreGenre: PropTypes.func.isRequired
  }
  static defaultProps = {
    categoriesConfig: [],
    noTitle: false,
    featuredData: [],
    wcmsUrl: '',
    providers: [],
    genresConfigList: [],
    carousalData: []
  }
  constructor (props) {
    super(props)
    this.state = {
      drawerTooltip: 'hide'
    }
    this.navigateToContentDetailScreen = this.navigateToContentDetailScreen.bind(this)
  }
  navigateToContentDetailScreen (id) {
    this.props.onClickItem(id)
  }
  render () {
    const {
        carousalData,
        featuredData,
        wcmsUrl,
        locale,
        providers,
        categoriesConfig,
        genresConfigList,
        onClickMoreCategory,
        onClickMoreGenre
    } = this.props
    const combinedConfig = _.concat(categoriesConfig, genresConfigList)
    // addTab(carousalData, combinedConfig)
    const marketPlaceData = carousalData
    // const marketPlaceData = _.filter(carousalData, c => {
    //   return c.tab !== 'in-app'
    // })
    const bestSeller = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 1, 1, 1, 1, 1, 1]
    const marketPlaceContent = (
      <View>
        <VideoCarousels
          config={combinedConfig}
          data={marketPlaceData}
          locale={locale}
          onClickMoreCategory={onClickMoreCategory}
          onClickMoreGenre={onClickMoreGenre}
          onItemPress={this.navigateToContentDetailScreen}
          wcmsUrl={wcmsUrl}
          providers={providers}
        />
      </View>
    )
    return (
      <View style={styles.container}>
        <PaginationList
          grid
          data={bestSeller}
          renderRow={(item) => <Text>Book title</Text>}
          header={() => (
            <View><TrendingNow
              items={featuredData}
              onItemPress={this.navigateToContentDetailScreen}
              rootURL={wcmsUrl}
              locale={locale}
              providers={providers}
            />
              {marketPlaceContent}
            </View>
          )}
        />
      </View>
    )
  }
}
