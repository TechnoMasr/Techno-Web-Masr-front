import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const FiltersSections = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
      <div className="relative w-full md:w-96">
        <Input
          type="text"
          placeholder="ابحث عن الأدوات (اسم الأداة، الوصف)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full ps-10 pe-4 h-11 bg-slate-50 rounded-xl transition-all"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none" />
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto justify-end">
        <span className="text-sm whitespace-nowrap">عرض {4} من 231 أداة</span>

        <Select defaultValue="all">
          <SelectTrigger className="w-45 h-11 bg-slate-50 rounded-xl font-medium">
            <SelectValue placeholder="اختر الفئة" />
          </SelectTrigger>
          <SelectContent className="rounded-xl" position="popper">
            <SelectItem value="all" className="">
              جميع الفئات (231)
            </SelectItem>
            <SelectItem value="design" className="">
              تصميم
            </SelectItem>
            <SelectItem value="video" className="">
              فيديو
            </SelectItem>
            <SelectItem value="education" className="">
              تعليم ودراسة
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
};

export default FiltersSections;
