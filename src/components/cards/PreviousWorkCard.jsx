import { useNavigate, useParams } from "react-router";

const PreviousWorkCard = ({ item }) => {
  const { lang } = useParams();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${lang}/previous-work/${item.slug}`)}
      className="relative rounded-lg w-full aspect-4/6 overflow-hidden cursor-pointer"
    >
      {item.image_url && (
        <img
          src={item.image_url}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/95" />
      <div className="absolute z-10 p-4 bottom-0">
        <h1 className="text-2xl text-white capitalize line-clamp-2">
          {item.name}
        </h1>
        <p className="text-xs text-white line-clamp-3 mt-3">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default PreviousWorkCard;
