import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'

import {styles} from './styles'
import HeaderMenu from '../HeaderMenu'
import HomepageContent from '../HomepageContent'

class CPDashboard extends Component {
  static propTypes = {
    onClickItem: PropTypes.func.isRequired,
    featuredData: PropTypes.array,
    carousalData: PropTypes.array,
    wcmsUrl: PropTypes.string,
    locale: PropTypes.string,
    providerConfig: PropTypes.array,
    categoriesConfig: PropTypes.array,
    genresConfig: PropTypes.array,
    navigation: PropTypes.object,
    onClickMoreCategory: PropTypes.func.isRequired,
    onClickMoreGenre: PropTypes.func.isRequired
  }
  static defaultProps = {
    noTitle: false,
    featuredData: [],
    carousalData: [],
    wcmsUrl: '',
    providerConfig: []
  }
  render () {
    const {
        carousalData,
        categoriesConfig,
        // error,
        // errorForYou,
        featuredData,
        // forYou,
        genresConfig,
        // isLoading,
        // isLoadingForYou,
        locale,
        // loggedInStatus,
        navigation,
        onClickMoreCategory,
        onClickMoreGenre,
        onClickItem,
        providerConfig,
        // showPopup,
        wcmsUrl
      } = this.props

    const header = (
      <HeaderMenu
        isHomePage
        // hasHamburger
        // hasSearch
        navigation={navigation}
        title={'IPH-Online'}
        />
      )
    return (
      <View style={styles.container}>
        {header}
        <HomepageContent
          carousalData={carousalData}
          categoriesConfig={categoriesConfig}
            // errorForYou={errorForYou}
          featuredData={featuredData}
            // forYou={forYou}
          genresConfigList={genresConfig}
          locale={locale}
            // loggedInStatus={loggedInStatus}
            // navigation={navigation}
          onClickItem={onClickItem}
          onClickMoreCategory={onClickMoreCategory}
          onClickMoreGenre={onClickMoreGenre}
          providers={providerConfig}
            // showPopup={showPopup}
          wcmsUrl={wcmsUrl}
            // noSegmentedControl
          />
      </View>
    )
  }
}

export default CPDashboard
