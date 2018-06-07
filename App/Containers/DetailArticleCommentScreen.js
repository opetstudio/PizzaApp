import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right
} from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import HeaderMenu from '../Components/HeaderMenu'
import PaginationList from '../Components/PaginationList'
import AdsBanner from '../Components/AdsBanner'
// Styles
import styles from './Styles/DetailArticleCommentScreenStyle'
import {Images} from '../Themes'

const pratik = Images.pratik
const sanket = Images.pratik
const megha = Images.megha
const atul = Images.atul
const saurabh = Images.saurabh
const varun = Images.varun

const datas = [
  {
    img: pratik,
    text: 'Kumar Pratik',
    note: 'Its time to build a difference . .',
    time: '2018-11-29 13:00:00'
  },
  {
    img: sanket,
    text: 'Kumar Sanket',
    note: 'One needs courage to be happy and smiling all time . . ',
    time: '2018-11-29 13:00:00'
  },
  {
    img: megha,
    text: 'Megha',
    note: 'Live a life style that matchs your vision',
    time: '2018-11-29 13:00:00'
  },
  {
    img: atul,
    text: 'Atul Ranjan',
    note: 'Failure is temporary, giving up makes it permanent',
    time: '2018-11-29 13:00:00'
  },
  {
    img: saurabh,
    text: 'Saurabh Sahu',
    note: 'The biggest risk is a missed opportunity !!',
    time: '2018-11-29 13:00:00'
  },
  {
    img: varun,
    text: 'Varun Sahu',
    note: 'Wish I had a Time machine . .',
    time: '2018-11-29 13:00:00'
  }
]

class DetailArticleCommentScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false
    }
    this._handleRefresh = this._handleRefresh.bind(this)
  }
  _handleRefresh () {
    this.setState({
      isLoading: true
    })
    setTimeout(() => { this.setState({ isLoading: false }) }, 2000)
  }
  render () {
    const {contentId} = this.props.navigation.state.params
    return (
      <Container>
        <HeaderMenu
          hasBack
          hasSearch
          navigation={this.props.navigation}
          title={'Comments'}
        />
        <Content>
          <PaginationList
            data={datas}
            firstText={'text'}
            secondText={'note'}
            rightText={'time'}
            avatar={'img'}
            itemOnPress={(item) => {
              // alert(item.title)
              // this.props.navigation.navigate('DetailScreen', {title: 'Renungan Pagi', item})
            }}
            handleRefresh={this._handleRefresh}
            isLoading={this.state.isLoading}
          />
          <AdsBanner />
          {/* <List
            dataArray={datas}
            renderRow={data =>
              <ListItem avatar>
                <Left>
                  <Thumbnail small source={data.img} />
                </Left>
                <Body>
                  <Text>
                    {data.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
                </Body>
                <Right>
                  <Text note>
                    {data.time}
                  </Text>
                </Right>
              </ListItem>}
          /> */}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailArticleCommentScreen)
