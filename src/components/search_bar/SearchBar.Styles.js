import { StyleSheet, Platform, Dimensions } from 'react-native'
const hasNotch = Platform.OS === 'ios' && Dimensions.get('window').height >= 812

export default StyleSheet.create({
  searchButtonContainer: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: hasNotch ? 15 : 0,
    borderRadius: 6,
    marginHorizontal: 15,
    backgroundColor: 'white', 
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  background: {
    backgroundColor: '#d6eef8',
    height:45,
    borderRadius: 5,
    marginHorizontal: 12,
    flexDirection: 'row',
    marginTop: 8,
    padding: 5
  },
  inputStyle: {
    flex: 1,
    fontSize: 14,
    marginLeft: 10,
  },
  iconStyle:{
    fontSize: 35,
    alignSelf: "center"
  }
})
