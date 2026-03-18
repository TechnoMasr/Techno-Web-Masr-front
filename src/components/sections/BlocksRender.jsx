import ImagesSliderSection from "@/components/sections/ImagesSliderSection";
import PageBanner from "@/components/sections/PageBanner";
import PageBannerWithImg from "@/components/sections/PageBannerWithImg";
import VideoBanner from "@/components/sections/VideoBanner";
import TextAndImage from "@/components/sections/TextAndImage";
import MobileAndSteps from "@/components/sections/MobileAndSteps";
import MobileInCenter from "@/components/sections/MobileInCenter";
import TitleAndSteps from "@/components/sections/TitleAndSteps";
import TechnologySection from "@/components/sections/TechnologySection";
import TechnoMasrTextBanner from "@/components/sections/TechnoMasrTextBanner";
import image from "@/assets/images/bg-img.png";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/StatisticsSection";
import { useEffect } from "react";
import StartWithUsBanner from "./StartWithUsBanner";
import VisionAndMission from "./VisionAndMission";
import WhoWeAre from "./WhoWeAre";
import ServicesSection from "./ServicesSection";
import PreviousWorkSection from "./PreviousWorkSection";
import PartnersSection from "./PartnersSection";
import WhyChooseUsBanner from "./WhyChooseUsBanner";
import SectionTitle from "../common/SectionTitle";
import TestimonialsSection from "./TestimonialsSection";
import Faqs from "./Faqs";
import GallerySection from "./GallerySection";

const BlocksRender = ({ blocks }) => {
  useEffect(() => {
    console.log(blocks);
  }, [blocks]);

  return (
    <>
      {/* <PageBanner title={"خدماتنا"} /> */}

      {blocks.map((block) => {
        return (
          <div key={block.id}>
            {/* 'بانر الرئيسيه العظيم', 'main_hero_banner' */}
            {block.type === "main_hero_banner" && <Hero block={block} />}
            {/* 'عنوان وفقره على اليمين  , سيلايدر صور علايسار + زر انتقال', 'right_paragraph_left_slider_image' */}
            {block.type === "right_paragraph_left_slider_image" && (
              <ImagesSliderSection block={block} />
            )}
            {/* 'بانر عنوان + نص + صوره موكاب + ازرار', 'banner_title_text_image_btns' */}
            {block.type === "banner_title_text_image_btns" && (
              <PageBannerWithImg block={block} />
            )}
            {/* 'بانر فيديو وسطي', 'video_centered_banner' */}
            {block.type === "video_centered_banner" && (
              <VideoBanner block={block} />
            )}
            {/* 'صوره جانبيه  وفقره  وصناديق المميزات 1', 'side_image_with_paragraph_and_features_boxes_1' */}
            {block.type ===
              "side_image_with_paragraph_and_features_boxes_1" && (
              <WhyChooseUs block={block} />
            )}
            {/* 'بانر عنوان + فقره   + ازرار ', 'banner_title_paragraph_buttons' */}
            {block.type === "banner_title_paragraph_buttons" && (
              <TechnoMasrTextBanner block={block} />
            )}
            {/* 'عنوان + صناديق الخطوات ', 'title_steps_boxes' */}
            {block.type === "title_steps_boxes" && (
              <TitleAndSteps block={block} />
            )}
            {/* 'عنوان  +  صناديق الصور', 'title_image_boxes' */}
            {block.type === "title_image_boxes" && (
              <TechnologySection block={block} />
            )}
            {/* 'صورع على اليمين  + نص +فقره + زر على اليسار', 'right_images_left_text_paragraph_button' */}
            {block.type === "right_images_left_text_paragraph_button" && (
              <TextAndImage
                yellowCircle={true}
                imageFirst={true}
                block={block}
              />
            )}
            {/* 'صورع على اليسار + نص +فقره + زر على اليمين', 'left_images_right_text_paragraph_button' */}
            {block.type === "left_images_right_text_paragraph_button" && (
              <TextAndImage backgroundImage={image} block={block} />
            )}
            {/* 'بوكس الخدمات مع صوره وسطيه ', 'services_boxes_with_center_image' */}
            {block.type === "services_boxes_with_center_image" && (
              <MobileInCenter block={block} />
            )}
            {/* 'شكل الاسئله الشائعه', 'frequently_asked_questions' */}
            {block.type === "frequently_asked_questions" && (
              <Faqs block={block} />
            )}
            {/* 'معرض الصور', 'image_gallery_1' */}
            {block.type === "image_gallery_1" && (
              <GallerySection block={block} />
            )}
            {/* 'بانر طلب الخدمه العريق', 'service_request_banner' */}
            {block.type === "service_request_banner" && (
              <StartWithUsBanner block={block} />
            )}
            {/* 'انترو من  نحن ', 'about_us_intro' */}
            {block.type === "about_us_intro" && <WhoWeAre block={block} />}
            {/* 'صناديق الروؤيه والاهداف', 'vision_mission_boxes' */}
            {block.type === "vision_mission_boxes" && (
              <VisionAndMission block={block} />
            )}
            {/* 'صناديق الصور مع خلفيه باترن', 'image_boxes_with_pattern_background' */}
            {block.type === "image_boxes_with_pattern_background" && (
              <PartnersSection block={block} />
            )}
            {/* 'سلايدر الصناديق  مثلا (من هي تكنو ويب مصر)', 'boxes_slider_2' */}
            {block.type === "boxes_slider_2" && (
              <ServicesSection block={block} />
            )}
            {/* 'ضناديق الاحصائيات , باترن خلفي , عنوان , فقره , صناديق ', 'stats_boxes_with_pattern_title_paragraph' */}
            {block.type === "stats_boxes_with_pattern_title_paragraph" && (
              <Statistics block={block} />
            )}
            {/* 'بانر لماذا تختارنا' (Why Choose Us) */}
            {block.type === "why_choose_us_banner" && (
              <WhyChooseUsBanner block={block} />
            )}
            {/* 'خصائص المنتج', 'product_features' */}
            {block.type === "product_features" && (
              <MobileAndSteps block={block} />
            )}
            {/* 'اسئله شائعه  تصميم باترن وصوره  يمين  ومحتوى يسار  ', 'faq_with_pattern_right_image_left_content' */}
            {block.type === "faq_with_pattern_right_image_left_content" && (
              <Faqs block={block} imageRight={true} />
            )}
            {/* 'هيدر  عنوان ونص', 'header_title_and_desc_2' */}
            {block.type === "header_title_and_desc_2" && (
              <section className="relative overflow-hidden">
                <div className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]" />
                <div className="container sectionPadding">
                  <SectionTitle
                    title={"من هي تكنو ويب مصر"}
                    description={
                      "تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير المواقع الإلكترونية، المتاجر الإلكترونية، والتطبيقات، بالإضافة إلى أنظمة البرمجيات المخصصة للشركات. تهدف الشركة إلى"
                    }
                  />
                </div>
              </section>
            )}
            {/* 'اراء العملاء', 'customer_reviews' */}
            {block.type === "customer_reviews" && (
              <TestimonialsSection block={block} />
            )}
            {/* 'page_banner س', 'page_banner' */}
            {block.type === "page_banner" && (
              <PageBanner title={"خدماتنا"} block={block} />
            )}
            {/* 'سلايدر الخدمات في الرئيسيه', 'services_slider' */}
            {block.type === "services_slider" && (
              <ServicesSection block={block} />
            )}{" "}
            {/* //ولكن هيجلب الخمات بشكل ثابت  */}
            {/* 'سلايدر الصناديق  مثلا (سابقه الاعمال )', 'boxes_slider_1' */}
            {block.type === "boxes_slider_1" && (
              <PreviousWorkSection block={block} />
            )}{" "}
            {/** مشترك مع السابقه الاعمال */}
          </div>
        );
      })}
    </>
  );
};

export default BlocksRender;
