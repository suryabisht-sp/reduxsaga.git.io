import {product_Action, SET_PRODUCT_LIST} from './constant.js'

export const productNewReducer = (data = [], action) => {
    
    switch (action.type) {
        // case product_Acion:
        //     return [action.data]
      case SET_PRODUCT_LIST:
     // console.log("hello action daat", action)
      return[...action.productList]
            default:
            return data
    }
}