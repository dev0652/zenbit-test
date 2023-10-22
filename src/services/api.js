import axios from 'axios';

axios.defaults.baseURL = 'https://zenbit-backend-fvnb.onrender.com/api';

// ############### User ##########################

export const register = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  setAuthHeader(data.token);
  return data;
};

export const login = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  setAuthHeader(data.token);
  return data;
};

export const logout = async () => {
  const { data } = await axios.post('/users/logout');
  clearAuthHeader();
  return data;
};

export const refresh = async token => {
  setAuthHeader(token);
  const { data } = await axios.get('/users/current');
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
  const { data } = await axios.get('/properties');
  return data;
};
