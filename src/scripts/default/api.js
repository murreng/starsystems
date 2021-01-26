import axios from 'axios';

const baseUrl = 'http://webdevelopertest.playfusionservices.com/webapptest';

const getStarSystems = () => {
  axios.get(`${baseUrl}/stars`);
};

const api = {
  getStarSystems: () => {
    return axios.get(`${baseUrl}/stars`);
  }
};

export default api;
