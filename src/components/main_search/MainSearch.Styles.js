import { StyleSheet, Platform} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default StyleSheet.create({
  topImageContainer: {
    height: 250, 
    width: '100%',
  }, 
  topImage: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  searchButtonContainer: {
    flexDirection: 'row',
    flex: 1,
    marginTop: -25,
    borderRadius: 6,
    padding: 20,
    marginHorizontal: 20,
    backgroundColor: Colors.white, 
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 5500,
  }, 
  searchIcon: {
    height: 25,
    width: 25,
    marginRight: 20,
  },
  searchText: {
    color: 'grey',
    fontSize: 14, 
    fontFamily: Platform.OS === 'android' ? 'Roboto' : undefined
  },
})
