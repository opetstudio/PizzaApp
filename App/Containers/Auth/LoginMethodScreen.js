import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator } from 'react-native'
import {
  Container,
  Content,
  Card,
  Icon,
  CardItem,
  Left,
  Body,
  Text
} from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import SessionActions, {SessionSelectors} from '../../Redux/SessionRedux'
import HeaderMenu from '../../Components/HeaderMenu'
import StyledView from '../../Components/StyledView'
import LoginOption from './LoginOption'
// Styles
import styles from './Styles'
import {Colors} from '../../Themes'

class LoginMethodScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {
      fetching: this.props.fetching,
      currentUser: this.props.currentUser
    }
    this.renderLoginOption = this.renderLoginOption.bind(this)
    this.renderSuccessLogin = this.renderSuccessLogin.bind(this)
  }

  componentWillMount () {
    this.props.sessionFailure()
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      fetching: nextProps.fetching,
      currentUser: nextProps.currentUser
    })
  }

  onSuccessLogin () {
    const { navigation } = this.props
    const { redirectScreen } = navigation.state.params
    // console.log('[LoginMethodScreen] props', this.props)
    navigation.goBack()
  }
  renderSuccessLogin () {
    return (
      <Card
        style={{ flex: 0, height: 300 }}
      >
        <CardItem>
          <Left>
            <Icon
              active
              name={'check-circle'}
              style={{ color: '#777', fontSize: 26, width: 30 }}
              type='FontAwesome' />
            <Body>
              <Text>Login Success</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    )
  }
  renderLoginOption () {
    return (
      <View style={{flex: 1}}>
        {
          this.props.fetching &&
          (<View style={{ justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size='large' color={Colors.colorPrimary} />
            <Text style={{ color: Colors.whitePrimary, fontSize: 24 }}>Please wait</Text></View>)
        }
        { !this.props.fetching &&
          <LoginOption />
        }
      </View>
    )
  }
  render () {
    return (
      <StyledView isLoading={false} style={styles.zeroHorizontalPadding}>
        <HeaderMenu
          hasBack noTitle noBackground
          navigation={this.props.navigation}
        />
        <View style={styles.container}>
          {!this.state.currentUser && this.renderLoginOption()}
          {this.state.currentUser && this.renderSuccessLogin()}
        </View>
      </StyledView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: SessionSelectors.getFetching(state.session),
    currentUser: SessionSelectors.getCurrentUser(state.session)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sessionFailure: () => dispatch(SessionActions.sessionFailure())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginMethodScreen)
