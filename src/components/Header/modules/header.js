//  Constants
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export const TOGGLE_SEARCH = 'TOGGLE_SEARCH'

// Actions
export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR
  }
}

export function toggleSearch() {
  return {
    type: TOGGLE_SEARCH
  }
}

export const actions = {
  toggleSidebar,
  toggleSearch
}

// Action Handlers
const ACTION_HANDLERS = {
  [TOGGLE_SIDEBAR]: (state, action) => {
    return ({ ...state, sidebarOpen: !state.sidebarOpen })
  },
  [TOGGLE_SEARCH]: (state, action) => {
    return ({ ...state, searchOpen: !state.searchOpen })
  }
}

// Reducer
const initialState = {
  sidebarOpen: false,
  searchOpen: false
}
export default function sidebarReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
