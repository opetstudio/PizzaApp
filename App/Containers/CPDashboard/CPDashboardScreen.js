import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { get } from 'lodash'

import CPDashboard from '../../Components/CPDashboard'

const mapStateToProps = (state, ownProps) => {
  return {
    locale: 'id',
    wcmsUrl: 'http://hooq.com/image',
    featuredData: [
      {
        id: 1,
        provider: 'PizzaApp'
      },
      {
        id: 2,
        provider: 'PizzaApp'
      },
      {
        id: 3,
        provider: 'PizzaApp'
      },
      {
        id: 4,
        provider: 'PizzaApp'
      }
    ],
    carousalData: [
      {
        resourceId: 'resourceId1',
        i18nkey: 'TITLE-CAROUSAL-BESTSELLER',
        contentItems: [
          {
            id: '1',
            title: 'title1'
          },
          {
            id: '2',
            title: 'title2'
          },
          {
            id: '3',
            title: 'title3'
          },
          {
            id: '4',
            title: 'title4'
          },
          {
            id: '5',
            title: 'title5'
          },
          {
            id: '6',
            title: 'title6'
          },
          {
            id: '7',
            title: 'title7'
          }
        ]
      },
      {
        resourceId: 'resourceId2',
        i18nkey: 'TITLE-CAROUSAL-POPULAR',
        contentItems: [
          {
            id: '1',
            title: 'title1'
          },
          {
            id: '2',
            title: 'title2'
          },
          {
            id: '3',
            title: 'title3'
          },
          {
            id: '4',
            title: 'title4'
          },
          {
            id: '5',
            title: 'title5'
          },
          {
            id: '6',
            title: 'title6'
          },
          {
            id: '7',
            title: 'title7'
          }
        ]
      }
    ],
    providerConfig: [],
    categoriesConfig: [
      {
        tid: 'resourceId1',
        i18nKey: 'CONFIG-TITLE-CATEGORY-KEY'
      },
      {
        tid: 'resourceId2',
        i18nKey: 'CONFIG-TITLE-CATEGORY-KEY'
      }
    ],
    genresConfig: [],
    navigation: ownProps.navigation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickMoreCategory: () => {},
    onClickMoreGenre: () => {},
    onClickItem: () => {}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CPDashboard)
