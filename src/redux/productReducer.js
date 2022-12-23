import {searchSet, SET_PRODUCT_LIST} from './constant.js'

export const productNewReducer = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return [...action.productList]
    case searchSet:
      return [...action.productList]
    default:
      return data
    }
}