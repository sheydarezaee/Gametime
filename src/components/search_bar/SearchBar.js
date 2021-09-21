import React from 'react'
import {TextInput , View, Image } from 'react-native'
import styles from './SearchBar.Styles'

const searchIcon = require('../../assets/search.png')

const SearchBar = ({term, onTermChange}) =>{
  return(
    <View style={styles.searchButtonContainer}>
      <View style={styles.searchIconContainer}>
        <Image source={searchIcon} style={styles.searchIcon} resizeMode="center"/>
      </View>
      <TextInput
        style={styles.inputStyle} 
        placeholder="Team, performer or venue"
        value={term}
        onChangeText={value => onTermChange(value)}
        autoCapitalize= 'none'
        autoCorrect= {false}
        autoFocus
      />
    </View>
  )
}

export default SearchBar

