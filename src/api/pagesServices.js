import api from "./api";

export const getPages = async (page) => {
  const { data } = await api.get(`/pages/${page}`);
  return data?.data || [];
};
