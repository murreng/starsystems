import axios from 'axios';

const baseUrl = 'http://webdevelopertest.playfusionservices.com/webapptest';

const api = {
  getStarSystems: () => {
    return axios.get(`${baseUrl}/stars`);
  }
};

export default api;
