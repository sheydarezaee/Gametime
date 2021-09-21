import React, { useState } from 'react'
import { View, ScrollView, StatusBar, Image, Text, SectionList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import styles from './SearchScreen.Styles'
import SearchBar from '../search_bar/SearchBar'
import { fetchSearchData } from '../../redux/actions/SearchActionsThunks'
import { getDayFromDateString, getMonthAndDayFromDateString } from '../../support/utils'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const SearchItem = ({ searchItem, section }) => {
  const { title } = section
  let item
  if (title === 'Events') {
    const { event } = searchItem
    const eventDate = getMonthAndDayFromDateString(event.datetime_utc)
    const eventDay = getDayFromDateString(event.datetime_utc)

    item = (
      <View style={styles.eventContainer}>
        <View style={styles.eventInfoContainer}>
          <Text style={styles.text}>{eventDate}</Text>
          <Text style={styles.subtext}>{eventDay}</Text>
        </View>
        <View style={styles.eventInfoContainer}>
          <Text style={styles.text}>{event.name}</Text>
          { event.time_tbd && <Text style={styles.subtext}>{event.time_tbd}</Text> }
        </View>
      </View>
    )
  } else {
    item = (
      <View style={styles.eventContainer}>
        <View style={styles.eventImageContainer}>
          <Image
            source={{ uri: title === 'Performers' ? searchItem.hero_image_url : searchItem.image_url }}
            resizeMode="cover"
            style={styles.eventImage}
          /> 
        </View>
        <View style={[styles.eventInfoContainer, styles.eventInfo]}>
          <Text style={styles.text}>{searchItem.name}</Text>
          <Text 
            style={[styles.subtext, { textTransform: title === 'Performers' ? 'uppercase' : 'none'}]}
          >
            {title === 'Performers' ? `${searchItem.category}` : `VENUE. ${searchItem.city}, ${searchItem.state}`}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.itemContainer}>
      {item}
    </View>
  )
}

const Separator = () => {
  return <View style={styles.separator} />
}

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [data, setData ] = useState([])
  const dispatch = useDispatch()

  const { searchedData } = useSelector(state => state).SearchReducer

  const handleSearch = (newTerm) => {
    setTerm(newTerm)
    dispatch(fetchSearchData(term))
    setData(searchedData)
  }

  return (
    <ScrollView 
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}
    >
      <StatusBar barStyle="dark-content" />
      <SearchBar 
        term={term}
        onTermChange={handleSearch}
      />
      <View style={styles.listContainer}>
        <SectionList
          sections={searchedData}
          SectionSeparatorComponent={Separator}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item, section }) => <SearchItem searchItem={item} section={section} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    </ScrollView>
  )
}

export default SearchScreen