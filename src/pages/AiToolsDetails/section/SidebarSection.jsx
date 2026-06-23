import { Button } from "@/components/ui/button";
import {
  BookOpenText,
  Calendar,
  DollarSign,
  ExternalLink,
  Layers,
  MessageSquare,
  Star,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const SidebarSection = ({ data }) => {
  const { t } = useTranslation();
  const date = new Date(data?.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="lg:col-span-1 lg:sticky lg:top-28 flex flex-col gap-4">
      <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
          <div className="flex items-center justify-center rounded-full w-8 h-8 bg-secondary/50">
            <BookOpenText className="w-5 h-5 text-primary" />
          </div>
          {t("SidebarSection.quickInfo")}
        </h2>

        <div className="flex flex-col gap-2 mb-6">
          <div className="flex justify-between items-center bg-slate-50/50 p-2 rounded-xl">
            <span className="text-xs font-medium flex items-center gap-2">
              <Layers className="w-4 h-4" /> {t("SidebarSection.category")}
            </span>
            <span className="text-xs md:text-sm text-slate-700 font-bold">
              {data?.category?.name}
            </span>
          </div>

          <div className="flex justify-between items-center bg-slate-50/50 p-2 rounded-xl">
            <span className="text-xs font-medium flex items-center gap-2">
              <DollarSign className="w-4 h-4" />{" "}
              {t("SidebarSection.pricingType")}
            </span>
            <span className="text-xs md:text-sm text-slate-700 font-bold">
              {data?.pricing_type}
            </span>
          </div>

          <div className="flex justify-between items-center bg-slate-50/50 p-2 rounded-xl">
            <span className="text-xs font-medium flex items-center gap-2">
              <Star className="w-4 h-4" /> {t("SidebarSection.rating")}
            </span>
            <span className="text-xs md:text-sm text-slate-700 font-bold flex items-center gap-1">
              {data?.rating}
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />{" "}
            </span>
          </div>

          <div className="flex justify-between items-center bg-slate-50/50 p-2 rounded-xl">
            <span className="text-xs font-medium flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />{" "}
              {t("SidebarSection.reviewsCount")}
            </span>
            <span className="text-xs md:text-sm text-slate-700 font-bold">
              {t("SidebarSection.reviewsCountValue", {
                count: data?.reviews_count,
              })}
            </span>
          </div>

          <div className="flex justify-between items-center bg-slate-50/50 p-2 rounded-xl">
            <span className="text-xs font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {t("SidebarSection.addedDate")}
            </span>
            <span className="text-xs md:text-sm text-slate-700 font-bold">
              {date}
            </span>
          </div>
        </div>

        {data?.link && (
          <a
            href={data?.link}
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <Button className="w-full gap-2">
              {t("SidebarSection.visitWebsite")}
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default SidebarSection;
