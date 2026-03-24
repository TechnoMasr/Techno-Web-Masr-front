import api from "./api";

export const sendContactUs = async (formData) => {
  const { data } = await api.post(`/contacts`, formData);
  return data?.data || [];
};

export const sendServiceRequest = async (formData) => {
  const { data } = await api.post(`/product-contacts`, formData);
  return data?.data || [];
};

export const getContactUsPage = async () => {
  const { data } = await api.get(`/branches`);
  return data?.data || [];
};

export const getBranchDetails = async (slug) => {
  const { data } = await api.get(`/branches/${slug}`);
  return data?.data || [];
};

export const getContactProducts = async () => {
  const { data } = await api.get(`/products/select`);
  return data?.data || [];
};

export const getContactServices = async () => {
  const { data } = await api.get(`/our-services/select`);
  return data?.data || [];
};
