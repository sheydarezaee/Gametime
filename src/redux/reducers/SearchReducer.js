import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FETCH_SEARCH_DATA_SUCCESS } from "../actions/SearchActionsConstants"

const initialState = {
  searchedData: [],
}

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        searchedData: action.payload
      }

    default:
      return state
  }
}

const persistSearchConfig = {
  timeout: 10000,
  key: 'rootDashboard',
  storage: AsyncStorage,
  // whitelist: 'searchedData'
}

const persistSearchReducer = persistReducer(persistSearchConfig, SearchReducer)

export default persistSearchReducer
