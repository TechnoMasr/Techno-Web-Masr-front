import PageBanner from "@/components/sections/PageBanner";
import WhyChooseAiTools from "./section/WhyChooseAiTools";
import AiToolsCards from "./section/AiToolsCards";
import { useQuery } from "@tanstack/react-query";
import { getAITools, getAIToolsHome } from "@/api/AIToolsServices";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useTranslation } from "react-i18next";
import SeoManager from "@/utils/SeoManager";

const AiTools = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  // قراءة القيم مباشرة من الـ URL مع وضع قيم افتراضية
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "all";

  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [offset, setOffset] = useState(0);
  const [allTools, setAllTools] = useState([]);
  const [paginationMeta, setPaginationMeta] = useState({});

  // دالة لتحديث الـ URL عند تغيير السيرش أو الفئة
  const setSearch = (value) => {
    setSearchParams((prev) => {
      if (value) prev.set("search", value);
      else prev.delete("search");
      return prev;
    });
  };

  const setCategory = (value) => {
    setSearchParams((prev) => {
      if (value && value !== "all") prev.set("category", value);
      else prev.delete("category");
      return prev;
    });
  };

  // عمل Debounce للبحث القادم من الـ URL
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setOffset(0);
      setAllTools([]);
    }, 400);
    return () => clearTimeout(handler);
  }, [search]);

  // عمل reset فقط عند تغيير الـ category في الـ URL
  useEffect(() => {
    setOffset(0);
    setAllTools([]);
  }, [category]);

  const {
    data: aiToolsData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["AiTools", { category, search: debouncedSearch, offset }],
    queryFn: getAITools,
    keepPreviousData: true,
  });

  useEffect(() => {
    if (!aiToolsData) return;

    const newTools = aiToolsData?.ai_tools || [];

    setAllTools((prev) => (offset === 0 ? newTools : [...prev, ...newTools]));
    setPaginationMeta({
      hasMore: aiToolsData?.has_more,
      nextOffset: aiToolsData?.next_offset,
      remaining: aiToolsData?.remaining,
      total: aiToolsData?.total,
    });
  }, [aiToolsData, offset]); // إضافة offset كـ dependency لضمان دقة الكود

  const handleLoadMore = () => {
    setOffset(paginationMeta.nextOffset);
  };

  const { data: homeData, isLoading: isLoadingHome } = useQuery({
    queryKey: ["AiToolsHome"],
    queryFn: getAIToolsHome,
  });

  return (
    <>
      <SeoManager
        title={homeData?.seo?.meta_title}
        description={homeData?.seo?.meta_description}
        keywords={homeData?.seo?.keywords}
        canonical={homeData?.seo?.canonical_url}
        ogImage={homeData?.seo?.og_image_url}
      />

      <main className="bg-slate-50">
        <PageBanner
          title={homeData?.intro?.title || t("AiTools.heroTitle")}
          description={
            homeData?.intro?.description || t("AiTools.heroDescription")
          }
          loading={isLoadingHome}
        />

        <div className="container pagePadding space-y-8 lg:space-y-16">
          <AiToolsCards
            ai_tools={allTools}
            totalCount={paginationMeta.total || 0}
            isLoading={isLoading}
            isFetching={isFetching}
            hasMore={paginationMeta.hasMore}
            remaining={paginationMeta.remaining}
            onLoadMore={handleLoadMore}
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
          />

          <WhyChooseAiTools
            data={homeData?.why_choose_us}
            loading={isLoadingHome}
          />
        </div>
      </main>
    </>
  );
};

export default AiTools;
