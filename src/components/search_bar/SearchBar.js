import React from 'react'
import {TextInput , View } from 'react-native'
import styles from './SearchBar.Styles'

const SearchBar = ({term, location, onTermChange , onLocationChange, onHandleSearch}) =>{
  return(
    <View>
      <View style={styles.searchButtonContainer}>
        <TextInput
          style={styles.inputStyle} 
          placeholder="Search here"
          value={term}
          onChangeText={value => onTermChange(value)}
          onEndEditing={() => onHandleSearch()}
          autoCapitalize= 'none'
          autoCorrect= {false}
          autoFocus
        />
      </View>
      <View style={[styles.searchButtonContainer, styles.locationContainer]}>
        <TextInput
          style={styles.inputStyle} 
          placeholder="Enter location"
          value={location}
          onChangeText={value => onLocationChange(value)}
          onEndEditing={() => onHandleSearch()}
          autoCapitalize= 'none'
          autoCorrect= {false}
          autoFocus
        />
      </View>
    </View>
  )
}

export default SearchBar

