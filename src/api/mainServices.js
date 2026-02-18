import api from "./api";

export const getSettings = async () => {
  const { data } = await api.get("/all-settings");
  return data?.data || [];
};

export const sendContact = async (formData) => {
  const { data } = await api.post(`/contact-us`, formData);
  return data?.data || [];
};
