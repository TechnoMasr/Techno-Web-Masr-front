import TechnoMasrTextBannerSkeleton from "../skeletons/TechnoMasrTextBannerSkeleton";
import { Button } from "../ui/button";

const TechnoMasrTextBanner = () => {
  // const loading = true;

  // if (loading) return <TechnoMasrTextBannerSkeleton />;

  return (
    <section className={`sectionPadding`}>
      <div className="container max-w-2xl flex flex-col items-center text-center gap-6">
        <h2 className="text-3xl lg:text-4xl font-semibold text-primary">
          تكنو ويب مصر
        </h2>
        <p className="font-medium">
          نحن في تكنو ويب مصر نصمم ونطور منصات وتطبيقات ذكية تساعد الشركات علي
          النمو والتفوق في التخصص الخاص بهم من خلال التطبيق او الموقع
        </p>

        <div className="flex gap-2">
          <Button variant="secondary">اطلب الخدمه</Button>
          <Button variant="outline">اطلب الخدمه</Button>
        </div>
      </div>
    </section>
  );
};

export default TechnoMasrTextBanner;
