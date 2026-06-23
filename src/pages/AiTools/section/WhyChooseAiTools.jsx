import WhyChooseAiToolsSkeleton from "@/components/skeletons/WhyChooseAiToolsSkeleton";

const WhyChooseAiTools = ({ data, loading }) => {
  if (loading) return <WhyChooseAiToolsSkeleton />;

  if (!data?.items?.length) return null;

  return (
    <section className="w-full py-6 lg:py-16 px-6 md:px-12 bg-primary rounded-3xl shadow-sm relative overflow-hidden">
      {/* لمسة جمالية خلفية (Background Light Effect) */}
      <div className="absolute top-0 inset-s-1/5 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      {/* عنوان السكشن */}
      {data?.section_title && (
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-14 relative z-10">
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-snug">
            {data?.section_title}
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-2 md:mt-4 rounded-full" />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-8 relative z-10">
        {data?.items?.map((feature) => (
          <div
            key={feature.id}
            className="group p-4 bg-white/90 rounded-2xl border-2 border-primary hover:scale-102
            hover:shadow-xl hover:border-secondary transition-all duration-300 text-center md:text-start flex flex-col items-center md:items-start"
          >
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 bg-slate-300 group-hover:bg-secondary/10`}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300"
              />
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-200">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed font-medium">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseAiTools;
