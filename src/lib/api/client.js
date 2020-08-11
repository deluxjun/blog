import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = '/xedrm/';
// client.defaults.headers.common['Authorization'] = 'Bearer 123';

client.postUrl = (url, content) => {
  return client.post(url, content, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
  });
};

// for xedm return protocol
client.interceptors.response.use(
  (response) => {
    if (response.data.errcode && response.data.errcode !== '0') {
      // -100 is expired session
      if (response.data.errcode === -100) {
        return Promise.reject(response.data);
      }
      return Promise.reject(response.data);
    }
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      return Promise.reject('' + error.response.data);
    }
    if (error.response.data) {
      return Promise.reject('' + error.response.data);
    }

    return Promise.reject(error);
  },
);

export const setAuthToken = (token) => {
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`; // for all requests
};

export const makeParam = (obj) => {
  return Object.keys(obj)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
    .join('&');
};

export default client;
