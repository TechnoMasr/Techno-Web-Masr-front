import TitleAndDescription from "../common/TitleAndDescription";
import image from "@/assets/images/Phone.png";
import { Button } from "../ui/button";
import MobileAndStepsSkeleton from "../skeletons/MobileAndStepsSkeleton";

const MobileAndSteps = ({ block   }) => {
  console.log("block", block);

  /*
  {
    "id": 14,
    "name": "بانر طلب الخدمة",
    "title": "ابدأ تحولك الرقمي اليوم…# وكن في الصدارة",
    "description": "نساعدك في بناء موقع إلكتروني أو تطبيق احترافي يجذب عملاءك، يعزز مبيعاتك، ويمنح نشاطك حضورًا رقميًا قويًا ينافس أكبر الشركات",
    "type": "service_request_banner",
    "other_data": {
        "btn_1_text": "اطلب الخدمة الان",
        "btn_1_url": "https://rr3---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1773851693&ei=zX-6aY-oFtjl9fwP7OiX4QQ&ip=2401%3A4900%3A8fe5%3A4da8%3A857f%3Ab77b%3A9d13%3Ac6&id=o-APUvUkIYoGIZqDu8-qano1wKbvdKtvZqKMBTaFC0ijAJ&itag=243&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=385&bui=AVNa5-ybpd0URL1J-6DM0fRVBeliOYxMcQSZS9YaKRck-IzIYdtMm_C0wkg4wCLfx4_WHuCqolecnn2x&spc=6dlaFAY7c4YFDRL6N-Z1HDYa0U2OnKiaDY5_iSU2ahqPzbRb&vprv=1&svpuc=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=1106655&dur=55.000&lmt=1726281854710151&keepalive=yes&fexp=51565115,51565682,51791334&c=ANDROID_VR&txp=443C434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AHEqNM4wRgIhANCT2Sf-YCzz7hUFLQ_yNJGTCfPQ3DsYk-0YSfRm9ZxqAiEAlPT9ND3-AQdJVixaVWZPFWbMYXRwvhzZAJgeOYxt7Jo%3D&rm=sn-ci5gup-jwcl7k,sn-ci5gup-h55el7r,sn-h55sk7z&rrc=79,79,104&req_id=519e01a0992fa3ee&cmsv=e&rms=nxu,au&redirect_counter=3&cms_redirect=yes&ipbypass=yes&met=1773831732,&mh=eB&mip=156.197.82.121&mm=30&mn=sn-hgn7yn7s&ms=nxu&mt=1773831399&mv=m&mvi=3&pl=19&lsparams=cps,ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRQIhAODmRDOVVVbG_yoDA-RADamcvUbKbsplTDH6AhaEArDtAiALvgma9aFRsB3p-3ru_bVhte9497H7vpJel8Rv0zOAVg%3D%3D",
        "btn_1_enabled": true,
        "btn_2_text": "تواصل معنا الان",
        "btn_2_url": "https://rr3---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1773851693&ei=zX-6aY-oFtjl9fwP7OiX4QQ&ip=2401%3A4900%3A8fe5%3A4da8%3A857f%3Ab77b%3A9d13%3Ac6&id=o-APUvUkIYoGIZqDu8-qano1wKbvdKtvZqKMBTaFC0ijAJ&itag=243&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=385&bui=AVNa5-ybpd0URL1J-6DM0fRVBeliOYxMcQSZS9YaKRck-IzIYdtMm_C0wkg4wCLfx4_WHuCqolecnn2x&spc=6dlaFAY7c4YFDRL6N-Z1HDYa0U2OnKiaDY5_iSU2ahqPzbRb&vprv=1&svpuc=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=1106655&dur=55.000&lmt=1726281854710151&keepalive=yes&fexp=51565115,51565682,51791334&c=ANDROID_VR&txp=443C434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AHEqNM4wRgIhANCT2Sf-YCzz7hUFLQ_yNJGTCfPQ3DsYk-0YSfRm9ZxqAiEAlPT9ND3-AQdJVixaVWZPFWbMYXRwvhzZAJgeOYxt7Jo%3D&rm=sn-ci5gup-jwcl7k,sn-ci5gup-h55el7r,sn-h55sk7z&rrc=79,79,104&req_id=519e01a0992fa3ee&cmsv=e&rms=nxu,au&redirect_counter=3&cms_redirect=yes&ipbypass=yes&met=1773831732,&mh=eB&mip=156.197.82.121&mm=30&mn=sn-hgn7yn7s&ms=nxu&mt=1773831399&mv=m&mvi=3&pl=19&lsparams=cps,ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRQIhAODmRDOVVVbG_yoDA-RADamcvUbKbsplTDH6AhaEArDtAiALvgma9aFRsB3p-3ru_bVhte9497H7vpJel8Rv0zOAVg%3D%3D",
        "btn_2_enabled": true
    },
    "video_file": null,
    "video_url": null,
    "block_items": [],
    "image_url": "https://twm-admin.technomasrsystems.com/storage/01KM0AF0DKE9SM3TRR4CDRDX87.png?expires=1773839110&signature=4fb4d1a00199a9ac785ed4c715c73531a463efe10bb92831894d8caa8fb53e8f"
}
     */

  return (
    <section className={`sectionPadding relative`}>
      <div className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container grid grid-cols-1 md:grid-cols-5 gap-16 relative z-10">
        <div className={`space-y-4 lg:space-y-12 md:col-span-3`}>
          <TitleAndDescription
            title={block.title}
            description={block.description}
          />

          <ul className="grid grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <li
                key={step.id}
                className="flex flex-col items-center text-center gap-2 border rounded-md text-primary p-4"
              >
                <span className="text-lg font-bold border-2 border-secondary rounded-full w-10 h-10 flex items-center justify-center">
                  {index + 1}
                </span>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-foreground font-medium text-sm">
                  {step.description}
                </p>
              </li>
            ))}
          </ul>

          <Button className={`mx-auto block md:me-auto md:ms-0`}>
            اطلب الخدمه
          </Button>
        </div>

        <div className={`w-full h-125 hidden md:block md:col-span-2`}>
          <img
            src={image}
            alt="image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileAndSteps;
