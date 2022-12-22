import {addtocart,removecart,clearcart} from './constant'


export const cartData = (data = [], action) => {
    
    switch (action.type) {
        case addtocart:
            return [action.data, ...data]
        case removecart:
         //data.length = data.length - 1
           data.pop(data)
            return [...data]
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