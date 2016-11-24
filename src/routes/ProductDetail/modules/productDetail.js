//  Constants
export const SELECT_QUANTITY_CHANGE = 'SELECT_QUANTITY_CHANGE'

// Actions
export function selectQuantityChange(id) {
  return {
    type: SELECT_QUANTITY_CHANGE,
    payload: {
      id: id
    }
  }
}

export const actions = {
}

// Action Handlers
const ACTION_HANDLERS = {

}

// Reducer
const initialState = {
}

export default function productDetailReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
