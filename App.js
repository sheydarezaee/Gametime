// import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { StatusBar, ActivityIndicator } from 'react-native'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistCache } from 'apollo3-cache-persist'
import { MainSearch } from './src/components/main_search/MainSearch'
import SubSearch from './src/components/sub_search/SubSearch'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { ACCESS_TOKEN } from './src/support/utils'

const Stack = createStackNavigator()

const cache = new InMemoryCache()


const client = new ApolloClient({
  uri: 'https://api.yelp.com/v3/graphql',
  connectToDevTools: true,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
  cache,
})

const App = () => {
  const [loadingCache, setLoadingCache] = useState(true)

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false))
  }, [])

  if (loadingCache) {
    return <ActivityIndicator animating={loadingCache} color={Colors.blue} />
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainSearch">
          <Stack.Screen
            name="Yelp Home"
            component={MainSearch}
          />
          <Stack.Screen
            name="Search"  
            component={SubSearch}
          />
        </Stack.Navigator>
        <StatusBar barStyle="dark-content" />
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default App