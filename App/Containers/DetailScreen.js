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

import DetailContent from '../Components/DetailContent'

// Styles
import styles from './Styles/DetailScreenStyle'

class DetailScreen extends Component {
  render () {
    const { navigation } = this.props
    const params = path(['state', 'params'], navigation) || {}
    const title = params['title'] || 'NO-TITLE'
    const tanggal = params['tanggal'] || 'NO-TITLE'
    const htmlContent = params['isi_html'] || 'NO-TITLE'

    // console.log('[DetailScreen] props', this.props)
    return (
      <Container>
        <HeaderMenu
          hasBack
          navigation={this.props.navigation}
          title={'Detail'}
        />
        <Content>
          <DetailContent
            title={title}
            date={tanggal}
            htmlContent={htmlContent}
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
