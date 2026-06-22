import { Button } from "@/components/ui/button";
import {
  Calendar,
  DollarSign,
  ExternalLink,
  Layers,
  MessageSquare,
  Star,
} from "lucide-react";

const SidebarSection = () => {
  const tool = {
    category: "إنتاج الفيديو والصوت",
    pricingType: "مجاني جزئياً",
    rating: 4.9,
    reviewsCount: 89,
    addedDate: "١٢ يوليو ٢٠٢٥",
  };

  return (
    <div className="lg:col-span-1 lg:sticky lg:top-24 flex flex-col gap-4">
      <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-6 border-b pb-3">
          معلومات سريعة
        </h3>

        <div className="flex flex-col gap-4 mb-6">
          <div className="flex justify-between items-center bg-slate-50/50 p-3 rounded-xl">
            <span className="text-xs font-medium flex items-center gap-2">
              <Layers className="w-4 h-4" /> الفئة:
            </span>
            <span className="text-xs md:text-sm text-slate-700 font-bold">
              {tool.category}
            </span>
          </div>

          <div className="flex justify-between items-center bg-slate-50/50 p-3 rounded-xl">
            <span className="text-xs font-medium flex items-center gap-2">
              <DollarSign className="w-4 h-4" /> نوع التسعير:
            </span>
            <span className="text-xs md:text-sm text-slate-700 font-bold">
              {tool.pricingType}
            </span>
          </div>

          <div className="flex justify-between items-center bg-slate-50/50 p-3 rounded-xl">
            <span className="text-xs font-medium flex items-center gap-2">
              <Star className="w-4 h-4" /> التقييم:
            </span>
            <span className="text-xs md:text-sm text-slate-700 font-bold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />{" "}
              {tool.rating}
            </span>
          </div>

          <div className="flex justify-between items-center bg-slate-50/50 p-3 rounded-xl">
            <span className="text-xs font-medium flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> عدد
              المراجعات:
            </span>
            <span className="text-xs md:text-sm text-slate-700 font-bold">
              {tool.reviewsCount} مراجعة
            </span>
          </div>

          <div className="flex justify-between items-center bg-slate-50/50 p-3 rounded-xl">
            <span className="text-xs font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4" /> تاريخ الإضافة:
            </span>
            <span className="text-xs md:text-sm text-slate-700 font-bold">
              {tool.addedDate}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <a href="#" className="w-full">
            <Button className="w-full gap-2">
              زيارة الموقع الرسمي
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
          <Button variant="outline">عرض التفاصيل الكاملة</Button>
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
