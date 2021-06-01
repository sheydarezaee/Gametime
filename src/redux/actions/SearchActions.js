import { SHOW_CATEGORY_FILTER, SET_CATEGORY_LIST, SET_CURRENT_ITEM, SET_CURRENT_LOCATION } from "./SearchActionsConstants"

export function setCategoryFilter(showCategoryFilter) {
  return {
    type: SHOW_CATEGORY_FILTER,
    showCategoryFilter,
  }
}

export function setCategoryList(categoryList) {
  return {
    type: SET_CATEGORY_LIST,
    categoryList,
  }
}

export function setCurrentItem(currentItem) {
  return {
    type: SET_CURRENT_ITEM,
    currentItem,
  }
}

export function setCurrentLocation(currentLocation) {
  return {
    type: SET_CURRENT_LOCATION,
    currentLocation,
  }
}