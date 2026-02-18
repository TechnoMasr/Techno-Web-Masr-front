import api from "./api";

export const getFaqs = async () => {
  const { data } = await api.get("/faqs");
  return data || {};
};

export const getFeatures = async () => {
  const { data } = await api.get("/features");
  return data?.data || [];
};

export const getBanner = async () => {
  const { data } = await api.get("/banner");
  return data?.data || [];
};

export const getHero = async () => {
  const { data } = await api.get("/hero");
  return data?.data || [];
};
