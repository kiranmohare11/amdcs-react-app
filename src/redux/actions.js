// Define your actions here
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_POST = 'ADD_POST';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const addPost = (data) => (
  {
    type: ADD_POST,
    payload: data
  });