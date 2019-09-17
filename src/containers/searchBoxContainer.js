import { connect } from 'react-redux'
import SearchBox from './../components/SearchBox'
import addPost from '../actions/addPost'

const mapStateToProps = (state) => {
   return {
      subject: state.subject,
      searchResultsData: state.searchResultsData
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      addPost: (subject, searchResultsData) => dispatch(addPost(subject, searchResultsData))
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
