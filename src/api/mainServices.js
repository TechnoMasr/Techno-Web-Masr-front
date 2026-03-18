import api from "./api";

export const getSettings = async () => {
  const { data } = await api.get("/settings");
  return data?.data || [];
};

export const getFooter = async () => {
  const { data } = await api.get("/footer-and-social-links");
  return data?.data || {};
};

export const getTestimonials = async () => {
  const { data } = await api.get("/testimonials-home");
  return data?.data || {};
};
