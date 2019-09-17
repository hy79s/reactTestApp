import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SearchResultItem from './SearchResultItem';

export default class SearchResults extends PureComponent {
  static propTypes = {
    searchResultsData: PropTypes.array
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.searchResultsData.map(item => (
            <SearchResultItem
              key={item.id}
              git_url={item.html_url}
              name={item.name}
              stars={item.stargazers_count}
              watchers={item.watchers_count}
            />
          ))}
        </ul>
      </div>
    );
  }
}
