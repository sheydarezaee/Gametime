import React, { Component } from 'react'
import { View, ScrollView, Image, StatusBar, TouchableOpacity, Text } from 'react-native'
import styles from './MainSearch.Styles'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const topImage = require('../../assets/top_image.jpeg')
const searchIcon = require('../../assets/search.png')

export class MainSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
    //   refreshing: false,
    }
  }

  handleSearch = () => {
    this.props.navigation.navigate('SubSearch')
  }

  render() {
    return (
      <ScrollView 
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: Colors.lighter}}
      >
        <StatusBar barStyle="dark-content" />
        <View style={styles.topImageContainer}>
          <Image  
            source={topImage}
            style={styles.topImage} 
          />
        </View>
        <TouchableOpacity
          style={styles.searchButtonContainer}
          onPress={() => this.handleSearch()}
        > 
          <View >
          <Image source={searchIcon} style={styles.searchIcon}/>
          </View>
          <Text style={styles.searchText}>Search for anything you desire</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

MainSearch.propTypes = {}


