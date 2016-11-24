// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_PRODUCT_LIST = 'REQUEST_PRODUCT_LIST'
export const RECEIVE_PRODUCT_LIST = 'RECEIVE_PRODUCT_LIST'

// ------------------------------------
// Actions
// ------------------------------------
export function requestProductList() {
  debugger;
  return {
    type: REQUEST_PRODUCT_LIST
  }
}

export function receiveProductList(value) {
  debugger;
  return {
    type: RECEIVE_PRODUCT_LIST,
    payload: {
      value
    }
  }
}

export const fetchProductList = () => {
  return (dispatch) => {
    dispatch(requestProductList())
    return fetch('https://ecommerce-assignment.firebaseio.com/productList.json')
    .then(data => data.json())
    .then(text => dispatch(receiveProductList(text)))
  }
}

export const actions = {
  requestProductList,
  receiveProductList,
  fetchProductList
}



// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_PRODUCT_LIST]: (state, action) => {
    return ({ ...state, fetching: true })
  },
  [RECEIVE_PRODUCT_LIST]: (state, action) => {
   return ({ ...state, products: state.products.concat(action.payload.value), fetching: false })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
var productList = [];
const initialState = { products: productList, fetching: false }
export default function Reducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
