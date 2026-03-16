const TitleAndDescription = ({ title, description, className = "" }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {title && (
        <h1 className="text-2xl font-semibold text-primary">{title}</h1>
      )}

      {description && <p className="mt-2 text-sm font-medium">{description}</p>}
    </div>
  );
};

export default TitleAndDescription;
