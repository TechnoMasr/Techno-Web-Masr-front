import api from "./api";

export const getHome = async () => {
  const { data } = await api.get("pages/home");
  return data?.data || {};
};

export const getAbout = async () => {
  const { data } = await api.get("pages/about");
  return data?.data || {};
};