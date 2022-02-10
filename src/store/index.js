import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
// const REQUEST_API_ERROR = 'REQUEST_API_ERROR';

// export const requestApiSuccess = (wallet) => ({
//   type: REQUEST_API_SUCCESS,
//   wallet,
// });

// export const requestApiError = (error) => ({
//   type: REQUEST_API_ERROR,
//   error,
// });

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
