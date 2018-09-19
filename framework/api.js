import http from 'axios';
import config from './config';

class API {
  constructor(host) {
    this.host = host;
  }

  static headers() {
    return {
      'Content-Type': 'application/json'
    };
  }

  static setBaseHost(config) {
    return this.host || config.host || config[process.env.NODE_ENV];
  }

  static get(config) {
    API.setBaseHost(config);
    return this.api('get', config.route, config.headers, config.params);
  }

  static put(config) {
    API.setBaseHost(config);
    return this.api('put', config.route, config.headers, config.params, config.data);
  }

  static post(config) {
    API.setBaseHost(config);
    return this.api('post', config.route, config.headers, config.params, config.data);
  }

  static patch(config) {
    API.setBaseHost(config);
    return this.api('patch', config.route, config.headers, config.params, config.data);
  }

  static delete(config) {
    API.setBaseHost(config);
    return this.api('delete', config.route, config.headers, config.params);
  }

  static api(requestType, route, headers, params, data) {
    const url = `${this.host}${route}`;

    const baseHeaders = API.headers();
    const requestConfig = { headers: headers ? Object.assign({}, baseHeaders, headers) : baseHeaders };

    if(params) {
      requestConfig.params = params;
    }

    if(requestType === 'get' || requestType === 'delete') {
      return http[requestType](url, requestConfig).then((response) => {
        return response.data;
      });
    }

    //A post or a put
    return http[requestType](url, data, requestConfig).then((response) => {
      return response.data;
    }).catch((error) => {
      return error;
    });
  }
}

export default API;