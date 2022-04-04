import axios from "axios";

/**
* fetch datas
*
* @param promise with axios post and put - 
* @return get and put data from and to api server
* @return datas and responses
*/
export const postLogin = async  (url, body) => 
  axios
    .post(url, body)
    .then((response) => response.data)
    .catch((error) => error);

export const putProfile = async (url, body, token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios
    .put(url, body)
    .then((response) => response.data)
    .catch((error) => error);
}    

export const postProfile = async (url, body, token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios
    .post(url, body)
    .then((response) => response.data)
    .catch((error) => error);
}    