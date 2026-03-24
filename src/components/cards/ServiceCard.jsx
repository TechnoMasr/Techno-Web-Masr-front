import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link, useParams } from "react-router";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ service, type = "service" }) => {
  const { lang } = useParams();
  const { t } = useTranslation();

  const isService = type === "service";

  return (
    <div className="flex flex-col items-start gap-3 border p-2 rounded-lg bg-white">
      <div className="w-full aspect-5/3 overflow-hidden rounded-md">
        <img
          loading="lazy"
          src={service.image_url}
          alt={isService ? service.title : service.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-semibold text-lg text-primary">
        {isService ? service.title : service.name}
      </h3>

      <p className="text-xs font-medium line-clamp-3">{service.description}</p>

      <Link
        to={`/${lang}/${isService ? "services" : "products"}/${service.slug}`}
        className="flex items-center gap-2 group text-gray-400 font-medium"
      >
        {isService
          ? t("ServiceCard.serviceDetails")
          : t("ServiceCard.productDetails")}
        <HiArrowNarrowLeft className="ltr:rotate-180 group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ServiceCard;
