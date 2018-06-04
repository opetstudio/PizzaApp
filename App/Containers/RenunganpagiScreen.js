import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import {
  Container,
  Content,
  Button
} from 'native-base'
import HeaderMenu from '../Components/HeaderMenu'
import PaginationList from '../Components/PaginationList'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import {RenpagiSelectors} from '../Redux/RenpagiRedux'

// Styles
import styles from './Styles/RenunganpagiScreenStyle'

const labelScreen = 'Renungan'

class RenunganpagiScreen extends Component {
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
          <PaginationList
            data={this.props.allDataArr}
            firstText={'title'}
            secondText={'title'}
            rightText={'tanggal'}
            itemOnPress={(item) => {
              // alert(item.title)
              this.props.navigation.navigate('DetailScreen', item)
            }}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('====>', state)
  return {
    allDataArr: RenpagiSelectors.getAllDataArr(state.renpagi)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenunganpagiScreen)
