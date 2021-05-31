import React, { useState } from 'react'
import { View, ScrollView, StatusBar, FlatList, Text, TouchableOpacity } from 'react-native'
import styles from './SearchScreen.Styles'
import yelp from '../../api/yelp'
import { GET_ITEMS_QUERY, baseUrl } from '../../support/constants'
import SearchBar from '../../components/search_bar/SearchBar'
import Picker from '../../components/picker/Picker'
import { getPickerCategories } from '../../support/utils'


const SearchItem = ({ searchItem, navigation }) => {
  const { name, rating, review_count, location } = searchItem
  const { address1, city, state, country } = location

  return (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate('Details Screen')}
      }
    >
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.subheader}>{`rating: ${rating} - ${review_count} reviews`}</Text>
      <Text style={styles.subheader}>{`${address1}, ${city}, ${state}, ${country}`}</Text>
    </TouchableOpacity>
  )
}

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('')
  const [location, setLocation] =useState('')
  const [data, setData ] = useState([])
  const [ category, setCategory ] = useState('')
  const [ pickerItems, setPickerItems ] = useState([])

  const handleSearch = () => {
    yelp.post(
      `${baseUrl}`, {
        query: GET_ITEMS_QUERY,
        variables: { term, location }
      }
    )
    .then((response) => {
      const results = response.data.data.search.business
      setData(results)
      const pickerCategories = getPickerCategories(results)
      setPickerItems(pickerCategories)
    }, (error) => {
      console.log(error)
    })
  }  

  return (
    <ScrollView 
      contentInsetAdjustmentBehavior="automatic"
    >
      <StatusBar barStyle="dark-content" />
      <SearchBar 
        term={term}
        location={location}
        onTermChange={(newTerm) => setTerm(newTerm)} 
        onLocationChange={(newLocation)=> setLocation(newLocation)}
        onHandleSearch={() => handleSearch()}
      />
      <Picker
        items={pickerItems}
        label="Select a category"
        onValueChange={(value) => {
          setCategory(value)
          setData(data.filter(i => i.categories[0].title === value))
        }}
        value={category}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <SearchItem searchItem={item} navigation={navigation} />}
          keyExtractor={(searchItem) => searchItem.name}
        />
      </View>
    </ScrollView>
  )
}

export default SearchScreen