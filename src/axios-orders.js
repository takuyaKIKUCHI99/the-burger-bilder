import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://the-burger-builder-3d844.firebaseio.com/'
});

export default instance;
