import { ADD_POST } from './types';

let autoIncrementId = 0

const addPost = (subject, searchResultsData) => {
    return {
      type: ADD_POST,
      payload: {
        id: ++autoIncrementId,
        subject: subject,
        searchResultsData: searchResultsData
      }
    }
  }
export default addPost;
