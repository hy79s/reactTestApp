import { ADD_POST, DELETE_POST } from '../actions/types';

export default (state = [], action) => {
  console.log('state:', state)
  console.log('action', action)
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload]
    case DELETE_POST:
        return state.filter(post => post.id !== action.payload.id);  
    default:
      return state;
  }
};
