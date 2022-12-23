import { addtocart, removecart, clearcart,} from "./constant"


export const AddToCart = (dat) => {
 return {
        type: addtocart,
        data: dat
    }
    // return {  // for string defined
    //     type: "ADD_TO_CART",
    //     data: dat
    // }
        }

export const removeFromCart = (dat) => {
      return {
        type: removecart,
        data: dat
    }
}
   
export const clearAll = (dat) => {
      return {
        type: clearcart,
        data: dat
    }
}
   
