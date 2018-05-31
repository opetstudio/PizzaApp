import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, FlatList } from 'react-native'
import { connect } from 'react-redux'
import {
  Container,
  Content,
  Button
} from 'native-base'
import HeaderMenu from '../Components/HeaderMenu'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RenunganpagiScreenStyle'

const labelScreen = 'Renungan'

class RenunganpagiScreen extends Component {
  _renderList() {
    
  }
  render () {
    return (
      <Container>
        <HeaderMenu
          hasHamburger
          hasSearch
          navigation={this.props.navigation}
          title={labelScreen}
        />
        <Content>
          <Button
            onPress={() => this.props.navigation.navigate('DetailScreen')}
            success
            full
          >
            <Text>goto detail</Text>
          </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(RenunganpagiScreen)