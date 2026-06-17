import api from "./api";

export const getHeaderMenu = async () => {
  const { data } = await api.get("/utilize/headerMenu");
  return data?.data || { pages: [], ourService: [], products: [] };
};

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

export const getPortfolio = async (slug) => {
  const url = slug ? `/portfolio/category/${slug}` : `/portfolio`;
  const { data } = await api.get(`${url}`);

  return data?.data || [];
};

export const getPortfolioCategories = async () => {
  const { data } = await api.get(`/portfolio/categories`);
  return data?.data || [];
};

export const getPortfolioDetails = async (slug) => {
  const { data } = await api.get(`/portfolio/${slug}`);
  return data?.data || [];
};

export const pageDetails = async (slug) => {
  const { data } = await api.get(`pages/${slug}`);
  return data?.data || {};
};

export const getBlogDetails = async (slug) => {
  const { data } = await api.get(`/blogs/${slug}`);
  return data?.data || {};
};

export const getBlogs = async () => {
  const { data } = await api.get(`/blogs`);
  return data?.data || [];
};
