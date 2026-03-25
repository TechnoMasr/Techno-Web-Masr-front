import { useTranslation } from "react-i18next";

const Loader = ({ textWhite = false }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-60">
      {/* Ring + Morphing shape */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: 72, height: 72 }}
      >
        {/* Spinning ring */}
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            background:
              "conic-gradient(from 0deg, var(--color-primary) 0%, transparent 70%)",
            animationDuration: "1.4s",
          }}
        >
          <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900" />
        </div>

        {/* Morphing shape */}
        <div
          className="relative z-10 bg-primary"
          style={{
            width: 36,
            height: 36,
            animation: "morph 3s ease-in-out infinite",
          }}
        />
      </div>

      {/* Trailing dots */}
      <div className="flex gap-1.5 items-center">
        {[0, 150, 300].map((delay, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-primary"
            style={{
              opacity: 1 - i * 0.3,
              animation: `trail 1.5s ease-in-out ${delay}ms infinite`,
            }}
          />
        ))}
      </div>

      {/* Text */}
      <h2
        className={`font-semibold ${textWhite ? "text-white" : "text-primary"}`}
      >
        {t("loading")}
      </h2>
    </div>
  );
};

export default Loader;
