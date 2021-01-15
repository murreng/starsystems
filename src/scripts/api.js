/*import {endpoint, origin} from './endpooint';
import apiHeaders from './api.headers';
import api from './default/api';

const entryPointConfigs = {
    
}

function sendRequest({url, config}) {
    return fetch(url,config.params)
    .then(response => transformResponse(config, response));
}

function transfromResponse(config, response) {
    if(response){
        const {transform} = config;

        if(typeof transform === 'string') {
            return response[transform]();
        }

        if(typeof transform === 'function') {
            return transform(response;)
        }

        return response;
    }
}

export default api;
export {setDefaultConfig};*/