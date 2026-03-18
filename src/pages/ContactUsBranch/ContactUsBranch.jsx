import PageBanner from "@/components/sections/PageBanner";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import ContactForm from "./sections/ContactForm";
import { useQuery } from "@tanstack/react-query";
import { getBranchDetails } from "@/api/contactServices";

const ContactUsBranch = () => {
  const item = {
    id: 1,
    title: "فروع تكنو ويب مصر",
    description:
      "نحن في تكنو ويب مصر نصمم ونطور منصات وتطبيقات ذكية تساعد الشركات علي النمو والتفوق",
    info: [
      {
        id: 1,
        label: "العنوان",
        value: "القاهرة - مصر",
        icon: <SlLocationPin />,
      },
      {
        id: 2,
        label: "رقم الجوال",
        value: "+20123456789",
        icon: <FiPhone />,
      },
      {
        id: 3,
        label: "البريد الالكتروني",
        value: "hB4m8@example.com",
        icon: <MdOutlineMailOutline />,
      },
    ],
  };

    const { data: branchData, isLoading } = useQuery({
      queryKey: ["branchDetails"],
      queryFn: getBranchDetails,
    });

  return (
    <main>
      <PageBanner title={item.title} />

      <section className="container pagePadding space-y-4 md:space-y-8">
        <div
          className="flex flex-col md:flex-row-reverse gap-2 md:gap-6 bg-white p-3 border shadow rounded-lg font-medium"
          key={item.id}
        >
          <iframe
            className="w-full md:w-1/2 h-60 rounded-lg"
            src="https://maps.google.com/maps?q=123+Main+St,+Anytown,+USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            allowFullScreen
          ></iframe>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl text-primary">{item.title}</h3>
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
                  <div>
                    <p className="text-gray-400 text-xs">{info.label}</p>
                    <span className="text-black">{info.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ContactForm />
      </section>
    </main>
  );
};

export default ContactUsBranch;
