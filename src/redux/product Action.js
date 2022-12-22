import {PRODUCT_LIST} from './constant'

export const product = () => {
    // let data = await fetch('https://fakestoreapi.com/products')
    // data = await data.json();
    // console.log("data", data)
    // return data
    // let data= "Hello product"
    //   return {
    //     type: product_action,
    //     data: data
    // }
         return {
        type: PRODUCT_LIST,
     
    }
}