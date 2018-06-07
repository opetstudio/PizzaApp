import React, { Component } from 'react'
import { Text, View } from 'react-native'
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

import RenpagiActions, {RenpagiSelectors} from '../Redux/RenpagiRedux'
import AdsBanner from '../Components/AdsBanner'

// Styles
import styles from './Styles/RenunganpagiScreenStyle'

const labelScreen = 'Renungan'

class RenunganpagiScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this._handleRefresh = this._handleRefresh.bind(this)
  }
  componentWillMount () {
    this.props.renpagiRequest({ newerModifiedon: this.props.maxModifiedon })
  }
  _handleRefresh () {
    this.props.renpagiRequest({ newerModifiedon: this.props.maxModifiedon })
  }
  render () {
    console.log('[RenunganpagiScreen] props', this.props)
    return (
      <View style={{flex: 1}}>
        <HeaderMenu
          hasHamburger
          hasSearch
          navigation={this.props.navigation}
          title={labelScreen}
        />
        {/* <Content> */}
        <PaginationList
          data={this.props.allDataArr}
          firstText={'title'}
          secondText={''}
          rightText={'tanggal'}
          itemOnPress={(item) => {
            // alert(item.title)
            this.props.navigation.navigate('DetailScreen', {title: 'Renungan Pagi', item})
          }}
          handleRefresh={this._handleRefresh}
          isLoading={this.props.fetching}
          />
        <AdsBanner />
        {/* </Content> */}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('====>', state)
  return {
    allDataArr: RenpagiSelectors.getAllDataArr(state.renpagi),
    fetching: RenpagiSelectors.getFetching(state.renpagi),
    maxModifiedon: RenpagiSelectors.getMaxModifiedon(state.renpagi)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renpagiRequest: (query) => dispatch(RenpagiActions.renpagiRequest(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenunganpagiScreen)
