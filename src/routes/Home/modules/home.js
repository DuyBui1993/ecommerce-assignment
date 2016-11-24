// Data sample
var accordionList = [
  {
    id: 1,
    title: 'Apple',
    body: 'Always lead technology',
    backgroundUrl: 'http://iphone7update.com/wp-content/uploads/2014/02/Apple-iPhone-7-release-date.jpg',
    isExpand: true
  },
  {
    id: 2,
    title: 'SamSung',
    body: 'Innovation is our way',
    backgroundUrl: 'http://i.amz.mshcdn.com/wPwvbVLtY-3A-DFVXdDBLYXB8kI=/1200x630/2016%2F11%2F04%2Fb0%2Fed0bbe80682d4d09976e5ff78c25400f.00c20.jpg',
    isExpand: false
  },
  {
    id: 3,
    title: 'Microsoft',
    body: 'All in one',
    backgroundUrl: 'https://i.ytimg.com/vi/er283GMyFp8/maxresdefault.jpg',
    isExpand: false
  },
  {
    id: 4,
    title: 'Google',
    body: 'Dawn of new empire',
    backgroundUrl: 'http://www.concept-phones.com/wp-content/uploads/2013/06/nexus5-black.jpg',
    isExpand: false
  }
];

var productList = [];

//  Constants
export const EXPAND_ACCORDION = 'EXPAND_ACCORDION'
export const REQUEST_PRODUCT_NEW = 'REQUEST_PRODUCT_NEW'
export const RECEIVE_PRODUCT_NEW = 'RECEIVE_PRODUCT_NEW'


// Actions
export function expandAccordion(id) {
  return {
    type: EXPAND_ACCORDION,
    payload: {
      id: id
    }
  }
}
export function requestProductNews() {
  return {
    type: REQUEST_PRODUCT_NEW
  }
}

export function receiveProductNews(value) {
  return {
    type: RECEIVE_PRODUCT_NEW,
    payload: {
      value
    }
  }
}

export const fetchProductNews = () => {
  return (dispatch) => {
    dispatch(requestProductNews())
    return fetch('https://ecommerce-assignment.firebaseio.com/productNews.json')
    .then(data => data.json())
    .then(text => dispatch(receiveProductNews(text)))
  }
}

export const actions = {
  expandAccordion,
  requestProductNews,
  receiveProductNews,
  fetchProductNews
}

// Action Handlers
const ACTION_HANDLERS = {
  [EXPAND_ACCORDION]: (state, action) => {
    let expand = state.accordions.map(accordion => {
        accordion.isExpand = accordion.id === action.payload.id;
        return accordion;
    });
    return ({ ...state, accordions: expand })
  },
  [REQUEST_PRODUCT_NEW]: (state, action) => {
    return ({ ...state, fetching: true })
  },
  [RECEIVE_PRODUCT_NEW]: (state, action) => {
   return ({ ...state, productNews: state.productNews.concat(action.payload.value), fetching: false })
  }
}

// Reducer
const initialState = {
  accordions: accordionList,
  productNews: productList
}

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
