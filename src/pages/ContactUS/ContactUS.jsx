import SectionTitle from "@/components/common/SectionTitle";
import PageBanner from "@/components/commonSections/PageBanner";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { useNavigate, useParams } from "react-router";

const ContactUS = () => {
  const list = [
    {
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
      social: [
        {
          id: 1,
          link: "/",
          icon: <FaInstagram />,
        },
        {
          id: 2,
          link: "/",
          icon: <FaLinkedinIn />,
        },
        {
          id: 3,
          link: "/",
          icon: <FaXTwitter />,
        },
      ],
    },
    {
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
      social: [
        {
          id: 1,
          link: "/",
          icon: <FaInstagram />,
        },
        {
          id: 2,
          link: "/",
          icon: <FaLinkedinIn />,
        },
        {
          id: 3,
          link: "/",
          icon: <FaXTwitter />,
        },
      ],
    },
  ];

  const { lang } = useParams();

  const navigate = useNavigate();

  return (
    <main>
      <PageBanner title={"تواصل معنا"} />

      <section className="container pagePadding">
        <SectionTitle
          title={"فروع تكنو ويب مصر"}
          description={
            "تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير المواقع الإلكترونية، المتاجر الإلكترونية، والتطبيقات، بالإضافة إلى أنظمة البرمجيات المخصصة للشركات. تهدف الشركة إلى"
          }
        />

        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
          {list.map((item) => (
            <div
              onClick={() => navigate(`/${lang}/contact/${item.id}`)}
              className="flex flex-col gap-2 bg-white p-3 border shadow rounded-lg font-medium"
              key={item.id}
            >
              <iframe
                className="w-full h-60 rounded-lg"
                src="https://maps.google.com/maps?q=123+Main+St,+Anytown,+USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                allowFullScreen
              ></iframe>

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

              <hr className="my-3" />

              <ul className="flex gap-4">
                {item.social.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 aspect-square grid place-items-center
                    bg-gray-100 text-primary rounded-full border shadow"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ContactUS;
