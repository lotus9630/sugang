import axiosInstance from './axios';

export const getUser = async () => {
  try {
    const response = await axiosInstance.get('/student/current');
    return { data: response.data, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};

export const registerSubject = async (subjectCode) => {
  try {
    const response = await axiosInstance.post(`/student/subject`, { subjectCode });

    return { data: response.data, error: false };
  } catch (error) {
    console.log(error.message);
    return { data: null, error: true };
  }
};
