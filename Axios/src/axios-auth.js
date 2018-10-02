import axios from 'axios';

const instance = axios.create({
  baseURL: "https://axio-97e26.firebaseio.com"
});

instance.defaults.headers.common["Something"] = "123";

export default instance;