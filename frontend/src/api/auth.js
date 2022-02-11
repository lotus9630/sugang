import axiosInstance from './axios';

export const emailOverlap = async (email) => {
  try {
    await axiosInstance.post(`/auth/email/overlap`, { email });
    return false;
  } catch (error) {
    return true;
  }
};

export const signup = async (data) => {
  try {
    await axiosInstance.post('/auth/signup', data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
