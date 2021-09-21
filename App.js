import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from './src/redux/store'
import SearchScreen from './src/components/search_screen/SearchScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainSearch">
            <Stack.Screen
              name="Search"
              component={SearchScreen}
            />
          </Stack.Navigator>
          <StatusBar barStyle="dark-content" />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App