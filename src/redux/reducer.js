import {addtocart,removecart,clearcart} from './constant'

export const cartData = (data = [], action) => {
        switch (action.type) {
        case addtocart:
                 return (
                [action.data, ...data]
                )
        case removecart:
         //data.length = data.length - 1
          let datanew= (data.filter((item)=>item.id!==action.data))
          console.log("removed", datanew)
                return [...datanew]
        case clearcart:
            return [];
        default:
            return data 
    }

    // if (action.type === addtocart) {
    //     return [action.data,...data]
    // }
    // else {

    //     return {clear
    //         data
    //     }     }
}