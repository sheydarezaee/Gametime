import React from 'react'
import { useSelector } from 'react-redux'
import { Rating } from 'react-native-ratings';
import { View, ScrollView, StatusBar, Text, Dimensions, Image } from 'react-native'
import styles from './DetailsItemScreen.Styles'
import MapScreen from '../../components/map/MapScreen'

const DetailsItemScreen = () => {
  const { currentItem } = useSelector(state => state).SearchReducer

  const photo = { uri: currentItem.photos.length > 0 && currentItem.photos[0]}
  const category = currentItem.categories.length > 0 && currentItem.categories[0].title
  const isOpen = currentItem.hours.length > 0 && currentItem.hours[0].is_open_now
  const price = currentItem.price !== null && currentItem.price
  const phone = phone !== null && currentItem.phone
  const { rating, review_count } = currentItem

  const { address1, city, state, country } = Object.keys(currentItem.location).length !== 0 && currentItem.location
  const address = address1 !== '' ? `${address1}, ${city}, ${state} ${country}` : `${city}, ${state} ${country}`
  
  return (
    <ScrollView 
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.imageWrapper}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={photo}
          resizeMethod="resize"
        />
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.rating} pointerEvents="none">
          <Rating
            ratingCount={5}
            startingValue={rating}
            imageSize={20}
            isDisabled
          />
          <Text style={styles.ratingText}>{review_count}</Text>
        </View>
        <Text style={styles.title}>{ currentItem.name }</Text>
        <View style={styles.categoryContainer}>
          {currentItem.price !== null && <Text style={[styles.text, styles.priceText]}>{ price }</Text>}
          <Text style={styles.text}>{ category }</Text>
        </View>
        {isOpen && <Text style={styles.text}>Open now</Text>}
        <Text style={styles.text}>{ `${address}  ${phone}` }</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapScreen />
      </View> 
    </ScrollView>
  )
}

export default DetailsItemScreen
