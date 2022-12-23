import {put, takeEvery} from "redux-saga/effects"
import { PRODUCT_LIST, SET_PRODUCT_LIST, search, searchSet} from './constant'


function* getprod() {
    let productList = yield fetch('https://fakestoreapi.com/products');
    productList = yield productList.json();
    yield put({type:SET_PRODUCT_LIST,productList:productList})
} 

function* getSortProd(dat) {
    console.log("saga", dat.data)
     let productList = yield fetch(`https://fakestoreapi.com/products?sort=${dat.data}`);
    productList = yield productList.json();
    yield put({type:searchSet,productList:productList})
} 


function* productSaga(data) {
 //  console.log("saga", data)
 yield takeEvery(PRODUCT_LIST,getprod)
yield takeEvery(search, getSortProd)
}



export default productSaga;