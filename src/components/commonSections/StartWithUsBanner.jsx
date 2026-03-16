import bgImg from "@/assets/images/bg-img.png";
import pcImg from "@/assets/images/pc-img.png";
import { Button } from "@/components/ui/button";
import { HiArrowNarrowLeft } from "react-icons/hi";

const StartWithUsBanner = () => {
  return (
    <section className="container sectionPadding">
      <div
        className="bg-center bg-cover w-full min-h-72 content-center p-8 
        flex flex-col md:flex-row items-center gap-10 rounded-3xl shadow relative overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />

        <div className="w-full md:w-1/2 relative z-10">
          <img
            src={pcImg}
            alt=""
            className="w-[90%] sm:w-[60%] md:w-[90%] h-full object-contain mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-2 items-center md:items-start text-center md:text-start capitalize relative z-10">
          <h1 className="text-3xl lg:text-4xl font-medium text-white">
            ابدأ تحولك الرقمي اليوم…
          </h1>

          <h2 className="text-2xl lg:text-3xl font-medium text-secondary">
            وكن في الصدارة
          </h2>

          <p className="text-white/60 text-sm">
            نساعدك في بناء موقع إلكتروني أو تطبيق احترافي يجذب عملاءك، يعزز
            مبيعاتك، ويمنح نشاطك حضورًا رقميًا قويًا ينافس أكبر الشركات
          </p>

          <div className="flex items-center justify-center flex-wrap gap-2 mt-6">
            <Button variant="secondary" className="min-w-40 group">
              اطلب الخدمة الان
              <HiArrowNarrowLeft className="ltr:rotate-180 group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-all duration-300" />
            </Button>
            <Button variant="outline" className={`min-w-40`}>
              تواصل معنا
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartWithUsBanner;
