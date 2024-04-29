// This file contains action creators for inventory management

// Action types
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

// Action creators
export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}

export function removeItem(itemId) {
  return {
    type: REMOVE_ITEM,
    payload: itemId
  };
}

export function updateItem(item) {
  return {
    type: UPDATE_ITEM,
    payload: item
  };
}
