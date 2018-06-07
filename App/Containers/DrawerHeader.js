import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import {SessionSelectors} from '../Redux/SessionRedux'

// Styles
import StyledText from '../Components/StyledText'
import styles from './Styles/DrawerHeaderStyle'
import {Images} from '../Themes'

const drawerCover = Images.drawerCover
const drawerImage = Images.drawerImage

class DrawerHeader extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    console.log('[DrawerHeader] render props', this.props)
    return (
      <View style={styles.drawerCoverWrapper}>
        <Image source={drawerCover} style={styles.drawerCover} />
        {
          this.props.getCurrentUser &&
          <View style={styles.drawerImageWrapper}>
            <View style={styles.profileImageView}>
              <Image
                style={styles.profileImage}
                source={{ uri: this.props.getCurrentUser.photoURL + '?type=small' }}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.profileText1}> {this.props.getCurrentUser.displayName} </Text>
            </View>
            {/* <Image square style={styles.drawerImage} source={{ uri: this.props.getCurrentUser.photoURL + '?type=small' }} /> */}
          </View>
        }
        {
          !this.props.getCurrentUser &&
          <Image square style={styles.drawerImage} source={drawerImage} />
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    getCurrentUser: SessionSelectors.getCurrentUser(state.session)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerHeader)
