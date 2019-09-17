import { combineReducers } from 'redux';
import posts from './postReducer';

const allReducers = combineReducers({
  posts: posts
});

export default allReducers;
