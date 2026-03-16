import PageBanner from "@/components/commonSections/PageBanner";
import image from "@/assets/images/pc-img.png";

const Partners = () => {
  const list = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    image: image,
    title: "شركة ليفا للتامين",
    description:
      "شركة ليفا للتامين في المملكة العربية السعودية الرياض حي المنصورة",
  }));

  return (
    <main>
      <PageBanner title={"عملائنا"} />

      <section className="container pagePadding">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {list.map((item) => (
            <li
              key={item.id}
              className="bg-white shadow rounded-md border w-full aspect-video
              flex flex-col items-center text-center gap-2 p-4"
            >
              <div className="h-20 aspect-video overflow-hidden mb-2">
                <img
                  src={item.image}
                  alt="partner"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="text-xs font-medium">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Partners;
