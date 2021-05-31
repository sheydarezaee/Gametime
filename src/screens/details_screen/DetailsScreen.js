import React, { useEffect, useState } from 'react'
import { View, ScrollView, StatusBar, Text, Dimensions } from 'react-native'
import styles from './DetailsScreen.Styles'
import Map from '../../components/map/Map'

const {height} = Dimensions.get('window')

const DetailsScreen = () => {
  return (
    <ScrollView 
      contentInsetAdjustmentBehavior="automatic"
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.searchButtonContainer}>
        <Text>Items Details</Text>
      </View>
      <View style={{ flex: 1, width: '100%', height }}>
        <Map />
      </View> 
    </ScrollView>
  )
}

export default DetailsScreen
