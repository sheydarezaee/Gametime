import React, { useState } from 'react'
import { View, ScrollView, TextInput, StatusBar, FlatList, Text, Dimensions, TouchableOpacity } from 'react-native'
import { gql, useQuery } from '@apollo/client'
import styles from './SubSearch.Styles'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Map from '../map/Map'
import Loading from '../Loading'
const {height} = Dimensions.get('window')

const GET_ITEMS = gql`
    query Items($term: String!, $location: String!) {
      items (
        term: $term,
        location: $location,
        limit: 10) {
        business {
          name
          rating
          review_count
          location {
            address1
            city
            state
            country
          }
        }
      }
    }
  `

const SearchItem = ({ searchItem }) => {
  const { name, rating, review_count, location } = searchItem
  const { address1, city, state, country } = location

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.subheader}>{`rating: ${rating} - ${review_count} reviews`}</Text>
      <Text style={styles.subheader}>{`${address1}, ${city}, ${state}, ${country}`}</Text>
    </View>
  )
}

const SubSearch = () => {
  const [term, setTerm] = useState('')
  const [location, setLocation] =useState('')
  const [isMapView, setMapView] = useState(false)

  const { loading, data } = useQuery(GET_ITEMS, {
    variables: { term, location },
  })

  if (loading) {
    return <Loading />
  }

  return (
    <ScrollView 
      contentInsetAdjustmentBehavior="automatic"
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.searchButtonContainer}>
        <TextInput
          placeholder="Cleaners, movers, sushi, .. what you desire"
          value={term}
          style={styles.searchText}
          onChangeText={value => setTerm(value)}
          placeholderTextColor={Colors.grey}
        />
      </View>
      <View style={[styles.searchButtonContainer, { marginBottom: 10 }]}>
        <TextInput
          placeholder=" Current location"
          value={location}
          style={styles.searchText}
          onChangeText={value => setLocation(value)}
          placeholderTextColor={Colors.grey}
        />
      </View>
      { isMapView ? (
        <View style={{ flex: 1, width: '100%', height }}>
          <Map />
        </View> 
      ) : (
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <FlatList
            data={data.search.business}
            renderItem={({ item }) => <SearchItem searchItem={item} />}
            keyExtractor={(searchItem) => searchItem.name}
          />
        </View>
      )}
      <TouchableOpacity
        onPress={() => setMapView(!isMapView)}
        style={styles.searchButton}
      >
        <Text style={styles.viewButtonText}>{isMapView ? 'List View' : 'Map View'}</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default SubSearch


