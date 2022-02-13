import axiosInstance from './axios';

export const getAllStudent = async () => {
  try {
    const response = await axiosInstance.get('/admin/all/user');
    return { data: response.data, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};

export const deleteStudent = async (studentNumber) => {
  try {
    const response = await axiosInstance.delete(`/admin/student/${studentNumber}`);
    return { data: null, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};
