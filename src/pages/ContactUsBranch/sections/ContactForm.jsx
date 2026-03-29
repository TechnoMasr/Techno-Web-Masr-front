import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import MainInput from "@/components/form/MainInput";
import { Button } from "@/components/ui/button";
import FormError from "@/components/form/FormError";
import { toast } from "sonner";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInputField from "@/components/form/PhoneInputField";
import { sendContactUs } from "@/api/contactServices";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const recaptchaRef = useRef(null);
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const contactSchema = z.object({
    name: z.string().min(2, t("ContactForm.nameRequired")),
    company_name: z.string().min(2, t("ContactForm.companyRequired")),
    email: z.string().email(t("ContactForm.invalidEmail")),
    message: z.string().min(5, t("ContactForm.messageMin")),
    phone: z.string().refine((value) => isValidPhoneNumber(value || ""), {
      message: t("ContactForm.invalidPhone"),
    }),
    recaptcha_token: z.string().min(1, t("ContactForm.recaptchaRequired")),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company_name: "",
      email: "",
      message: "",
      phone: "",
      recaptcha_token: "",
    },
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: sendContactUs,
    onSuccess: () => {
      reset();
      recaptchaRef.current?.reset(); // مهم
      toast.success(t("ContactForm.success"));
    },
  });

  const onSubmit = (data) => {
    if (!data.recaptcha_token) return;

    data.branch_slug = slug;
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <MainInput
              {...field}
              label={t("ContactForm.name")}
              placeholder={t("ContactForm.namePlaceholder")}
              error={errors.name?.message}
            />
          )}
        />

        <Controller
          name="company_name"
          control={control}
          render={({ field }) => (
            <MainInput
              {...field}
              label={t("ContactForm.company")}
              placeholder={t("ContactForm.companyPlaceholder")}
              error={errors.company_name?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <MainInput
              {...field}
              type="email"
              label={t("ContactForm.email")}
              placeholder={t("ContactForm.emailPlaceholder")}
              error={errors.email?.message}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <PhoneInputField
              {...field}
              label={t("ContactForm.phone")}
              placeholder={t("ContactForm.phonePlaceholder")}
              error={errors.phone?.message}
            />
          )}
        />
      </div>

      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <MainInput
            {...field}
            type="textarea"
            label={t("ContactForm.message")}
            placeholder={t("ContactForm.messagePlaceholder")}
            error={errors.message?.message}
          />
        )}
      />

      <Controller
        name="recaptcha_token"
        control={control}
        render={({ field }) => (
          <div className="flex flex-col items-center">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              ref={recaptchaRef}
              onChange={(token) => field.onChange(token)}
            />
            {errors.recaptcha_token && (
              <p className="text-red-500 font-medium text-sm mt-1">
                {errors.recaptcha_token.message}
              </p>
            )}
          </div>
        )}
      />

      <Button
        type="submit"
        disabled={isPending}
        className="w-fit mx-auto min-w-32"
      >
        {isPending ? t("ContactForm.sending") : t("ContactForm.send")}
      </Button>

      {error && (
        <FormError
          errorMsg={error?.response?.data?.message || t("ContactForm.error")}
        />
      )}
    </form>
  );
};

export default ContactForm;
