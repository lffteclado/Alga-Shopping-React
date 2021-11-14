import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import calculatorReducer from './Calculator'
import productsReducer from './Products/Products.reducer'


const rootReducer = combineReducers({
    calculator: calculatorReducer,
    products: productsReducer
})

const persistedReducer = persistReducer({
    key: 'root',
    storage
}, rootReducer)

export const store = createStore(persistedReducer)
export const persistedStore = persistStore(store)