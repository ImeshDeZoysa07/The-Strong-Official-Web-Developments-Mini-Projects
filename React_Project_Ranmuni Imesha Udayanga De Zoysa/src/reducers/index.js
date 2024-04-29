// Import necessary Redux functions
import { createStore, combineReducers } from 'redux';

// Import your individual reducer files
import counterReducer from './counterReducer';
import todosReducer from './todosReducer';
import userReducer from './userReducer';

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  user: userReducer
});

// Create the Redux store with the combined reducer
const store = createStore(rootReducer);

// Export the store
export default store;
