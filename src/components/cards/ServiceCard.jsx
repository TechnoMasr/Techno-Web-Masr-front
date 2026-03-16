import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link, useParams } from "react-router";

const ServiceCard = ({ service }) => {
  const { lang } = useParams();

  return (
    <div className="flex flex-col items-start gap-3 border p-2 rounded-lg bg-white">
      <div className="w-full aspect-5/3 overflow-hidden rounded-md">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-semibold text-lg text-primary">{service.title}</h3>

      <p className="text-xs font-medium">{service.description}</p>

      <Link
        to={`/${lang}/services/${service.id}`}
        className="flex items-center gap-2 group text-gray-400 font-medium"
      >
        تفاصيل الخدمة{" "}
        <HiArrowNarrowLeft className="ltr:rotate-180 group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ServiceCard;
