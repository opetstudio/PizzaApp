import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { connect } from 'react-redux'
import {
  Container,
  Content
} from 'native-base'
import { path } from 'ramda'
import HeaderMenu from '../Components/HeaderMenu'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import DetailContent from '../Components/DetailContent'

// Styles
import styles from './Styles/DetailScreenStyle'
import AppConfig from '../Config/AppConfig'

class DetailScreen extends Component {
  // static navigationOptions = {
  //   title: 'Home'
  // };
  render () {
    const { navigation } = this.props
    // navigation.setParams({ title: 'opeeet' })
    const item = path(['state', 'params', 'item'], navigation) || {}
    const headerTitle = path(['state', 'params', 'title'], navigation)
    const title = item['title'] || 'NO-TITLE'
    const tanggal = item['tanggal'] || 'NO-TITLE'
    const htmlContent = item['isi_html'] || 'NO-TITLE'
    const contributorSpace = item['contributorSpace'] || AppConfig.contributorSpace

    // console.log('[DetailScreen] props', this.props)
    return (
      <View style={{ flex: 1 }}>
        <HeaderMenu
          hasBack
          navigation={this.props.navigation}
          title={headerTitle || 'Detail'}
        />
        {/* <Content> */}
        <DetailContent
          title={title}
          date={tanggal}
          htmlContent={htmlContent}
          contributorSpace={contributorSpace}
        />
        {/* </Content> */}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
