import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FETCH_SEARCH_DATA_SUCCESS, SHOW_CATEGORY_FILTER, SET_CATEGORY_LIST } from "../actions/SearchActionsConstants"

const initialState = {
  searchedData: [],
  showCategoryFilter: false,
  categoryList: [],
}

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        searchedData: action.payload
      }

    case SHOW_CATEGORY_FILTER:
      return {
        ...state,
        showCategoryFilter: action.showCategoryFilter,
      }

    case SET_CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.categoryList,
      }

    default:
      return state
  }
}

const persistSearchConfig = {
  timeout: 10000,
  key: 'rootDashboard',
  storage: AsyncStorage,
  whitelist: 'searchedData'
}

const persistSearchReducer = persistReducer(persistSearchConfig, SearchReducer)

export default persistSearchReducer
