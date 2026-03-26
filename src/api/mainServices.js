import api from "./api";

export const getSettings = async () => {
  const { data } = await api.get("/settings");
  return data?.data || [];
};

export const getFooter = async () => {
  const { data } = await api.get("/footer");
  return data?.data || {};
};

export const getTestimonials = async () => {
  const { data } = await api.get("/testimonials-home");
  return data?.data || {};
};

export const getServicesSlider = async () => {
  const { data } = await api.get("/serviceSlider");
  return data?.data || {};
};

export const getPortfolioSlider = async () => {
  const { data } = await api.get("/portfolioSlider");
  return data?.data || {};
};

export const getFaq = async () => {
  const { data } = await api.get("/fqas");
  return data?.data || {};
};

export const getHeadCode = async () => {
  const { data } = await api.get("/settings/codes");
  return data?.data || {};
};
