import ProductListView from './components/ProductListView'
import { injectReducer } from '../../store/reducers'

// Sync route definition
export default (store) => ({
  path: 'productlist',
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ProductListContainer = require('./containers/ProductListContainer').default
      const reducer = require('./modules/ProductList').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, {
        key: 'productlist',
        reducer
      })

      /*  Return getComponent   */
      cb(null, ProductListContainer)

      /* Webpack named bundle   */
    }, 'productList')
  }

})
