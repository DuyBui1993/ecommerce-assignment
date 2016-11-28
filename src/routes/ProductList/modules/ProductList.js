// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_PRODUCT_LIST = 'REQUEST_PRODUCT_LIST'
export const RECEIVE_PRODUCT_LIST = 'RECEIVE_PRODUCT_LIST'
export const SET_FILTER = 'SET_FILTER'

// ------------------------------------
// Actions
// ------------------------------------
export function requestProductList() {
  return {
    type: REQUEST_PRODUCT_LIST
  }
}

export function receiveProductList(value) {
  return {
    type: RECEIVE_PRODUCT_LIST,
    payload: {
      value
    }
  }
}

export function setFilter(category) {
  return {
    type: SET_FILTER,
    category
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
  fetchProductList,
  setFilter
}



// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_PRODUCT_LIST]: (state, action) => {
    return ({...state,
      fetching: true
    })
  },
  [RECEIVE_PRODUCT_LIST]: (state, action) => {
    return ({...state,
      products: state.products.concat(action.payload.value),
      fetching: false
    })
  },
  [SET_FILTER]: (state, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    newState.filter = action.category
    return newState
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
var productList = [];
const initialState = {
  products: productList,
  fetching: false,
  filter: 'all'
}
export default function Reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
