import api from "./api";

export const getPartners = async () => {
  const { data } = await api.get(`/our-clients`);
  return data?.data || [];
};

export const getProducts = async () => {
  const { data } = await api.get(`/products`);
  return data?.data || [];
};

export const getProductDetails = async (slug) => {
  const { data } = await api.get(`/products/${slug}`);
  return data?.data || [];
};

export const getServices = async () => {
  const { data } = await api.get(`/services`);
  return data?.data || [];
};

export const getServiceDetails = async (slug) => {
  const { data } = await api.get(`/services/${slug}`);
  return data?.data || [];
};
