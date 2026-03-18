import PageBanner from "@/components/sections/PageBanner";
import image from "@/assets/images/pc-img.png";
import PartnersListSkeleton from "@/components/skeletons/PartnersListSkeleton";
import { getPartners } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";

const Partners = () => {
  const list = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    image: image,
    title: "شركة ليفا للتامين",
    description:
      "شركة ليفا للتامين في المملكة العربية السعودية الرياض حي المنصورة",
  }));

  const { data: PartnersData, isLoading } = useQuery({
    queryKey: ["Partners"],
    queryFn: getPartners,
  });

  return (
    <main>
      <PageBanner title={"عملائنا"} />

      <section className="container pagePadding">
        {isLoading ? (
          <PartnersListSkeleton />
        ) : PartnersData?.clients?.length === 0 ? (
          <EmptyDataSection msg={"لا يوجد عملاء"} />
        ) : (
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-8">
            {PartnersData?.clients?.map((item) => (
              <li
                key={item.id}
                className="bg-white shadow rounded-md border w-full aspect-video
              flex flex-col items-center text-center gap-2 p-4"
              >
                <div className="h-24 aspect-video overflow-hidden mb-2">
                  <img
                    src={item.image_url}
                    alt="partner"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="text-xs font-medium">{item.description}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default Partners;
