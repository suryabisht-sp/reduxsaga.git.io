import {PRODUCT_LIST, search} from './constant'

export const product = () => {
  return {
    type: PRODUCT_LIST,
  }
}

export const searchData = (dat) => {
  return {
    type: search,
    data: dat
  }
}