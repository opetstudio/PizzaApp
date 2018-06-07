import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Image, View, ScrollView, ImageBackground} from 'react-native';
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Thumbnail
} from 'native-base';
import styles from './Styles/SideDrawerStyle'
import { Images } from '../Themes'
import DrawerHeader from '../Containers/DrawerHeader'
import DrawerFooter from '../Containers/DrawerFooter'
import StyledText from '../Components/StyledText'

const drawerCover = Images.drawerCover
const drawerImage = Images.drawerImage
const renunganPagiIcon = Images.renunganPagiIcon
const sekolahsabatIcon = Images.sekolahsabatIcon
const menufacesIcon = Images.menufaces
const datas = [
  {
    name: 'Home',
    route: 'HomeScreen',
    icon: 'home',
    bg: '#C5F442',
    fontColor: '#00bfff'
  },
  {
    name: 'Renungan Pagi',
    route: 'RenunganpagiScreen',
    icon: 'heart',
    bg: '#C5F442',
    fontColor: '#00bfff',
    iconPicture: renunganPagiIcon
  },
  {
    name: 'Sekolah sabat',
    route: 'SekolahsabatScreen',
    icon: 'phone-portrait',
    bg: '#477EEA',
    // types: "10",
    iconPicture: sekolahsabatIcon
  },
  {
    name: 'Tentang App',
    route: 'AboutAppScreen',
    icon: 'phone-portrait',
    bg: '#DA4437',
    iconPicture: menufacesIcon
    // types: "4"
  },
];

export default class SideDrawer extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render () {
    console.log('[Sidedrawer] props', this.props)
    return (
      <ImageBackground
        style={styles.container}
        source={Images.bg}
      >
        <View
          style={{ flex: 1 }}
        >
          <DrawerHeader />
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContentContainer}
          >
            <View style={styles.contentView}>
              <List
                dataArray={datas}
                renderRow={data =>
                  <ListItem
                    button
                    noBorder
                    onPress={() => this.props.navigation.navigate(data.route)}
                  >
                    <Left>
                      {data.iconPicture &&
                        <Thumbnail source={data.iconPicture} small square />
                      }
                      {!data.iconPicture && <Icon
                          active
                          name={data.icon}
                          style={{ color: data.fontColor || '#777', fontSize: 26, width: 30 }}
                          type="FontAwesome" />
                      }
                      {/* <StyledText
                        i18nKey={data.name}
                        // textStyle='h11LtGreyS'
                        addedStyle={styles.labelText}
                      /> */}
                      <Text style={styles.text}>
                        {data.name}
                      </Text>
                    </Left>
                    {data.types &&
                      <Right style={{ flex: 1 }}>
                        <Badge
                          style={{
                            borderRadius: 3,
                            height: 25,
                            width: 72,
                            backgroundColor: data.bg
                          }}
                        >
                          <Text
                            style={styles.badgeText}
                          >{`${data.types} Types`}</Text>
                        </Badge>
                      </Right>}
                  </ListItem>}
              />
            </View>
          </ScrollView>
          <DrawerFooter
            navigation={this.props.navigation}
          />
        </View>
      </ImageBackground>
    )
  }
}
