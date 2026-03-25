const TitleAndDescription = ({
  title,
  description,
  className = "",
  textColor = "",
  html = false,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {title && (
        <h1 className={`text-2xl font-semibold text-primary ${textColor}`}>
          {title}
        </h1>
      )}

      {description && (
        <p className={`mt-2 font-medium leading-relaxed ${textColor}`}>
          {html ? (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          ) : (
            description
          )}
        </p>
      )}
    </div>
  );
};

export default TitleAndDescription;
