import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

// const inputHeight = 60
const tabMeasurement = 40

export default StyleSheet.create({
  container: {
    marginBottom: 15,
    borderRadius: 3

  },
  buttonWrap: {
    alignItems: 'center',
    borderRadius: 3,
    flexDirection: 'row',
    height: tabMeasurement,
    justifyContent: 'center'
  },
  icon: {
    position: 'absolute',
    left: 0,
    height: tabMeasurement,
    width: tabMeasurement
  },
  partition: {
    position: 'absolute',
    left: tabMeasurement,
    width: 1,
    backgroundColor: Colors.darkNavyBluePrimaryOpacity2,
    height: tabMeasurement
  },
  label: {
    alignSelf: 'center'
  }
})
