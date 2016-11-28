//  Constants
export const SELECT_QUANTITY_CHANGE = 'SELECT_QUANTITY_CHANGE'
export const REQUEST_PRODUCT_DETAIL = 'REQUEST_PRODUCT_DETAIL'
export const RECEIVE_PRODUCT_DETAIL = 'RECEIVE_PRODUCT_DETAIL'

// Actions
export function selectQuantityChange(id) {
  return {
    type: SELECT_QUANTITY_CHANGE,
    payload: {
      id: id
    }
  }
}

export function requestProductDetail() {
  return {
    type: REQUEST_PRODUCT_DETAIL
  }
}

export function receiveProductDetail(value) {
  return {
    type: RECEIVE_PRODUCT_DETAIL,
    payload: {
      value: value
    }
  }
}

export function fetchProductDetail(id) {
  return (dispatch) => {
    dispatch(requestProductDetail())
    return fetch('https://ecommerce-assignment.firebaseio.com/productList.json?orderBy=%22id%22&equalTo=' + id)
    .then(data => data.json())
    .then(text => dispatch(receiveProductDetail(text[id])))
  }
}

export const actions = {
  requestProductDetail,
  receiveProductDetail
}

// Action Handlers
const ACTION_HANDLERS = {
  [REQUEST_PRODUCT_DETAIL]: (state, action) => {
    return ({ ...state, fetching: true})
  },
  [RECEIVE_PRODUCT_DETAIL]: (state, action) => {
    debugger;
    return ({ ...state, product: action.payload.value, fetching: false})
  }
}

// Reducer
const initialState = {
  product: null
}

export default function productDetailReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
