import { useNavigate, useParams } from "react-router";

const PreviousWorkCard = ({ item }) => {
  const { lang } = useParams();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${lang}/previous-work/${item.slug}`)}
      className="bg-cover bg-center bg-no-repeat rounded-lg w-full h-90 relative overflow-hidden cursor-pointer"
      style={{
        background: `url(${item.image_url})`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/95" />

      <div className="relative z-10 p-4 h-full flex flex-col items-start justify-end gap-2">
        <h1 className="text-2xl text-white capitalize">{item.name}</h1>

        <p className="text-xs text-white max-w-2xl">{item.description}</p>
      </div>
    </div>
  );
};

export default PreviousWorkCard;
