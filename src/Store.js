import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const win = window;
const reducer = (state, action) => {
  return state
}
const initialState = {};
const storeEnhancer = compose(
  applyMiddleware(thunk),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
)

export default createStore(
  reducer,
  initialState,
  storeEnhancer
)
