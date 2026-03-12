import HeroSkeleton from "@/components/Loading/SkeletonLoading/HeroSkeleton";
import bgImg from "@/assets/images/bg-img.png";
import pcImg from "@/assets/images/pc-img.png";
import { Button } from "@/components/ui/button";

const Hero = ({ data, loading }) => {
  // if (loading) return <HeroSkeleton />;

  // if (!data) return null;

  return (
    <section
      className="sectionPadding bg-center bg-cover w-full h-screen 
      relative flex items-center justify-center gap-8"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div>
        <h1 className="text-3xl lg:text-5xl font-semibold capitalize">
          نبتكر مستقبلك الرقمي
        </h1>

        <h2 className="text-2xl lg:text-4xl font-semibold capitalize">
          بحلول برمجية ذكية
        </h2>

        <p className="mt-4">
          نحن في تكنو ويب مصر نصمم ونطور منصات وتطبيقات ذكية تساعد الشركات علي
          النمو والتفوق في التخصص الخاص بهم من خلال التطبيق او الموقع
        </p>

        <Button variant="secondary">اطلب الخدمة الان</Button>
      </div>

      <div>
        <img src={pcImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
