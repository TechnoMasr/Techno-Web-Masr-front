import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  X,
  Plus,
  ChevronDown,
  ChevronUp,
  Trash2,
  Scale,
  Star,
  ExternalLink,
  Lightbulb,
  Link2,
  TableProperties,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, useParams } from "react-router";
import defaultImage from "@/assets/icons/youtube.svg";
import {
  getAIToolsCategories,
  getAIToolsComparisons,
} from "@/api/AIToolsServices";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

const CompareSection = ({ currentProduct, tips }) => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const [isSelectorOpen, setIsSelectorOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all"); // إضافة الـ state المفقودة للفئة
  const [selectedTools, setSelectedTools] = useState([]);

  useEffect(() => {
    setSelectedTools([]);
    setSearchQuery(""); // خطوة إضافية اختيارية: تصفير حقل البحث أيضاً لراحة المستخدم
  }, [currentProduct?.id]);

  // جلب البيانات الحقيقية من الـ API
  const { data: aiToolsComparisons, isLoading: isToolsLoading } = useQuery({
    queryKey: ["AiToolsComparisons"],
    queryFn: getAIToolsComparisons,
  });

  const { data: categoriesData, isLoading: categoriesLoading } = useQuery({
    queryKey: ["AiToolsCategories"],
    queryFn: getAIToolsCategories,
  });

  // استخراج مصفوفة الأدوات من الداتا المستلمة (تتعامل مع الهيكل المتوقع)
  const toolsList = aiToolsComparisons?.tools || [];

  // دالة الفلترة والبحث الذكي في الفرونت إند (Client-side Filtering)
  const filteredTools = useMemo(() => {
    return toolsList.filter((tool) => {
      // 0. استبعاد الأداة الحالية التي يتصفحها المستخدم الآن لمنع مقارنة الشيء بنفسه
      if (currentProduct?.id && String(tool.id) === String(currentProduct.id)) {
        return false;
      }

      // 1. فلترة البحث بالاسم أو الوصف القصير
      const matchesSearch =
        !searchQuery ||
        tool.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.short_description
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());

      // 2. فلترة الفئة الذكية والمضمونة
      const matchesCategory =
        category === "all" ||
        String(tool.category_id) === String(category) ||
        String(tool.category?.id) === String(category) ||
        tool.category?.name === category;

      return matchesSearch && matchesCategory;
    });
  }, [toolsList, searchQuery, category, currentProduct?.id]); // إضافة currentProduct.id للمصفوفة لضمان التحديث عند تغيير الأداة

  const handleAddTool = (tool) => {
    if (selectedTools.length >= 3) return; // حد أقصى 3 أدوات
    if (selectedTools.some((t) => t.id === tool.id)) return;
    setSelectedTools([...selectedTools, tool]);
  };

  const handleRemoveTool = (toolId) => {
    setSelectedTools(selectedTools.filter((t) => t.id !== toolId));
  };

  return (
    <section className="w-full flex flex-col gap-6">
      <div className="bg-white rounded-2xl border shadow-sm p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <div className="flex items-center justify-center rounded-full w-8 h-8 bg-secondary/50">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              {t("CompareSection.selectToolsTitle")}
            </h2>
            <p className="text-sm mt-1">
              {t("CompareSection.selectToolsDescription", {
                name: currentProduct?.name,
              })}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsSelectorOpen(!isSelectorOpen)}
              className="text-xs font-semibold gap-1.5 rounded-xl w-full"
            >
              {isSelectorOpen ? (
                <>
                  {t("CompareSection.hideTools")}{" "}
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  {t("CompareSection.showTools")}{" "}
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>
            {selectedTools.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedTools([])}
                className="text-xs text-rose-700 bg-rose-100 hover:text-rose-700 hover:bg-rose-200 rounded-xl w-full"
              >
                {t("CompareSection.clearAll")}
              </Button>
            )}
          </div>
        </div>

        {isSelectorOpen && (
          <div className="space-y-4 animate-in fade-in-50 duration-200 mt-6">
            {/* عرض الأدوات المحددة حالياً */}
            <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-50 rounded-xl border">
              <span className="text-xs font-bold pl-2 border-l">
                {t("CompareSection.selectedTools", {
                  count: selectedTools.length,
                })}
              </span>
              {selectedTools.length === 0 ? (
                <span className="text-xs italic text-slate-400">
                  {t("CompareSection.noToolsSelected")}
                </span>
              ) : (
                selectedTools.map((tool) => (
                  <span
                    key={tool.id}
                    className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-semibold border"
                  >
                    {tool.name}
                    <X
                      className="w-4 h-4 cursor-pointer hover:text-red-600"
                      onClick={() => handleRemoveTool(tool.id)}
                    />
                  </span>
                ))
              )}
            </div>

            {/* حقل البحث والفلترة */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
              <div className="relative">
                <Input
                  type="text"
                  placeholder={t("CompareSection.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full ps-10 h-11"
                />
                <Search className="absolute start-3 top-3.5 h-4 w-4 text-slate-400" />
              </div>

              <Select
                value={category}
                onValueChange={setCategory}
                disabled={categoriesLoading}
              >
                <SelectTrigger className="w-full h-11 cursor-pointer">
                  <SelectValue
                    placeholder={t("CompareSection.selectCategory")}
                  />
                </SelectTrigger>
                <SelectContent className="rounded-xl" position="popper">
                  <SelectItem value="all">
                    {t("CompareSection.allCategories")}
                  </SelectItem>
                  {categoriesData?.categories?.map((cat) => (
                    <SelectItem key={cat.id} value={String(cat.id)}>
                      {cat.name} ({cat.tools_count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* قائمة الأدوات المتاحة للاختيار بعد الفلترة */}
            <div className="max-h-60 overflow-y-auto border rounded-xl divide-y divide-slate-100 bg-white custom_scrollbar">
              {isToolsLoading ? (
                <div className="p-4 text-center text-sm text-slate-500">
                  {t("CompareSection.loadingTools")}
                </div>
              ) : filteredTools.length === 0 ? (
                <div className="p-4 text-center text-sm text-slate-400">
                  {t("CompareSection.noMatchingTools")}
                </div>
              ) : (
                filteredTools.map((tool) => {
                  const isSelected = selectedTools.some(
                    (t) => t.id === tool.id,
                  );
                  return (
                    <div
                      key={tool.id}
                      className="flex items-center justify-between gap-2 p-3 hover:bg-slate-50/80 transition-colors"
                    >
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center flex-wrap gap-2">
                          <span className="text-sm font-bold text-slate-800">
                            {tool.name}
                          </span>
                          {tool.category?.name && (
                            <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                              {tool.category.name}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span className="flex items-center gap-0.5 text-amber-500 font-semibold">
                            <Star className="w-3 h-3 fill-amber-500" />
                            {tool.rating}
                          </span>
                          <span>•</span>
                          <span>
                            {t("CompareSection.pricing")} {tool.pricing_type}
                          </span>
                        </div>
                      </div>

                      {isSelected ? (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleRemoveTool(tool.id)}
                          className="text-xs bg-rose-100 text-rose-600 hover:bg-rose-200 hover:text-rose-700 font-semibold"
                        >
                          <Trash2 className="w-3.5 h-3.5" />{" "}
                          {t("CompareSection.remove")}
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => handleAddTool(tool)}
                          disabled={selectedTools.length >= 3}
                          className="text-xs font-semibold"
                        >
                          <Plus className="w-3.5 h-3.5" />{" "}
                          {t("CompareSection.add")}
                        </Button>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>

      {/* سكشن جدول مقارنة الأدوات التفصيلي */}
      {selectedTools.length > 0 && (
        <div className="bg-white rounded-2xl border shadow-sm p-4 md:p-6 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <div className="flex items-center justify-center rounded-full w-8 h-8 bg-secondary/50">
                <TableProperties className="w-5 h-5 text-primary" />
              </div>
              {t("CompareSection.comparisonTableTitle")}
            </h2>
            <p className="text-sm mt-1">
              {t("CompareSection.comparisonTableDesc")}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px] table-fixed">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-2 text-sm font-bold text-start w-1/10 align-top text-slate-900">
                    {t("CompareSection.criteria")}
                  </th>
                  {/* الأداة الحالية الثابتة دائماً */}
                  <th className="py-3 px-2 w-1/4 align-top">
                    <div className="flex flex-col items-center text-center gap-1">
                      <div className="w-18 h-18 p-2 rounded-xl bg-slate-100 flex items-center justify-center">
                        <img
                          src={currentProduct?.logo}
                          alt={currentProduct?.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm font-bold text-slate-900">
                        {currentProduct?.name}
                      </span>
                      <span className="text-[10px] font-semibold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full mt-1">
                        {t("CompareSection.currentTool")}
                      </span>
                    </div>
                  </th>
                  {/* الأدوات المحددة ديناميكياً */}
                  {selectedTools.map((tool) => (
                    <th key={tool.id} className="py-3 px-2 w-1/4 align-top">
                      <div className="flex flex-col items-center text-center gap-1 relative group">
                        <div className="w-18 h-18 p-2 rounded-xl bg-slate-100 flex items-center justify-center">
                          <img
                            src={tool.logo || defaultImage}
                            alt={tool.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-sm font-bold text-slate-900">
                          {tool.name}
                        </span>
                        <button
                          onClick={() => handleRemoveTool(tool.id)}
                          className="absolute -top-1 -start-1 bg-rose-700 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {/* صف التقييم */}
                <tr>
                  <td className="py-3 px-2 text-xs font-bold align-top">
                    {t("CompareSection.rating")}
                  </td>
                  <td className="py-3 px-2 text-center text-sm font-bold align-top">
                    <span className="inline-flex items-center gap-1 justify-center text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500" />
                      {currentProduct?.rating}
                    </span>
                  </td>
                  {selectedTools.map((tool) => (
                    <td
                      key={tool.id}
                      className="py-3 px-2 text-center text-sm font-bold align-top"
                    >
                      <span className="inline-flex items-center gap-1 justify-center text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        {currentProduct?.rating}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* صف التسعير */}
                <tr>
                  <td className="py-3 px-2 text-xs font-bold align-top">
                    {t("CompareSection.pricingLabel")}
                  </td>
                  <td className="py-3 px-2 text-center text-xs font-bold align-top">
                    {currentProduct?.pricing_type}
                  </td>
                  {selectedTools.map((tool) => (
                    <td
                      key={tool.id}
                      className="py-3 px-2 text-center text-xs font-bold align-top"
                    >
                      {tool.pricing_type}
                    </td>
                  ))}
                </tr>

                {/* صف الفئة */}
                <tr>
                  <td className="py-3 px-2 text-xs font-bold align-top">
                    {t("CompareSection.category")}
                  </td>
                  <td className="py-3 px-2 text-center text-xs font-medium text-slate-600 align-top">
                    {currentProduct?.category?.name}
                  </td>
                  {selectedTools.map((tool) => (
                    <td
                      key={tool.id}
                      className="py-3 px-2 text-center text-xs font-medium text-slate-600 align-top"
                    >
                      {tool.category?.name}
                    </td>
                  ))}
                </tr>

                {/* صف الوصف */}
                <tr>
                  <td className="py-3 px-2 text-xs font-bold align-top">
                    {t("CompareSection.description")}
                  </td>
                  <td className="text-center py-3 px-2 text-xs leading-relaxed font-medium align-top">
                    {currentProduct?.short_description}
                  </td>
                  {selectedTools.map((tool) => (
                    <td
                      key={tool.id}
                      className="text-center py-3 px-2 text-xs leading-relaxed font-medium align-top"
                    >
                      {tool.short_description}
                    </td>
                  ))}
                </tr>

                {/* صف المميزات */}
                <tr>
                  <td className="py-3 px-2 text-xs font-bold align-top">
                    {t("CompareSection.features")}
                  </td>
                  <td className="py-3 px-2 align-top text-center">
                    <div className="flex flex-col gap-1.5">
                      {currentProduct?.main_features &&
                      currentProduct.main_features.length > 0 ? (
                        currentProduct.main_features.map((f, i) => {
                          const featureContent =
                            typeof f === "object" ? f.content : f;
                          const featureKey =
                            typeof f === "object" ? f.id || i : i;

                          return (
                            <div
                              key={featureKey}
                              className="flex items-center justify-center gap-1.5 bg-slate-100 p-1.5 rounded-md text-xs font-semibold text-slate-800"
                            >
                              <span>{featureContent}</span>
                            </div>
                          );
                        })
                      ) : (
                        <span className="text-xs text-slate-400 italic">
                          {t("CompareSection.unspecified")}
                        </span>
                      )}
                    </div>
                  </td>
                  {selectedTools.map((tool) => (
                    <td
                      key={tool.id}
                      className="py-3 px-2 align-top text-center"
                    >
                      <div className="flex flex-col gap-1.5">
                        {tool.main_features && tool.main_features.length > 0 ? (
                          tool.main_features.map((feat) => (
                            <div
                              key={feat.id}
                              className="flex items-center justify-center gap-1.5 bg-slate-100 p-1.5 rounded-md text-xs font-semibold text-slate-800"
                            >
                              <span>{feat.content}</span>
                            </div>
                          ))
                        ) : (
                          <span className="text-xs text-slate-400 italic">
                            {t("CompareSection.unspecified")}
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* صف الإجراءات */}
                <tr>
                  <td className="py-3 px-2 text-xs font-bold align-top">
                    {t("CompareSection.actions")}
                  </td>
                  <td className="py-3 px-2 text-center align-top">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg inline-block">
                      {t("CompareSection.currentPage")}
                    </span>
                  </td>
                  {selectedTools.map((tool) => (
                    <td
                      key={tool.id}
                      className="py-3 px-2 text-center align-top"
                    >
                      <Link to={`/${lang}/ai-tools/${tool.slug}`}>
                        <Button
                          size="sm"
                          className="h-8 text-xs font-bold gap-1 rounded-lg w-full max-w-35 mx-auto"
                        >
                          {t("CompareSection.viewDetails")}{" "}
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* الجزء السفلي الخاص بالنصائح */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t bg-slate-50/50">
            {tips?.length > 0 && (
              <div className="space-y-2.5">
                <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-500" />{" "}
                  {t("CompareSection.tipsTitle")}
                </h4>
                <ul className="text-xs space-y-1.5 list-disc list-inside ps-1 font-medium text-slate-700">
                  {tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="space-y-2.5">
              <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <Link2 className="w-4 h-4 text-primary" />{" "}
                {t("CompareSection.usefulLinks")}
              </h4>
              <ul className="space-y-1.5 ps-1 text-primary text-sm">
                <li>
                  <a href="#all" className="hover:underline">
                    {t("CompareSection.browseByCategory")}
                  </a>
                </li>
                <li>
                  <a href="#tools" className="hover:underline">
                    {t("CompareSection.viewAllTools")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CompareSection;
