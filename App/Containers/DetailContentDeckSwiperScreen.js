import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import {
  Container,
  Content
} from 'native-base'
import { path } from 'ramda'
import HeaderMenu from '../Components/HeaderMenu'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import DetailContentDeckSwiper from '../Components/DetailContentDeckSwiper'

// Styles
import styles from './Styles/DetailContentDeckSwiperScreenStyle'

class DetailContentDeckSwiperScreen extends Component {
  render () {
    const { navigation } = this.props
    const params = path(['state', 'params'], navigation) || {}
    const allData = params['alldata'] || []
    // console.log('[DetailContentDeckSwiperScreen] props====>', this.props)
    return (
      <Container>
        <HeaderMenu
          hasBack
          navigation={this.props.navigation}
          title={'Detail'}
        />
        <Content>
          <DetailContentDeckSwiper
            allData={allData}
          />
        </Content>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailContentDeckSwiperScreen)
