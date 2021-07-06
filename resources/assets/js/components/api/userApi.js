import axiosClient from "./axiosClient";

const userAPI = {
  getAll: (params) => {
    const url = "/user";
    return axiosClient.get(url, { params });
  },
  getEdit: (id, params) => {
    const url = `/user/${id}/edit`;
    return axiosClient.get(url, { params });
  },
  addUser: (user, params) => {
    const url = "/user";
    return axiosClient.post(url, user, { params });
  },
  updateUser: (id, user, params) => {
    const url = `/user/${id}`;
    return axiosClient.put(url, user, { params });
  },
  deleteUSer: (id, params) => {
    const url = `/user/${id}`;
    return axiosClient.delete(url, { params });
  },
};

export default userAPI;
