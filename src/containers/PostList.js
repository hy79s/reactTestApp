import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import deletePost from '../actions/deletePost';

function PostList({ posts, onDelete }) {
  const postsCopy = posts.concat().reverse();
  return (
    <div>
      {postsCopy.length ? <h1>History</h1> : null}
      {
        postsCopy.map(post => {
          return (
          <Post post={ post } onDelete={ onDelete } key={ post.id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
