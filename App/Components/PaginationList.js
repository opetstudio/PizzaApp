import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, FlatList, RefreshControl } from 'react-native'
import {
  ListItem, Body, Text, Right
} from 'native-base'
import moment from 'moment'
import _ from 'lodash'
import styles from './Styles/PaginationListStyle'

export default class PaginationList extends Component {
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

  constructor (props) {
    super(props)
    this.state = {}
    this._renderRow = this._renderRow.bind(this)
    this._renderList = this._renderList.bind(this)
    this._setDataSource = this._setDataSource.bind(this)
    this._getPaginatedItems = this._getPaginatedItems.bind(this)
    this._handleRefresh = this._handleRefresh.bind(this)
    this._nextOffset = this._nextOffset.bind(this)
  }
  componentWillMount () {
    this.state.page = 1
    this.state.seed = 1
    this.state.per_page = 15
    this.state.allDataArr = this.props.data || []
    this.state.currentListAllArr = []
    this.state.isLoading = true

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
      currentListAllArr: paginatedItems,
      isLoading: false
    })
  }
  _nextOffset () {
    if (this.state.totalItems / this.state.per_page < this.state.page) return false
    this.state.page += 1
    this._getPaginatedItems()
    return true
  }
  _renderRow ({item}) {
    item = item || {}
    const date = moment(new Date(item[this.props.rightText])).format('DD-MM/YY')
    return (
      <ListItem onPress={() => this.props.itemOnPress(item)}>
        <Body>
          <Text>
            {item[this.props.firstText]}
          </Text>
          {/* <Text numberOfLines={1} note>
            {item[this.props.secondText]}
          </Text> */}
        </Body>
        <Right>
          <Text note>
            {date}
          </Text>
        </Right>
      </ListItem>
    )
  }
  _handleRefresh () {
    this.setState({
      isLoading: true
    })
    this.props.handleRefresh()
  }
  _renderList () {
    // if (this.state.isLoading) return <View><Text>loading</Text></View>
    return (
      <View
          style={{
            flex: 1,
            backgroundColor: '#FFF'
          }}
        >
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
        refreshing={this.state.isLoading}
        onRefresh={this._handleRefresh}
      />
      </View>
    )
  }
  render () {
    return this._renderList()
  }
}
