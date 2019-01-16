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

  static setBaseHost(requestConfig) {
    this.host = requestConfig.host || config[process.env.NODE_ENV] || this.host;
  }

  static get(requestConfig) {
    API.setBaseHost(requestConfig);
    return this.api('get', requestConfig.route, requestConfig.headers, requestConfig.params);
  }

  static put(requestConfig) {
    API.setBaseHost(requestConfig);
    return this.api('put', requestConfig.route, requestConfig.headers, requestConfig.params, requestConfig.data);
  }

  static post(requestConfig) {
    API.setBaseHost(requestConfig);
    return this.api('post', requestConfig.route, requestConfig.headers, requestConfig.params, requestConfig.data);
  }

  static patch(requestConfig) {
    API.setBaseHost(requestConfig);
    return this.api('patch', requestConfig.route, requestConfig.headers, requestConfig.params, requestConfig.data);
  }

  static delete(requestConfig) {
    API.setBaseHost(requestConfig);
    return this.api('delete', requestConfig.route, requestConfig.headers, requestConfig.params);
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