import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SearchResultItem extends PureComponent {
  static propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    stars: PropTypes.number,
    watchers: PropTypes.number
  };

  render() {
    return (
      <li>
        <span className="name">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={this.props.git_url}
          >
            {this.props.name}
          </a>
        </span>
        <span className="stars"> Stars: {this.props.stars}</span>
        <span className="watchers"> Watchers: {this.props.watchers}</span>
      </li>
    );
  }
}
