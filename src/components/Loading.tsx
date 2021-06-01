import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { Colors } from '../support/constants'

export default () => (
  <View style={styles.centered}>
    <ActivityIndicator size="large" color={Colors.pink} />
  </View>
)

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})