// import { createStore } from "redux"
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'
import createSagaMiddleware from '@redux-saga/core';
import productSaga from './productSaga';

// const store = createStore((rootReducer))
const middlewareSaga = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware:()=>[middlewareSaga]

})

middlewareSaga.run(productSaga)
export default store;