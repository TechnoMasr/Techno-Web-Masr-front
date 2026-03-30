import SectionTitle from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import WhoWeAreSkeleton from "../skeletons/WhoWeAreSkeleton";
import useHandleAction from "@/hooks/useHandleAction";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

import Union from "@/assets/icons/Union.png";
import wIcon from "@/assets/icons/w-icon.png";

const WhoWeAre = ({ block, loading }) => {
  const handleAction = useHandleAction();

  if (loading) return <WhoWeAreSkeleton />;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[40%] aspect-square bg-secondary/30 rounded-full blur-[100px]" />

      <div className="container sectionPadding relative">
        {/* decorative images */}
        <img
          loading="lazy"
          src={Union}
          alt="Decorative background"
          className="absolute bottom-20 inset-e-10 opacity-60 w-26 z-10"
        />

        <img
          loading="lazy"
          src={wIcon}
          alt="Decorative background"
          className="absolute top-32 inset-s-0 w-1/5 -z-10"
        />

        {/* title */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <SectionTitle
            title={block?.other_data?.top_title}
            description={block?.other_data?.top_text}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-12">
          {/* media */}
          <motion.div
            className="col-span-1 lg:col-span-2 h-full overflow-hidden rounded-2xl shadow"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {block?.video_file ? (
              <VideoBlock src={block.video_file} />
            ) : block?.video_url ? (
              <YoutubeBlock url={block.video_url} />
            ) : (
              <img
                src={block.image_url}
                alt=""
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>

          {/* content */}
          <motion.div
            className="flex flex-col gap-4 lg:gap-6 lg:col-span-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-black">
              {block.title}
            </h3>

            <p className="text-foreground font-medium text-sm md:text-base lg:max-w-xl">
              {block.description}
            </p>

            <ul className="grid grid-cols-2 gap-4 md:gap-8 my-auto">
              {block?.block_items?.map((item) => (
                <li key={item.id} className="flex flex-col gap-2 text-primary">
                  <span className="text-lg font-bold bg-secondary/30 rounded-full w-14 h-14 flex items-center justify-center">
                    <img
                      loading="lazy"
                      src={item.image_url}
                      alt="icon"
                      className="w-5 h-5"
                    />
                  </span>

                  <h2 className="font-semibold md:text-xl">{item.title}</h2>

                  <p className="leading-tight text-sm text-foreground font-medium max-w-70">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mt-auto">
              {block?.other_data?.btn_1_enabled &&
                block?.other_data?.btn_1_url && (
                  <Button
                    onClick={() =>
                      handleAction(block?.other_data?.btn_1_url, {
                        serviceId: block?.serviceId,
                        serviceTitle: block?.serviceTitle,
                      })
                    }
                  >
                    {block.other_data.btn_1_text}
                  </Button>
                )}

              {block?.other_data?.btn_2_enabled &&
                block?.other_data?.btn_2_url && (
                  <Button
                    variant="outline"
                    onClick={() =>
                      handleAction(block?.other_data?.btn_2_url, {
                        serviceId: block?.serviceId,
                        serviceTitle: block?.serviceTitle,
                      })
                    }
                  >
                    {block.other_data.btn_2_text}
                  </Button>
                )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

//////////////////////////////////////////////////////////

const VideoBlock = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        controls={isPlaying}
      />

      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
        >
          <IoPlayCircleOutline className="text-8xl text-white shadow-lg" />
        </button>
      )}
    </div>
  );
};

//////////////////////////////////////////////////////////

const YoutubeBlock = ({ url }) => {
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className="relative w-full h-full cursor-pointer group"
    >
      <img
        src={`https://img.youtube.com/vi/${getYoutubeId(url)}/hqdefault.jpg`}
        alt="youtube thumbnail"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
        <IoPlayCircleOutline className="text-8xl text-white" />
      </div>
    </div>
  );
};

//////////////////////////////////////////////////////////

const getYoutubeId = (url) => {
  const regExp =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regExp);
  return match ? match[1] : "";
};
