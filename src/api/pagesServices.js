import api from "./api";

export const getPartners = async () => {
  const { data } = await api.get(`/our-clients`);
  return data?.data || [];
};