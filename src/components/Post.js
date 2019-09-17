import React from 'react';
import SearchResults from './SearchResults'

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default ({ post: { subject, searchResultsData, id }, onDelete }) => {
  return (
    <div style={ styles }>
      <h2>{ subject }</h2>
      <SearchResults searchResultsData={searchResultsData}/>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(id)}>
        Remove
      </button>
    </div>
  );
};
