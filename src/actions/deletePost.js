import { DELETE_POST } from './types';

const deletePost = (id) => {
    return {
      type: DELETE_POST,
      payload: {
        id
      }
    }
  }
export default deletePost;
