import axios from 'axios';

export default function getGitHubProjects(subject, maxResults) {
  return axios.get(
    'https://api.github.com/search/repositories?q=' +
      subject +
      '&per_page=' +
      maxResults
  );
}
