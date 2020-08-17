import axios from 'axios';

const mmlApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL || 'http://localhost:3333'}`,
});
const omdbApi = axios.create({
  baseURL: 'https://www.omdbapi.com',
});

export default mmlApi;
export { mmlApi, omdbApi };
