import axiosInstance from './axios';

const getSubject = async (kind) => {
  try {
    const response = await axiosInstance.get(`/subject/${kind}`);
    return { data: response.data, error: false };
  } catch (error) {
    console.log(error);
    return { data: '', error: true };
  }
};

export const getAllSubject = async () => {
  return getSubject('all');
};
export const getMajorSubject = async () => {
  return getSubject('major');
};
export const getLiberalSubject = async () => {
  return getSubject('liberal');
};
export const getBaseSubject = async () => {
  return getSubject('base');
};
