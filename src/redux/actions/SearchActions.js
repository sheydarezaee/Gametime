import { SHOW_CATEGORY_FILTER, SET_CATEGORY_LIST } from "./SearchActionsConstants"

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