# Universal Redux Router

- Read location data from the store.
- Update the location by dispatching navigation actions.
- Let middleware handle the side-effect of history navigation.

![Redux-first routing](https://camo.githubusercontent.com/b08b1b78a08e0444ab451f692618d59da977e6a1/687474703a2f2f692e696d6775722e636f6d2f734169566c6b4d2e6a7067)

## Usage

```js
import { combineReducers, applyMiddleware, createStore } from 'redux'
import {
  createBrowserHistory,
  routerReducer,
  routerMiddleware,
  startListener,
  push
} from 'ur2'
import { otherReducers } from './reducers'

// Create the history object
const history = createBrowserHistory()

// Add the reducer, which adds location state to the store
const rootReducer = combineReducers({
  ...otherReducers,
  router: routerReducer // Convention is to use the "router" property
})

// Build the middleware, which intercepts navigation actions and calls the corresponding history method
const middleware = routerMiddleware(history)

// Create the store
const store = createStore(rootReducer, {}, applyMiddleware(middleware))

// Start the history listener, which automatically dispatches actions to keep the store in sync with the history
startListener(history, store)

// Now you can read the location from the store!
let currentLocation = store.getState().router.pathname

// And you can dispatch navigation actions from anywhere!
store.dispatch(push('/about'))
```
