import { combineReducers } from 'redux'
import locationReducer from './location'
import sidebarReducer from '../components/Header/modules/header'
import cartReducer from '../components/Checkout/modules/checkout'
import homeReducer from '../routes/Home/modules/home'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    ...asyncReducers,
    sidebar: sidebarReducer,
    home: homeReducer,
    cart: cartReducer
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
