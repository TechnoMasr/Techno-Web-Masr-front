import bgImg from "@/assets/images/bg-img.png";
import pcImg from "@/assets/images/pc-img.png";
import { Button } from "@/components/ui/button";
import { HiArrowNarrowLeft } from "react-icons/hi";
import StartWithUsBannerSkeleton from "../skeletons/StartWithUsBannerSkeleton";
import { useEffect, useState } from "react";

const StartWithUsBanner = ({ block }) => {

  // const loading = true;

  // if (loading) return <StartWithUsBannerSkeleton />;
  
  const [title, setTitle] = useState(block.title);

  useEffect(() => {
    console.log("block", block);
    setTitle(block.title.split("#"));
  }, [block]);

//   {
//     "id": 14,
//     "name": "بانر طلب الخدمة",
//     "title": "ابدأ تحولك الرقمي اليوم# وكن في الصدارة",
//     "description": "نساعدك في بناء موقع إلكتروني أو تطبيق احترافي يجذب عملاءك، يعزز مبيعاتك، ويمنح نشاطك حضورًا رقميًا قويًا ينافس أكبر الشركات",
//     "type": "service_request_banner",
//     "other_data": {
//         "btn_1_text": "اطلب الخدمة الان",
//         "btn_1_url": "https://rr3---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1773851693&ei=zX-6aY-oFtjl9fwP7OiX4QQ&ip=2401%3A4900%3A8fe5%3A4da8%3A857f%3Ab77b%3A9d13%3Ac6&id=o-APUvUkIYoGIZqDu8-qano1wKbvdKtvZqKMBTaFC0ijAJ&itag=243&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=385&bui=AVNa5-ybpd0URL1J-6DM0fRVBeliOYxMcQSZS9YaKRck-IzIYdtMm_C0wkg4wCLfx4_WHuCqolecnn2x&spc=6dlaFAY7c4YFDRL6N-Z1HDYa0U2OnKiaDY5_iSU2ahqPzbRb&vprv=1&svpuc=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=1106655&dur=55.000&lmt=1726281854710151&keepalive=yes&fexp=51565115,51565682,51791334&c=ANDROID_VR&txp=443C434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AHEqNM4wRgIhANCT2Sf-YCzz7hUFLQ_yNJGTCfPQ3DsYk-0YSfRm9ZxqAiEAlPT9ND3-AQdJVixaVWZPFWbMYXRwvhzZAJgeOYxt7Jo%3D&rm=sn-ci5gup-jwcl7k,sn-ci5gup-h55el7r,sn-h55sk7z&rrc=79,79,104&req_id=519e01a0992fa3ee&cmsv=e&rms=nxu,au&redirect_counter=3&cms_redirect=yes&ipbypass=yes&met=1773831732,&mh=eB&mip=156.197.82.121&mm=30&mn=sn-hgn7yn7s&ms=nxu&mt=1773831399&mv=m&mvi=3&pl=19&lsparams=cps,ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRQIhAODmRDOVVVbG_yoDA-RADamcvUbKbsplTDH6AhaEArDtAiALvgma9aFRsB3p-3ru_bVhte9497H7vpJel8Rv0zOAVg%3D%3D",
//         "btn_1_enabled": true,
//         "btn_2_text": "تواصل معنا الان",
//         "btn_2_url": "https://rr3---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1773851693&ei=zX-6aY-oFtjl9fwP7OiX4QQ&ip=2401%3A4900%3A8fe5%3A4da8%3A857f%3Ab77b%3A9d13%3Ac6&id=o-APUvUkIYoGIZqDu8-qano1wKbvdKtvZqKMBTaFC0ijAJ&itag=243&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=385&bui=AVNa5-ybpd0URL1J-6DM0fRVBeliOYxMcQSZS9YaKRck-IzIYdtMm_C0wkg4wCLfx4_WHuCqolecnn2x&spc=6dlaFAY7c4YFDRL6N-Z1HDYa0U2OnKiaDY5_iSU2ahqPzbRb&vprv=1&svpuc=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=1106655&dur=55.000&lmt=1726281854710151&keepalive=yes&fexp=51565115,51565682,51791334&c=ANDROID_VR&txp=443C434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AHEqNM4wRgIhANCT2Sf-YCzz7hUFLQ_yNJGTCfPQ3DsYk-0YSfRm9ZxqAiEAlPT9ND3-AQdJVixaVWZPFWbMYXRwvhzZAJgeOYxt7Jo%3D&rm=sn-ci5gup-jwcl7k,sn-ci5gup-h55el7r,sn-h55sk7z&rrc=79,79,104&req_id=519e01a0992fa3ee&cmsv=e&rms=nxu,au&redirect_counter=3&cms_redirect=yes&ipbypass=yes&met=1773831732,&mh=eB&mip=156.197.82.121&mm=30&mn=sn-hgn7yn7s&ms=nxu&mt=1773831399&mv=m&mvi=3&pl=19&lsparams=cps,ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRQIhAODmRDOVVVbG_yoDA-RADamcvUbKbsplTDH6AhaEArDtAiALvgma9aFRsB3p-3ru_bVhte9497H7vpJel8Rv0zOAVg%3D%3D",
//         "btn_2_enabled": true
//     },
//     "video_file": null,
//     "video_url": null,
//     "block_items": [],
//     "image_url": "https://twm-admin.technomasrsystems.com/storage/01KM0AF0DKE9SM3TRR4CDRDX87.png?expires=1773838268&signature=695f2b76a2d42a2450c0deee51afd3386d8f3dc96ba0ef96895b3b85cda748bd"
// }


  return (
    <section className="container sectionPadding">
      <div
        className="bg-center bg-cover w-full min-h-72 content-center p-8 
        flex flex-col md:flex-row items-center gap-4 lg:gap-10 rounded-3xl shadow relative overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />

        <div className="w-full md:w-1/2 h-50 md:h-75 relative z-10">
          <img
            src={pcImg}
            alt=""
            className="w-[70%] sm:w-[60%] md:w-[90%] h-full object-contain mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-2 items-center md:items-start text-center md:text-start capitalize relative z-10">
          <h1 className="text-3xl lg:text-4xl font-medium text-white">
            {title[0]}
          </h1>

          <h2 className="text-2xl lg:text-3xl font-medium text-secondary">
            {title[1]}
          </h2>

          

          <p className="text-white/80 text-sm">
            {block.description}
          </p>
          

          <div className="flex items-center justify-center flex-wrap gap-2 mt-6">

            {block.other_data && block.other_data.btn_1_enabled && (
            <Button variant="secondary" className="min-w-40 group">
              {block.other_data.btn_1_text}
              <HiArrowNarrowLeft className="ltr:rotate-180 group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-all duration-300" />
            </Button>
            )}

            {block.other_data && block.other_data.btn_2_enabled && (
            <Button variant="outline" className={`min-w-40`}>
              {block.other_data.btn_2_text}
              <HiArrowNarrowLeft className="ltr:rotate-180 group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-all duration-300" />
            </Button>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default StartWithUsBanner;
