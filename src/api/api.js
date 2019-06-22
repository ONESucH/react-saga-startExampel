import config from './config';

const Api = {
  get: (url) => fetch(config.server + url)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err)
};

export default Api;