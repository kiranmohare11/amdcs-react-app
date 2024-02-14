import { INCREMENT, DECREMENT, ADD_POST } from './actions';

// Initial state
const initialState = {
  count: 0,
  postList: []
};

// Reducer function
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ADD_POST:
      return {
        ...state,
        postList: [...state.postList, action.payload],
      };
    default:
      return state;
  }
};

export default postReducer;
