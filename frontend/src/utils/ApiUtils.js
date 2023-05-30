const SERVER_URL = 'https://google-keep-clone-gkgg.onrender.com';

const ApiUtils = {
  serverUrl: (path) => {
    return `${SERVER_URL}${path}`;
  }
}

export default ApiUtils;