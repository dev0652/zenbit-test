import axios from 'axios';

// axios.defaults.baseURL = 'https://zenbit-backend-fvnb.onrender.com/api';
axios.defaults.baseURL = 'http://localhost:3000/api';

// ############### User ##########################

export const register = async credentials => {
  const { data } = await axios.post('/auth/signup', credentials);
  setAuthHeader(data.token);
  return data;
};

export const login = async credentials => {
  const { data } = await axios.post('/auth/login', credentials);
  setAuthHeader(data.token);
  return data;
};

export const logout = async email => {
  const { data } = await axios.post('/auth/logout', email);
  clearAuthHeader();
  return data;
};

export const refresh = async token => {
  setAuthHeader(token);
  const { data } = await axios.get('/auth/current');
  return data;
};

// Utility to add JWT
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// ############### Open Deals ##########################

export const fetchProperties = async () => {
  const { data } = await axios.get('/properties/fetch');
  return data;
};
