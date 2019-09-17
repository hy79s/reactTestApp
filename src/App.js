import React, { PureComponent } from 'react';
import SearchBoxContainer from './containers/searchBoxContainer';
import PostList from './containers/PostList';

class App extends PureComponent {
  render() {
    return (
      <div>
        <SearchBoxContainer />
        <PostList />
      </div>
    )
  }
}

export default App
