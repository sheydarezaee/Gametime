import axios from 'axios'
import { YELP_API_KEY } from '../support/constants'

export default axios.create({
  baseURL : 'https://api.yelp.com/v3/businesses',
  headers : {
    'Authorization': `Bearer ${YELP_API_KEY}`,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Accept-Language': 'en_US',
  }
})
