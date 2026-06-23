import api from "./api";

export const getAITools = async ({ queryKey }) => {
  const [_, { category, search, offset }] = queryKey;

  const params = new URLSearchParams();
  if (category && category !== "all") params.append("category_id", category);
  if (search) params.append("search", search);
  if (offset) params.append("offset", offset); // offset=0 مش لازم تبعته

  const { data } = await api.get(`/ai-tools?${params.toString()}`);
  return data?.data || {};
};

export const getAIToolsHome = async () => {
  const { data } = await api.get(`/ai-home`);
  return data?.data || {};
};

export const getAIToolsCategories = async () => {
  const { data } = await api.get(`/ai-categories`);
  return data?.data || {};
};

export const getAIToolDetails = async (slug) => {
  const { data } = await api.get(`/ai-tools/${slug}`);
  return data?.data || {};
};

export const getAIToolsComparisons = async () => {
  const { data } = await api.get(`/ai-comparisons`);
  return data?.data || {};
};

export const getAIToolsCategoriesPage = async () => {
  const { data } = await api.get(`/ai-categories/page-data`);
  return data?.data || {};
};
