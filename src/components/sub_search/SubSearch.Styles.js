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
    marginTop: 15,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginHorizontal: 15,
    backgroundColor: Colors.white, 
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
  input: {
    flex: 1,
    fontSize: 16,
    maxHeight: 250,
    minHeight: 250,
    textAlignVertical: 'top',
    paddingVertical: 10,
    height: 40,
  },
})
