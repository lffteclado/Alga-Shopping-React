import { createStore, combineReducers } from 'redux'
import calculatorReducer from './Calculator'
import productsReducer from './Products/Products.reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    products: productsReducer
})

const store = createStore(rootReducer)

export default store