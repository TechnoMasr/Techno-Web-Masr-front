import { getAIToolsCategories } from "@/api/AIToolsServices";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";

const FiltersSections = ({
  search,
  setSearch,
  category,
  setCategory,
  currentCount,
  totalCount,
}) => {
  const { t } = useTranslation();

  const { data: categoriesData, isLoading: categoriesLoading } = useQuery({
    queryKey: ["AiToolsCategories"],
    queryFn: getAIToolsCategories,
  });

  return (
    <section className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
      <div className="relative w-full md:w-96">
        <Input
          type="text"
          placeholder={t("FiltersSections.searchPlaceholder")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full ps-10 pr-4 h-11 bg-slate-50 rounded-xl transition-all"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none text-slate-400" />
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto justify-end">
        <span className="text-sm whitespace-nowrap text-slate-500">
          {t("FiltersSections.showingCount", { current: currentCount || 0, total: totalCount || 0 })}
        </span>

        <Select
          value={category}
          onValueChange={setCategory}
          disabled={categoriesLoading}
        >
          <SelectTrigger className="w-45 h-11 bg-slate-50 rounded-xl font-medium focus-visible:border-primary focus-visible:ring-primary/50">
            <SelectValue placeholder={t("FiltersSections.selectCategory")} />
          </SelectTrigger>
          <SelectContent className="rounded-xl" position="popper">
            <SelectItem value="all">{t("FiltersSections.allCategories", { total: totalCount || 0 })}</SelectItem>
            {categoriesData?.categories?.map((cat) => (
              <SelectItem key={cat.id} value={String(cat.id)}>
                {cat.name} ({cat.tools_count})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </section>
  );
};

export default FiltersSections;
