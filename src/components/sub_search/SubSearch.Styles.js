import { StyleSheet, Platform, Dimensions } from 'react-native'
const hasNotch = Platform.OS === 'ios' && Dimensions.get('window').height >= 812

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
    paddingVertical: hasNotch ? 15 : 0,
    borderRadius: 6,
    marginHorizontal: 15,
    backgroundColor: 'white', 
    shadowColor: 'black',
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
    color: 'dimgray',
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
  itemContainer: {
    marginBottom: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    paddingBottom: 5,
  },
  subheader: {
    paddingBottom: 5,
    fontSize: 14,
    color: 'dimgray',
  },
  searchButton: {
    height: 40,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5000,
    right: 5,
    top: 150,
    bottom: 30,
    marginBottom: 10,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: 'white', 
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  viewButtonText: {
    color: 'dimgray',
    fontSize: 16,
  },
})
