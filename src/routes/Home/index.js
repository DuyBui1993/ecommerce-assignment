// import { injectReducer } from '../../store/reducers'
//
// export default (store) => ({
//   path: 'home',
//   getComponent (nextState, next) {
//     require.ensure([
//       './containers/HomeContainer',
//       './modules/home'
//     ], (require) => {
//       const Home = require('./containers/HomeContainer').default
//       const homeReducer = require('./modules/home').default
//
//       injectReducer(store, {
//         key: 'home',
//         reducer: homeReducer
//       })
//
//       next(null, Home)
//     })
//   }
// })
import Home from './containers/HomeContainer'

export default {
  components: Home
}
