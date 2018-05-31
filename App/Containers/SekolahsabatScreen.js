import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import {
  Container,
  Content,
  Button
} from 'native-base'
import HeaderMenu from '../Components/HeaderMenu'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// redux
import PopupActions, { reducer, INITIAL_STATE } from '../Redux/PopupRedux';

// Styles
import styles from './Styles/SekolahsabatScreenStyle'

const labelScreen = 'Sekolah Sabat'

class SekolahsabatScreen extends Component {
  showPopup = () => {
    this.props.popupShow({
      title: 'tes title adsf asdf asdf',
      body: {template: 'bodyyy'},
      actions: [
        { name: 'Cancel', handler: this.props.popupHide },
        { name: 'Submit', handler: this.props.popupHide },
       
      ],
      imageSource: null,
      imageBody: null,
    });
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
            onPress={() => this.showPopup()}
            success
            full
          >
            <Text>Menu</Text>
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
    popupShow: (popupMessage) => dispatch(PopupActions.popupShow(popupMessage)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SekolahsabatScreen)
