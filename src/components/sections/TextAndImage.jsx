import TitleAndDescription from "../common/TitleAndDescription";
import { Button } from "../ui/button";
import TextAndImageSkeleton from "../skeletons/TextAndImageSkeleton";
import useHandleAction from "@/hooks/useHandleAction";
import { motion } from "framer-motion";

const TextAndImage = ({
  backgroundImage = null,
  yellowCircle = false,
  imageFirst = false,
  block,
  loading,
}) => {
  const handleAction = useHandleAction();

  if (loading) return <TextAndImageSkeleton />;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      className={`sectionPadding relative ${backgroundImage ? "bg-cover bg-center bg-no-repeat my-10" : ""}`}
      style={{
        background: backgroundImage && `url(${backgroundImage})`,
      }}
    >
      {yellowCircle && (
        <div className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]" />
      )}

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 relative z-10 items-center">
        <motion.div
          className={`${imageFirst ? "md:order-2" : ""}`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <TitleAndDescription
            textColor={backgroundImage ? "!text-white" : ""}
            title={block.title}
            description={block.description}
          />

          <Button
            onClick={() =>
              handleAction(block?.other_data?.btn_1_url, {
                serviceId: block?.serviceId,
                serviceTitle: block?.serviceTitle,
              })
            }
            variant={backgroundImage ? "secondary" : "default"}
            className={`${backgroundImage ? "bg-white" : ""} lg:mt-8`}
          >
            {block?.other_data?.btn_1_text}
          </Button>
        </motion.div>

        <motion.div
          className={`w-full h-100 ${imageFirst ? "md:order-1" : ""}`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <img
            loading="lazy"
            src={block.image_url}
            alt="image"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TextAndImage;
