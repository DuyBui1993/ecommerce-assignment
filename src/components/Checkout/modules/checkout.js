//  Constants
export const OPEN_CART = 'OPEN_CART'
export const CLOSE_CART = 'CLOSE_CART'
export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM'

// Actions
export function openCart() {
  return {
    type: OPEN_CART
  }
}

export function closeCart() {
  return {
    type: CLOSE_CART
  }
}

export function addToCart(productToAdd, productQuantity) {
  return {
    type: ADD_TO_CART,
    payload: {
      product: productToAdd,
      quantity: productQuantity
    }
  }
}

export function deleteCartItem(productId) {
  return {
    type: DELETE_CART_ITEM,
    payload: {
      id: productId
    }
  }
}


export const actions = {
  openCart,
  closeCart,
  addToCart,
  deleteCartItem
}

// Action Handlers
const ACTION_HANDLERS = {
  [OPEN_CART]: (state, action) => {
    debugger;
    return ({ ...state, cartOpen: true })
  },
  [CLOSE_CART]: (state, action) => {
    return ({ ...state, cartOpen: false })
  },
  [ADD_TO_CART]: (state, action) => {
    debugger;
    action.payload.product.quantity = action.payload.product.quantity ? action.payload.product.quantity : 0;
    action.payload.product.quantity += action.payload.quantity;
    var cartProducts = state.cartProducts;
    if(state.cartProducts.indexOf(action.payload.product) === -1) {
      cartProducts = state.cartProducts.concat(action.payload.product)
    } else {
      cartProducts = state.cartProducts.map(product => {
          if(product.id === action.payload.product.id) {
            product = action.payload.product;
          }
          return product;
      });
    }
    return ({ ...state, cartProducts: cartProducts})
  },
  [DELETE_CART_ITEM]: (state, action) => {
    return ({ ...state, cartProducts: state.cartProducts.filter(product => product.id !==  action.payload.id)})
  }
}

// Reducer
const initialState = {
  cartOpen: false,
  cartProducts: []
}
export default function cartReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
