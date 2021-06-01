import React, { useState } from "react"
import { useSelector } from 'react-redux'
import MapView, { Marker  } from "react-native-maps"
import styles from './MapScreen.Styles'

const MapScreen = () => {
  const { currentLocation, currentItem } = useSelector(state => state).SearchReducer
  const [region, setRegion] = useState({
    latitude: currentLocation.lat,
    longitude: currentLocation.long,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  })
  const itemCoordinates = {
    latitude: currentItem.coordinates.latitude,
    longitude: currentItem.coordinates.longitude
  }

  return (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: currentItem.coordinates.latitude,
        longitude: currentItem.coordinates.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
    >
      <Marker
        coordinate={itemCoordinates}
        title={currentItem.name}
        description={currentItem.categories[0].title}
        pinColor='green'
      />
    </MapView>
  )
}

export default MapScreen