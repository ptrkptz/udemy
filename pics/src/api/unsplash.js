import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 49af3f824a55d34d764582ecf747a033bef20c1414f35860a5bea6826df3c8d3'
  }
});
