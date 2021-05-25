import React, { Component } from 'react'
import { View, ScrollView, TextInput, StatusBar, FlatList, Pressable, Text } from 'react-native'
import { gql, useQuery } from '@apollo/client'
import styles from './SubSearch.Styles'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Loading from '../Loading'

const searchItem = ({ chapter }) => {
  const { number, title } = chapter
  let header, subheader

  if (number) {
    header = `Chapter ${number}`
    subheader = title
  } else {
    header = title
  }

  return (
    <Pressable style={styles.item}>
      <Text style={styles.header}>{header}</Text>
      {subheader && <Text style={styles.subheader}>{subheader}</Text>}
    </Pressable>
  )
}

export class SubSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '',
      location: '', 
    }
  }

  handleSubmit = () => {}

  render() {
    const CHAPTERS_QUERY = gql`
    query Chapters {
      chapters {
        id
        number
        title
      }
    }
  `
    const { data, loading } = useQuery(CHAPTERS_QUERY)

    if (loading) {
      return <Loading />
    }

    return (
      <ScrollView 
        contentInsetAdjustmentBehavior="automatic"
        style={Colors.darker}
      >
        <StatusBar barStyle="dark-content" />
        <View style={styles.searchButtonContainer}>
          <TextInput
            defaultValue="Cleaners, movers, sushi, .. what you desire"
            style={styles.searchText}
            onChangeText={(value) => this.setState({ type: value })}
            placeholderTextColor={Colors.grey}
          />
        </View>
        <View style={styles.searchButtonContainer}>
          <TextInput
            defaultValue=" Current location"
            style={styles.searchText}
            onChangeText={(value) => this.setState({ location: value })}
            placeholderTextColor={Colors.grey}
          />
        </View>

        <FlatList
          data={data.chapters}
          renderItem={({ item }) => <searchItem chapter={item} />}
          keyExtractor={(chapter) => chapter.id.toString()}
        />

      </ScrollView>
    )
  }
}

SubSearch.propTypes = {}


