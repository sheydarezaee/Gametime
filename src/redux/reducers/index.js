import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SearchReducer from './SearchReducer'

const persistSearchConfig = {
  timeout: 10000,
  key: 'rootSearch',
  storage: AsyncStorage,
  // whitelist: 'searchedData'
}
const persistSearchReducer = persistReducer(persistSearchConfig, SearchReducer)

export const rootReducer = combineReducers({
  SearchReducer,
})
