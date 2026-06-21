import { useParams } from "react-router";
import { useState } from "react";
import { RxCopy } from "react-icons/rx";
import { IoMdDoneAll } from "react-icons/io";
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6"; // استيراد الأيقونات الجديدة

import { getBlogDetails } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import BlogDetailsSkeleton from "@/components/skeletons/BlogDetailsSkeleton";
import SeoManager from "@/utils/SeoManager";
import { useTranslation } from "react-i18next";
import Header from "@/components/layout/Header/Header";

const BlogDetails = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const [copied, setCopied] = useState(false);

  const { data: blogDetails, isLoading } = useQuery({
    queryKey: ["blogDetails", slug],
    queryFn: () => getBlogDetails(slug),
  });

  if (isLoading)
    return (
      <>
        <Header alwaysScrolled /> <BlogDetailsSkeleton />
      </>
    );

  if (!blogDetails) return null;

  const seo = blogDetails?.seo;
  const blog = blogDetails?.blog;

  return (
    <>
      <SeoManager
        title={seo?.meta_title}
        description={seo?.meta_description}
        keywords={seo?.keywords}
        canonical={seo?.canonical_url}
        ogImage={seo?.og_image_url}
      />

      <Header alwaysScrolled />

      {blog && (
        <main className="pt-20">
          <section className="container pagePadding space-y-4 lg:space-y-6">
            {/* غلاف المقال */}
            {blog?.banner_url && (
              <div className="w-full h-60 md:h-100 lg:h-125 rounded-2xl overflow-hidden">
                <img
                  src={blog?.banner_url}
                  alt={blog?.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* عنوان المقال */}
            <h2 className="text-primary text-lg lg:text-2xl font-bold">
              {blog?.title}
            </h2>

            {/* محتوى المقال */}
            <div
              className="rich_content text-start!"
              dangerouslySetInnerHTML={{ __html: blog?.content }}
            />

            {/* صندوق المشاركة */}
            <div className="bg-white rounded-xl p-3 max-w-lg mx-auto border border-primary">
              <div className="flex items-center justify-center gap-4">
                <p className="text-sm font-semibold">
                  {t("blogDetails.shareArticle")}
                </p>

                <div className="flex items-center gap-2">
                  {/* LinkedIn */}
                  <span
                    className="w-10 aspect-square bg-[#0077b5] text-white rounded-full flex items-center justify-center cursor-pointer hover:brightness-90 transition"
                    onClick={() =>
                      window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          window.location.href,
                        )}`,
                        "_blank",
                      )
                    }
                  >
                    <FaLinkedinIn className="text-lg md:text-xl" />
                  </span>

                  {/* Facebook */}
                  <span
                    className="w-10 aspect-square bg-[#1877f2] text-white rounded-full flex items-center justify-center cursor-pointer hover:brightness-90 transition"
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href,
                        )}`,
                        "_blank",
                      )
                    }
                  >
                    <FaFacebookF className="text-lg md:text-xl" />
                  </span>

                  {/* X (Twitter) */}
                  <span
                    className="w-10 aspect-square bg-black text-white rounded-full flex items-center justify-center cursor-pointer hover:brightness-90 transition"
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          window.location.href,
                        )}&text=${encodeURIComponent(blog?.title || "")}`,
                        "_blank",
                      )
                    }
                  >
                    <FaXTwitter className="text-lg md:text-xl" />
                  </span>

                  {/* Copy Link */}
                  <span
                    className="w-10 aspect-square bg-primary text-white rounded-full flex items-center justify-center cursor-pointer hover:brightness-90 transition"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 3000);
                    }}
                  >
                    {copied ? (
                      <IoMdDoneAll className="text-xl md:text-2xl" />
                    ) : (
                      <RxCopy className="text-xl md:text-2xl" />
                    )}
                  </span>
                </div>
              </div>

              <p
                className={`text-center font-semibold flex items-center justify-center gap-1 ${
                  copied ? "h-6 mt-4" : "h-0 mt-0"
                } duration-300 overflow-hidden`}
              >
                {t("blogDetails.copied")}
                <IoMdDoneAll className="text-3xl" />
              </p>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default BlogDetails;
