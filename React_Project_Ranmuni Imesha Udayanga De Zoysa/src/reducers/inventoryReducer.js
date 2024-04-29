// Import the action types
import { ADD_ITEM, REMOVE_ITEM } from './actionTypes';

// Define the initial state of the inventory
const initialState = {
  items: [],
};

// Define the reducer function
const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default inventoryReducer;
