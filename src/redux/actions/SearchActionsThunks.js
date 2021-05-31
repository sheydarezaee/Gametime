import yelp from "../../api/yelp"
import { baseUrl, GET_ITEMS_QUERY } from "../../support/constants"
import { getPickerCategories } from "../../support/utils"
import { setCategoryFilter, setCategoryList } from "./SearchActions"
import { FETCH_SEARCH_DATA, FETCH_SEARCH_DATA_SUCCESS, FETCH_SEARCH_DATA_FAILURE } from "./SearchActionsConstants"

export function fetchSearchData(term, location) {
  return (dispatch) => {
    dispatch({ type: FETCH_SEARCH_DATA })
    yelp.post(
      `${baseUrl}`, {
        query: GET_ITEMS_QUERY,
        variables: { term, location }
      }
    )
    .then((response) => {
      const results = response.data.data.search.business
      dispatch({ type: FETCH_SEARCH_DATA_SUCCESS, payload: results })
      dispatch(setCategoryFilter(true))

      const pickerCategories = getPickerCategories(results) 
      dispatch(setCategoryList(pickerCategories))

    }, (error) => {
      dispatch({ type: FETCH_SEARCH_DATA_FAILURE, payload: error })
    })
  }
}
