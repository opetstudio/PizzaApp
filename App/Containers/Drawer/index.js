import { connect } from 'react-redux'

import Drawer from '../../Components/Drawer'

import { Images } from '../../Themes'

const renunganPagiIcon = Images.renunganPagiIcon
const sekolahsabatIcon = Images.sekolahsabatIcon
const womanhandIcon = Images.womanhandIcon
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
    name: 'Feature1',
    route: 'RenunganpagiScreen',
    icon: 'heart',
    bg: '#C5F442',
    fontColor: '#00bfff',
    iconPicture: renunganPagiIcon
  },
  {
    name: 'Feature2',
    route: 'SekolahsabatScreen',
    icon: 'phone-portrait',
    bg: '#477EEA',
      // types: "10",
    iconPicture: sekolahsabatIcon
  },
  {
    name: 'Sponsors',
    route: 'SponsorScreen',
    icon: 'phone-portrait',
    bg: '#DA4437',
    iconPicture: womanhandIcon
      // types: "4"
  },
  {
    name: 'Tentang App',
    route: 'AboutAppScreen',
    icon: 'phone-portrait',
    bg: '#DA4437',
    iconPicture: menufacesIcon
      // types: "4"
  }
]

const mapStateToProps = (state) => {
  return {
    datas
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
