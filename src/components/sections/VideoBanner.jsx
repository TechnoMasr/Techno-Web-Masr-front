import { useState, useRef } from "react";
import VideoBannerSkeleton from "../skeletons/VideoBannerSkeleton";
import { useTranslation } from "react-i18next";

const VideoBanner = ({ block }) => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const posterUrl = block?.image_url || block?.image;
  const videoSrc = block?.video_file || block?.video_url;
  const loading = !block;

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => videoRef.current?.play(), 100);
  };

  if (loading) return <VideoBannerSkeleton />;
  if (!videoSrc && !posterUrl) return null;

  return (
    <section className="container sectionPadding" dir="rtl">
      <div className="relative w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl ring-1 ring-white/10">
        {/* Poster + play button */}
        {!isPlaying && (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 w-full h-full flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-4 rounded-2xl group"
            aria-label={t("VideoBanner.playLabel")}
          >
            {/* Poster image */}
            {posterUrl && (
              <img
                loading="lazy"
                src={posterUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/30" />
            {/* Play icon */}
            <span className="relative z-10 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 text-primary shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-active:scale-95">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 mr-1 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </span>
            {/* Subtle pulse ring */}
            <span
              className="absolute z-10 w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white/40 animate-ping pointer-events-none opacity-60"
              aria-hidden
            />
          </button>
        )}

        {/* Video */}
        {isPlaying && videoSrc && (
          <>
            <video
              ref={videoRef}
              src={videoSrc}
              className="absolute inset-0 w-full h-full object-contain"
              controls
              playsInline
              onEnded={() => setIsPlaying(false)}
            />
            <button
              type="button"
              onClick={() => {
                videoRef.current?.pause();
                setIsPlaying(false);
              }}
              className="absolute top-4 left-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors backdrop-blur-sm"
              aria-label={t("VideoBanner.closeLabel")}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default VideoBanner;
