import axios from 'axios'
import { baseUrl, YELP_API_KEY } from '../support/constants'

export default axios.create({
  baseURL : `${baseUrl}`,
  headers : {
    'Authorization': `Bearer ${YELP_API_KEY}`,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Accept-Language': 'en_US',
  }
})
