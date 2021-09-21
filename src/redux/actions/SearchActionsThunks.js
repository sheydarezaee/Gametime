import axios from 'axios'
import { baseUrl } from "../../support/constants"
import { FETCH_SEARCH_DATA, FETCH_SEARCH_DATA_SUCCESS, FETCH_SEARCH_DATA_FAILURE } from "./SearchActionsConstants"

export function fetchSearchData(term) {
  return (dispatch) => {
    dispatch({ type: FETCH_SEARCH_DATA })
    axios.get(`${baseUrl}?q=${term}`, {
      config: {
        'headers' : {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json',
          'Accept-Language': 'en_US',
        }
      }
    })
    .then((response) => {
      let results = response.data
      Object.keys(response.data).map(function(key, index) {
        results[key].splice(3)
      })
      const mapped_results = [
        {
          title: "Events",
          data: results.events
        },
        {
          title: "Performers",
          data: results.performers
        },
        {
          title: "Venues",
          data: results.venues
        },
      ]
      dispatch({ type: FETCH_SEARCH_DATA_SUCCESS, payload: mapped_results })
    }, (error) => {
      dispatch({ type: FETCH_SEARCH_DATA_FAILURE, payload: error })
    })
  }
}
