import React, { Component } from 'react'
import { ScrollView, View, KeyboardAvoidingView } from 'react-native'
import {
  Container,
  Content
} from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import HeaderMenu from '../Components/HeaderMenu'
import StyledView from '../Components/StyledView'
import LoginOption from './LoginOption'
// Styles
import styles from './Styles/LoginMethodScreenStyle'

class LoginMethodScreen extends Component {
  render () {
    return (
      <StyledView isLoading={false} style={styles.zeroHorizontalPadding}>
        <HeaderMenu
          hasBack noTitle noBackground
          navigation={this.props.navigation}
        />
        <View style={styles.container}>
          <LoginOption />
        </View>
      </StyledView>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginMethodScreen)
