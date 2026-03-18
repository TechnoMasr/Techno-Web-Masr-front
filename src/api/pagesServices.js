import api from "./api";

export const getTestimonials = async () => {
  const { data } = await api.get(`/testimonials`);
  return data?.data || [];
};

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

export const getPortfolio = async () => {
  const { data } = await api.get(`/portfolio`);
  return data?.data || [];
};

export const getPortfolioDetails = async (slug) => {
  const { data } = await api.get(`/portfolio/${slug}`);
  return data?.data || [];
};
