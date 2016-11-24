import ProductDetailView from './components/productDetailView'
import { injectReducer } from '../../store/reducers'


export default (store) => ({
  path: 'productdetail/:value',
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const productDetailContainer = require('./containers/productDetailContainer').default
      const productDetailReducer = require('./modules/productDetail').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, {
        key: 'productDetail',
        reducer: productDetailReducer
      })

      /*  Return getComponent   */
      cb(null, productDetailContainer)

      /* Webpack named bundle   */
    }, 'productDetail')
  }
})
