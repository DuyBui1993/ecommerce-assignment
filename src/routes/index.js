// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import ProductListRoute from './ProductList'
import ProductDetailRoute from './ProductDetail'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    ProductListRoute(store),
    ProductDetailRoute(store)
  ]
})
export default createRoutes
