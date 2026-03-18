import PageBanner from "@/components/sections/PageBanner";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import ContactForm from "./sections/ContactForm";
import { useQuery } from "@tanstack/react-query";
import { getBranchDetails } from "@/api/contactServices";
import { useParams } from "react-router";
import BranchSkeleton from "@/components/skeletons/BranchSkeleton";

const ContactUsBranch = () => {
  const { slug } = useParams();

  const { data: branchData, isLoading } = useQuery({
    queryKey: ["branchDetails", slug],
    queryFn: () => getBranchDetails(slug),
  });

  const item = {
    id: branchData?.id,
    slug: branchData?.slug,
    name: branchData?.name,
    description: branchData?.description,
    map_embed: branchData?.map_embed,
    info: [
      {
        id: 1,
        label: "العنوان",
        value: branchData?.address,
        icon: <SlLocationPin />,
      },
      {
        id: 2,
        label: "رقم الجوال",
        value: branchData?.phone,
        icon: <FiPhone />,
      },
      {
        id: 3,
        label: "البريد الالكتروني",
        value: branchData?.email,
        icon: <MdOutlineMailOutline />,
      },
    ],
  };

  return (
    <main>
      <PageBanner title={item.name} />

      <section className="container pagePadding space-y-4 md:space-y-8">
        {isLoading ? (
          <BranchSkeleton />
        ) : !branchData ? null : (
          <div
            className="flex flex-col md:flex-row-reverse gap-2 md:gap-6 bg-white p-3 border shadow rounded-lg font-medium"
            key={item.id}
          >
            <div
              className="rounded-lg [&>iframe]:w-full md:w-1/2 [&>iframe]:h-60 rich_content"
              dangerouslySetInnerHTML={{ __html: item.map_embed }}
            />

            <div className="flex flex-col gap-2">
              <h3 className="text-xl text-primary">{item.name}</h3>
              <p className="text-sm">{item.description}</p>

              <ul className="flex flex-col gap-4">
                {item.info.map((info) => (
                  <li className="flex items-center gap-3 py-1" key={info.id}>
                    <div
                      className="w-8 aspect-square grid place-items-center
                        bg-gray-100 text-primary rounded-full border shadow"
                    >
                      {info.icon}
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <p className="text-gray-400 text-xs">{info.label}</p>
                      <span className="text-black text-sm">{info.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <ContactForm />
      </section>
    </main>
  );
};

export default ContactUsBranch;
