const TitleAndDescription = ({
  title,
  description,
  className = "",
  textColor = "",
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {title && (
        <h1 className={`text-xl font-semibold text-primary ${textColor}`}>
          {title}
        </h1>
      )}

      {description && (
        <p className={`mt-2 text-sm font-medium leading-loose ${textColor}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default TitleAndDescription;
