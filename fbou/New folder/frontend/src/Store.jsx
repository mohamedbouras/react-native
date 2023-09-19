import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Example middleware

// Import your reducers here
import userReducer from './userReducer';

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  // Add more reducers here if needed
});

// Create Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
