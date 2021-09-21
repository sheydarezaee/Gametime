import { StyleSheet, Platform, Dimensions } from 'react-native'
import { Colors } from '../../support/constants'
const hasNotch = Platform.OS === 'ios' && Dimensions.get('window').height >= 812

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.grey05,
  },
  itemContainer: {
    marginVertical: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.white,
    paddingVertical: 10,
    paddingLeft: 5,
    backgroundColor: Colors.grey06,
  },
  listContainer: { 
    marginHorizontal: 20,
    marginTop: 20 
  },
  separator: {
    borderWidth: 0.7,
    borderColor: Colors.grey02, 
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  eventInfoContainer: {
    flexDirection: 'column',
  },
  eventInfo: {
    marginTop: 25,
  },
  eventImageContainer: {
    paddingVertical: 10,
    marginRight: 20,
  },
  eventImage: {
    width: 80, 
    height: 80, 
    borderRadius: 50,
  },
  text: {
    fontSize: 16,
    color: Colors.white,
    marginRight: 25,
    paddingBottom: 5,
  },
  subtext: {
    fontSize: 12,
    color: Colors.grey02,
    paddingBottom: 5,
  }
})
