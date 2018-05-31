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
import styles from './Styles/DetailScreenStyle'

class DetailScreen extends Component {
  render () {
    return (
      <Container>
        <HeaderMenu
          hasBack
          navigation={this.props.navigation}
          title={'Detail'}
        />
        <Content>
          <ScrollView style={styles.container}>
            <KeyboardAvoidingView behavior='position'>
              <Text>Detail Screen</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
