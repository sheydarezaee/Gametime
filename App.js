import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from './src/screens/search_screen/SearchScreen'
import DetailsScreen from './src/screens/details_screen/DetailsScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainSearch">
        <Stack.Screen
          name="Search Screen"
          component={SearchScreen}
        />
        <Stack.Screen
          name="Details Screen"   
          component={DetailsScreen}
        />
      </Stack.Navigator>
      <StatusBar barStyle="dark-content" />
    </NavigationContainer>
  )
}

export default App