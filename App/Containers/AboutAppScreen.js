import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import {
  Container,
  Content
} from 'native-base'
import HeaderMenu from '../Components/HeaderMenu'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AboutAppScreenStyle'

const labelScreen = 'About IPH'

class AboutAppScreen extends Component {
  render () {
    return (
      <Container>
        <HeaderMenu
          // hasHamburger
          // hasSearch
          navigation={this.props.navigation}
          title={labelScreen}
        />
        <Content>
          <ScrollView style={styles.container}>
            <KeyboardAvoidingView behavior='position'>
              <Text>Tentang IPH-Online. Env: {__DEV__}</Text>
            </KeyboardAvoidingView>
          </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutAppScreen)
