import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../support/constants'
const { height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    elevation: 5,
    margin: 20,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  title: { 
    color: Colors.grey,
    fontSize: 24,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: Colors.grey,
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 5,
  },
  priceText: {
    marginRight: 10,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 10, 
  },
  ratingText: {
    color: Colors.grey,
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  mapContainer: {
    flex: 1,
    width: '100%',
    height,
  }
})