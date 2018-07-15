import reducer from '../reducer/reducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger' 

// const middleware = [ thunk ]
const middleware = []

if(process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

let store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

export default store