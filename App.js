import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import SearchScreen from './src/screens/search_screen/SearchScreen'
import DetailsItemScreen from './src/screens/details_item_screen/DetailsItemScreen'
import { persistor, store } from './src/redux/store'

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainSearch">
            <Stack.Screen
              name="Search Screen"
              component={SearchScreen}
            />
            <Stack.Screen
              name="Details Item Screen"   
              component={DetailsItemScreen}
            />
          </Stack.Navigator>
          <StatusBar barStyle="dark-content" />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App