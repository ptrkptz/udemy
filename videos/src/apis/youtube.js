import axios from 'axios';

const KEY = 'AIzaSyCcV0rDQiNloOMkPkgdXAuRSipJrD8s3Gg';

export default axios.create ({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
