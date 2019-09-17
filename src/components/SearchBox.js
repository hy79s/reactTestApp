import React, { PureComponent } from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import getGitHubProjects from 'api/getGitHubProjects';
import l from 'lodash';

import './SearchBox.css';

export default class SearchBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      searchResultsData: []
    };
  }

  handleSearchChange = event => {
    const subject = event.target.value;
    this.getGitHubProjects(subject);
  };

  getGitHubProjects = l.debounce(subject => {
    getGitHubProjects(subject, 10).then(res => {
      this.setState({
        subject: subject,
        searchResultsData: res.data.items
      });
//      console.log(this.props)
      this.props.addPost(subject, res.data.items);
//      console.log(this.state);
    });
  }, 1000);

  render() {
    return (
      <div>
        <h1>Search projects on GitHub</h1>
        <SearchInput textChange={this.handleSearchChange} />
        <SearchResults searchResultsData={this.state.searchResultsData} />
        {this.state.searchResultsData.length ? null : <p>No results...</p>}
      </div>
    );
  }
}
