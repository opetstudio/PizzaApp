import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, FlatList, RefreshControl, Platform, ScrollView } from 'react-native'
import {
  ListItem, Body, Text, Right
} from 'native-base'
import moment from 'moment'
import _ from 'lodash'
import styles from './styles'

import StyledRow1 from '../StyledRow1'

export default class PaginationList extends Component {
  // // Prop type warnings
  static propTypes = {
    // numberOfLines: PropTypes.number,
    renderRow: PropTypes.func.isRequired,
    grid: PropTypes.bool,
    handleRefresh: PropTypes.func,
    header: PropTypes.func,
    isLoading: PropTypes.bool
  }
  //
  // // Defaults for props
  static defaultProps = {
    isLoading: false,
    header: () => {},
    handleRefresh: () => {}
  }

  constructor (props) {
    super(props)
    this.state = {}
    this._renderRow = this._renderRow.bind(this)
    this._renderList = this._renderList.bind(this)
    this._setDataSource = this._setDataSource.bind(this)
    this._getPaginatedItems = this._getPaginatedItems.bind(this)
    this._handleRefresh = this._handleRefresh.bind(this)
    this._nextOffset = this._nextOffset.bind(this)
    this._renderGridView = this._renderGridView.bind(this)
    this._renderListView = this._renderListView.bind(this)
    this._renderHeaderList = this._renderHeaderList.bind(this)
  }
  componentWillMount () {
    this.state.page = 1
    this.state.seed = 1
    this.state.per_page = 20
    this.state.allDataArr = this.props.data || []
    this.state.currentListAllArr = []

    this._setDataSource()
    // set currentListAllArr
    this._getPaginatedItems()
  }
  componentWillReceiveProps (nextProps) {
    this.state.allDataArr = nextProps.data

    this._setDataSource()
    // set currentListAllArr
    this._getPaginatedItems()
  }
  _setDataSource () {
    this.state.listAllMessages = this.state.allDataArr
    this.state.totalItems = this.state.listAllMessages.length
  }
  _getPaginatedItems () {
    const offset = (this.state.page - 1) * this.state.per_page
    const paginatedItems = _.slice(this.state.listAllMessages, 0, offset + this.state.per_page)
    this.setState({
      currentListAllArr: paginatedItems
    })
  }
  _nextOffset () {
    if (this.state.totalItems / this.state.per_page < this.state.page) return false
    this.state.page += 1
    this._getPaginatedItems()
    return true
  }
  _renderRow (p) {
    const { item, i } = p
    let styleRow = {}
    if (this.props.grid) {
      styleRow = styles.gridItem
    } else {
      styleRow = styles.listItem
    }
    return (
      <View
        key={i}
        style={styleRow}
      >
        {this.props.renderRow(item)}
      </View>
    )
    // if (this.props.renderRow) return this.props.renderRow(item)

    // const date = moment(new Date(item[this.props.rightText])).format('DD-MM/YY')
    // const avatar = item[this.props.avatar]
    // return (
    //   <StyledRow1
    //     firstText={item[this.props.firstText]}
    //     secondText={item[this.props.secondText]}
    //     rightText={date}
    //     itemOnPress={() => this.props.itemOnPress(item)}
    //     avatar={avatar}
    //     numberOfLines={this.props.numberOfLines}
    //   />
    // )
  }
  _handleRefresh () {
    this.props.handleRefresh()
  }
  _bannerError (p1, p2) {
  }
  _renderHeaderList () {
    return this.props.header()
  }
  _renderGridView () {
    const rows = this.state.currentListAllArr.map((item, i) => (
      this._renderRow({item, i})
    ))
    return (
      <ScrollView
        // showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={() => {
          this._nextOffset()
        }}
        refreshControl={
          <RefreshControl
            refreshing={this.props.isLoading}
            onRefresh={this._handleRefresh}
          />
        }
      >
        <View style={{flex: 1}}>
          {this._renderHeaderList()}
          <View
            style={styles.gridWrapper}
          >
            {rows}
          </View>
        </View>
      </ScrollView>
    )
  }
  _renderListView () {
    return (
      <FlatList
        data={this.state.currentListAllArr || []}
        renderItem={this._renderRow}
        keyExtractor={(item = {}) => item._id}
        initialNumToRender={3}
        onMomentumScrollEnd={() => {
          this._nextOffset()
        }}
        // refreshControl={
        //   <RefreshControl
        //    refreshing={this.state.isLoading}
        //    onRefresh={this._handleRefresh}
        //   />
        // }
        refreshing={this.props.isLoading}
        onRefresh={this._handleRefresh}
      />
    )
  }
  _renderList () {
    // if (this.state.isLoading) return <View><Text>loading</Text></View>
    return (
      <View style={{flex: 1}}>
        {this.props.grid && this._renderGridView()}
        {!this.props.grid && this._renderListView()}
      </View>
    )
  }
  render () {
    return this._renderList()
  }
}
