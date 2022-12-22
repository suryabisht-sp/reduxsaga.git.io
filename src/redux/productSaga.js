import {put, takeEvery} from "redux-saga/effects"
import { PRODUCT_LIST, SET_PRODUCT_LIST} from './constant'


function* getprod() {
    let productList = yield fetch('https://fakestoreapi.com/products');
    productList = yield productList.json();
    yield put({type:SET_PRODUCT_LIST,productList:productList})
} 


function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getprod)
}

export default productSaga;