import React, { useState } from "react";
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
import image from "@/assets/icons/youtube.svg";

// بيانات تجريبية لمحاكاة البحث والاختيار بناءً على الصور المرفقة
const allToolsDatabase = [
  {
    id: "davinci",
    name: "DaVinci Resolve",
    category: "إنتاج الفيديو والصوت",
    rating: 4.9,
    pricing: "مجاني جزئياً",
    desc: "برنامج تحرير ومونتاج فيديو احترافي وقوي للغاية، يقدم خطة مجانية بقدرات هائلة، ويتضمن أدوات ذكاء اصطناعي...",
    features: [
      "محرر فيديو احترافي متعدد المسارات",
      "تصحيح ألوان هو الأقوى في الصناعة",
      "أدوات صوت متقدمة (Fairlight)",
    ],
    slug: "davinci-resolve",
    image: image,
  },
  {
    id: "photoshop",
    name: "Photoshop (Generative Fill)",
    category: "تصميم الجرافيك",
    rating: 4.9,
    pricing: "مدفوع",
    desc: "ميزة ثورية داخل برنامج Adobe Photoshop تعتمد على الذكاء الاصطناعي التوليدي لتعديل وتوسيع الصور بذكاء وسرعة.",
    features: [
      "توليد محتوى بالذكاء الاصطناعي",
      "توسيع الصور الذكي",
      "دمج عناصر احترافي",
    ],
    slug: "photoshop",
    image: image,
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "إنتاج الفيديو والصوت",
    rating: 4.8,
    pricing: "مجاني جزئياً",
    desc: "منصة رائدة في توليد الأصوات بالذكاء الاصطناعي، تشتهر بإنتاج أصوات طبيعية وواقعية جداً بمختلف اللغات.",
    features: ["توليد صوت واقعي", "استنساخ نبرات الصوت", "دعم متعدد اللغات"],
    slug: "elevenlabs",
    image: image,
  },
  {
    id: "wolfram",
    name: "WolframAlpha",
    category: "تحليل البيانات",
    rating: 4.9,
    pricing: "مجاني مع خطط مدفوعة",
    desc: "محرك معرفة حسابي، يستخدم الذكاء الاصطناعي وخوارزميات معقدة للإجابة على الأسئلة وتحليل البيانات.",
    features: [
      "محرك معرفة حسابي",
      "يجيب على الأسئلة الواقعية",
      "إجراء حسابات رياضية وفيزيائية معقدة",
    ],
    slug: "wolfram",
    image: image,
  },
  {
    id: "openai",
    name: "OpenAI",
    category: "تحليل البيانات",
    rating: 4.9,
    pricing: "مجاني مع خطط مدفوعة",
    desc: "منصة رائدة في توليد الأصوات بالذكاء الاصطناعي، تشتهر بإنتاج أصوات طبيعية وواقعية جداً بمختلف اللغات.",
    features: ["توليد صوت واقعي", "استنساخ نبرات الصوت", "دعم متعدد اللغات"],
    slug: "openai",
    image: image,
  },
];

const currentProduct = {
  id: "wolfram",
  name: "WolframAlpha",
  category: "تحليل البيانات",
  rating: 4.9,
  pricing: "مجاني مع خطط مدفوعة",
  desc: "محرك معرفة حسابي، يستخدم الذكاء الاصطناعي وخوارزميات معقدة للإجابة على الأسئلة الواقعية من خلال إجراء عمليات حسابية...",
  features: [
    "محرك معرفة حسابي",
    "يجيب على الأسئلة الواقعية",
    "إجراء حسابات رياضية وفيزيائية معقدة",
  ],
  slug: "wolfram",
  image: image,
};

const CompareSection = () => {
  const { lang } = useParams();
  const [isSelectorOpen, setIsSelectorOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTools, setSelectedTools] = useState([]);

  const handleAddTool = (tool) => {
    if (selectedTools.length >= 3) return; // حد أقصى 3 أدوات
    if (selectedTools.some((t) => t.id === tool.id)) return;
    setSelectedTools([...selectedTools, tool]);
  };

  const handleRemoveTool = (toolId) => {
    setSelectedTools(selectedTools.filter((t) => t.id !== toolId));
  };

  return (
    <section className="w-full flex flex-col gap-6" dir="rtl">
      {/* سكشن صندوق اختيار وعرض الأدوات المتاحة للمقارنة */}
      <div className="bg-white rounded-2xl border shadow-sm p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <div className="flex items-center justify-center rounded-full w-8 h-8 bg-secondary/50">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              اختر أدوات للمقارنة
            </h2>
            <p className="text-sm mt-1">
              اختر أدوات أخرى لمقارنتها مع{" "}
              <span className="font-semibold text-slate-700">
                {currentProduct.name}
              </span>{" "}
              واتخذ قراراً مدروساً بناءً على المميزات والتسعير والتقييمات.
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
                  إخفاء أدوات المقارنة <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  عرض أدوات المقارنة <ChevronDown className="w-4 h-4" />
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
                مسح جميع الأدوات
              </Button>
            )}
          </div>
        </div>

        {isSelectorOpen && (
          <div className="space-y-2 animate-in fade-in-50 duration-200 mt-6">
            {/* عرض الأدوات المحددة حالياً */}
            <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-50 rounded-xl border">
              <span className="text-xs font-bold pl-2 border-l">
                الأدوات المحددة (3/{selectedTools.length}):
              </span>
              {selectedTools.length === 0 ? (
                <span className="text-xs italic">
                  لم يتم اختيار أي أداة بعد...
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

            {/* حقل البحث الذكي عن الأدوات */}
            <div className="relative">
              <Input
                type="text"
                placeholder="ابحث عن أداة لإضافتها للمقارنة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full ps-10 h-11"
              />
              <Search className="absolute right-3 top-3.5 h-4 w-4 " />
            </div>

            <Select defaultValue="all">
              <SelectTrigger className="w-full h-11 cursor-pointer">
                <SelectValue placeholder="اختر الفئة" />
              </SelectTrigger>
              <SelectContent className="rounded-xl" position="popper">
                <SelectItem value="all">جميع الفئات (231)</SelectItem>
                <SelectItem value="design">تصميم</SelectItem>
                <SelectItem value="video">فيديو</SelectItem>
                <SelectItem value="education">تعليم ودراسة</SelectItem>
              </SelectContent>
            </Select>

            {/* قائمة الأدوات المتاحة للاختيار */}
            <div className="max-h-60 overflow-y-auto border rounded-xl divide-y divide-slate-50 bg-white custom_scrollbar">
              {allToolsDatabase.map((tool) => {
                const isSelected = selectedTools.some((t) => t.id === tool.id);
                return (
                  <div
                    key={tool.id}
                    className="flex items-center justify-between gap-2 p-3 hover:bg-slate-50/80 transition-colors border-b"
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center flex-wrap gap-2">
                        <span className="text-sm font-bold text-slate-800">
                          {tool.name}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 font-medium">
                          {tool.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs ">
                        <span className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />{" "}
                          {tool.rating}
                        </span>
                        <span>•</span>
                        <span>التسعير: {tool.pricing}</span>
                      </div>
                    </div>

                    {isSelected ? (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleRemoveTool(tool.id)}
                        className="text-xs bg-rose-100 text-rose-600 hover:bg-rose-200 hover:text-rose-700 font-semibold"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> إزالة
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => handleAddTool(tool)}
                        disabled={selectedTools.length >= 3}
                        className="text-xs font-semibold"
                      >
                        <Plus className="w-3.5 h-3.5" /> إضافة
                      </Button>
                    )}
                  </div>
                );
              })}
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
              جدول مقارنة الأدوات
            </h2>
            <p className="text-sm mt-1">
              مقارنة تفصيلية بين الأداة الحالية والأدوات التي قمت بتحديدها.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-150 table-fixed">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-2 text-sm font-bold text-right w-1/4 align-top">
                    المعايير
                  </th>
                  {/* الأداة الحالية الثابتة دائماً */}
                  <th className="py-3 px-2 w-1/4 align-top">
                    <div className="flex flex-col items-center text-center gap-1">
                      <div className="w-12 h-12 p-2 rounded-xl bg-slate-100 flex items-center justify-center">
                        <img
                          src={currentProduct.image}
                          alt={currentProduct.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm font-bold text-slate-900">
                        {currentProduct.name}
                      </span>
                      <span className="text-[10px] font-semibold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full mt-1">
                        الأداة الحالية
                      </span>
                    </div>
                  </th>
                  {/* الأدوات المحددة ديناميكياً فقط */}
                  {selectedTools.map((tool) => (
                    <th key={tool.id} className="py-3 px-2 w-1/4 align-top">
                      <div className="flex flex-col items-center text-center gap-1 relative group">
                        <div className="w-12 h-12 p-2 rounded-xl bg-slate-100 flex items-center justify-center">
                          <img
                            src={tool.image}
                            alt={tool.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-sm font-bold text-slate-900">
                          {tool.name}
                        </span>
                        <button
                          onClick={() => handleRemoveTool(tool.id)}
                          className="absolute -top-1 -right-1 bg-rose-700 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* صف التقييم */}
                <tr>
                  <td className="py-3 px-2 text-xs font-bold align-top">
                    التقييم
                  </td>
                  <td className="py-3 px-2 text-center text-sm font-bold text-slate-800 align-top">
                    <span className="inline-flex items-center gap-1 justify-center">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />{" "}
                      {currentProduct.rating}
                    </span>
                  </td>
                  {selectedTools.map((tool) => (
                    <td
                      key={tool.id}
                      className="py-3 px-2 text-center text-sm font-bold text-slate-800 align-top"
                    >
                      <span className="inline-flex items-center gap-1 justify-center">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />{" "}
                        {tool.rating}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* صف التسعير */}
                <tr>
                  <td className="py-3 px-2 text-xs font-bold align-top">
                    التسعير
                  </td>
                  <td className="py-3 px-2 text-center text-xs font-bold text-amber-600 align-top">
                    {currentProduct.pricing}
                  </td>
                  {selectedTools.map((tool) => (
                    <td
                      key={tool.id}
                      className="py-3 px-2 text-center text-xs font-bold text-emerald-600 align-top"
                    >
                      {tool.pricing}
                    </td>
                  ))}
                </tr>

                {/* صف الفئة */}
                <tr>
                  <td className="py-3 px-2 text-xs font-bold align-top">
                    الفئة
                  </td>
                  <td className="py-3 px-2 text-center text-xs font-medium text-slate-600 align-top">
                    {currentProduct.category}
                  </td>
                  {selectedTools.map((tool) => (
                    <td
                      key={tool.id}
                      className="py-3 px-2 text-center text-xs font-medium text-slate-600 align-top"
                    >
                      {tool.category}
                    </td>
                  ))}
                </tr>

                {/* صف الوصف */}
                <tr>
                  <td className="py-3 px-2 text-xs font-bold align-top">
                    الوصف
                  </td>
                  <td className="py-3 px-2 text-xs leading-relaxed align-top">
                    {currentProduct.desc}
                  </td>
                  {selectedTools.map((tool) => (
                    <td
                      key={tool.id}
                      className="py-3 px-2 text-xs leading-relaxed align-top"
                    >
                      {tool.desc}
                    </td>
                  ))}
                </tr>

                {/* صف المميزات */}
                <tr>
                  <td className="py-3 px-2 text-xs font-bold align-top">
                    المميزات
                  </td>
                  <td className="py-3 px-2 align-top">
                    <div className="flex flex-col gap-1.5">
                      {currentProduct.features.map((f, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-lg text-[11px] font-semibold text-slate-700"
                        >
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                  {selectedTools.map((tool) => (
                    <td key={tool.id} className="py-3 px-2 align-top">
                      <div className="flex flex-col gap-1.5">
                        {tool.features.map((f, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-lg text-[11px] font-semibold text-slate-600"
                          >
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* صف الإجراءات */}
                <tr>
                  <td className="py-3 px-2 text-xs font-bold align-top">
                    الإجراءات
                  </td>
                  <td className="py-3 px-2 text-center align-top">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg inline-block">
                      الصفحة الحالية
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
                          عرض التفاصيل <ExternalLink className="w-3 h-3" />
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
            <div className="space-y-2.5">
              <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amber-500" /> نصائح للاختيار
                الذكي:
              </h4>
              <ul className="text-xs space-y-1.5 list-disc list-inside ps-1">
                <li>
                  قارن السعر المتاح مع ميزانيتك الإنتاجية الشهرية أو السنوية.
                </li>
                <li>تحقق من متطلبات تشغيل كل برنامج والأنظمة المدعومة.</li>
                <li>
                  اختر الأداة بناءً على ميزة معينة تحتاجها وتوفر وقتك الفعلي.
                </li>
              </ul>
            </div>
            <div className="space-y-2.5">
              <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <Link2 className="w-4 h-4 text-primary" /> روابط مفيدة تهمك:
              </h4>
              <ul className="space-y-1.5 ps-1 text-primary">
                <li>
                  <a href="#all" className="hover:underline">
                    ← تصفح الأدوات حسب الفئة
                  </a>
                </li>
                <li>
                  <a href="#compare" className="hover:underline">
                    ← مقارنة شاملة لجميع الأدوات
                  </a>
                </li>
                <li>
                  <a href="#tools" className="hover:underline">
                    ← عرض كافة أقسام الموقع
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
