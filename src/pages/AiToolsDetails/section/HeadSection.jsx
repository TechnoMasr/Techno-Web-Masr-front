import { Calendar, Layers, Star } from "lucide-react";

const HeadSection = ({ data }) => {
  const date = new Date(data?.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 justify-between relative overflow-hidden">
      <div className="w-24 h-24 bg-slate-100 p-3 rounded-2xl flex items-center justify-center shadow-inner shrink-0 self-center md:self-start">
        <img
          src={data?.logo}
          alt={data?.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h1 className="text-2xl md:text-3xl font-black text-slate-900">
            {data?.name}
          </h1>
          <span className="text-xs font-semibold bg-secondary/50 text-primary px-3 py-1 rounded-full">
            {data?.pricing_type}
          </span>
        </div>
        <p className="text-sm md:text-base leading-relaxed mb-6">
          {data?.short_description}
        </p>

        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-4 border-t text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg text-slate-600">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />{" "}
            {data?.rating} ({data?.reviews_count} مراجعة)
          </span>
          <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg text-slate-600">
            <Layers className="w-3.5 h-3.5 text-blue-500" />{" "}
            {data?.category?.name}
          </span>
          <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg text-slate-600">
            <Calendar className="w-3.5 h-3.5 text-emerald-500" /> أضيفت في:{" "}
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeadSection;
