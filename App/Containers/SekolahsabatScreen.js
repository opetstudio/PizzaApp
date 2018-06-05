import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { connect } from 'react-redux'
import {
  Container,
  Content,
  Button
} from 'native-base'
import _ from 'lodash'
import HeaderMenu from '../Components/HeaderMenu'
import PaginationList from '../Components/PaginationList'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import SsdewasaActions, {SsdewasaSelectors} from '../Redux/SsdewasaRedux'

// redux
import PopupActions, { reducer, INITIAL_STATE } from '../Redux/PopupRedux'

// Styles
import styles from './Styles/SekolahsabatScreenStyle'

const labelScreen = 'Sekolah Sabat'

class SekolahsabatScreen extends Component {
  constructor (props) {
    super(props)
    this._handleRefresh = this._handleRefresh.bind(this)
  }
  componentWillMount () {
    this.props.ssdewasaRequest({ newerModifiedon: this.props.maxModifiedon })
  }
  _handleRefresh () {
    this.props.ssdewasaRequest({ newerModifiedon: this.props.maxModifiedon })
  }
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
      <View style={{flex:1}}>
        <HeaderMenu
          hasHamburger
          hasSearch
          navigation={this.props.navigation}
          title={labelScreen}
        />
        {/* <Content> */}
          {/* <Button
            onPress={() => this.showPopup()}
            success
            full
          >
            <Text>Menu</Text>
          </Button> */}
          <PaginationList
            data={this.props.allDataArr}
            firstText={'title'}
            secondText={'title'}
            rightText={'tanggal'}
            itemOnPress={(v) => {
              // console.log('[SekolahsabatScreen] ====>>>>>>onPress')
              // alert(item.title)
              const listPelajaran = _.orderBy(_.filter(
                this.props.allDataSsdewasaArr,
                { pelajaranke: v.pelajaranke, triwulanke: v.triwulanke, year: v.year }
                ), ['tanggal'], ['asc'])
              this.props.navigation.navigate('DetailContentDeckSwiperScreen', {title: 'Sekolah Sabat', alldata: listPelajaran})
            }}
            handleRefresh={this._handleRefresh}
          />
        {/* </Content> */}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allDataSsdewasaArr: SsdewasaSelectors.getAllDataArr(state.ssdewasa),
    allDataArr: SsdewasaSelectors.getAllLessons(state.ssdewasa),
    maxModifiedon: SsdewasaSelectors.getMaxModifiedon(state.ssdewasa)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    popupShow: (popupMessage) => dispatch(PopupActions.popupShow(popupMessage)),
    ssdewasaRequest: (query) => dispatch(SsdewasaActions.ssdewasaRequest(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SekolahsabatScreen)
