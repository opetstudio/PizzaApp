import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Image, Platform } from 'react-native'
import { Container, Header, Button, Content, ActionSheet, Text, Body, Left, Right, Title, Icon, Thumbnail } from "native-base"
import styles from './Styles/HeaderMenuStyle'
import { Images, Colors, Metrics } from '../Themes'
import I18n from '../I18n'
import StyledText from './StyledText'

export default class HeaderMenu extends Component {
  // // Prop type warnings
  static propTypes = {
    ghostSearch: PropTypes.bool,
    hasBack: PropTypes.bool,
    hasClose: PropTypes.bool,
    hasHamburger: PropTypes.bool,
    hasHome: PropTypes.bool,
    hasSearch: PropTypes.bool,
    navigation: PropTypes.object,
    noBackground: PropTypes.bool,
    noTitle: PropTypes.bool,
    title: PropTypes.string,
  }
  //
  // // Defaults for props
  static defaultProps = {
    noTitle: false
  }

  render () {
    const textMessage = I18n.t
    const {
      ghostSearch,
      hasHamburger,
      hasBack,
      hasHome,
      hasSearch,
      hasClose,
      navigation,
      noBackground,
      noTitle,
      title,
    } = this.props;
    const goToHome = () => navigation.navigate('Browse');
    const toggleDrawer = () => navigation.navigate('DrawerOpen');
    const goBack = () => navigation.goBack();
    const goToSearch = () => navigation.navigate('Search');
    const goToClose = () => navigation.navigate('Menu');
    return (
      <Header
        style={{ backgroundColor: Colors.colorPrimary }}
        androidStatusBarColor={Colors.colorPrimaryDark}
        iosBarStyle="light-content"
      >
          {hasHamburger && (
            <Left>
              <Button
                transparent
                onPress={toggleDrawer}
              >
                {Platform.OS === 'ios' || Platform.OS === 'android' ? <Thumbnail source={Images.menufaces} small /> : <Icon name="ios-menu" />}
              </Button>
            </Left>
          )}
          {hasBack && (
            <Left>
              <Button transparent onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" style={{ color: "#FFF" }} />
              </Button>
            </Left>
          )}
          
          <Body>
            {!noTitle && (
              <Title style={{ color: "#FFF" }}>{title ? textMessage(title) : 'JemaatApp'}</Title>
            )}
          </Body>
          <Right />
        </Header>
    );
  }
}
