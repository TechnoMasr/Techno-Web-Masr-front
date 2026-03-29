import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { closeModal } from "@/store/modals/modalsSlice";
import { toast } from "sonner";
import MainInput from "@/components/form/MainInput";
import FormError from "@/components/form/FormError";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInputField from "@/components/form/PhoneInputField";
import {
  getContactProducts,
  getContactServices,
  sendServiceRequest,
} from "@/api/contactServices";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

const ServiceRequestModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { modalName, modalData } = useSelector((state) => state.modals);

  const recaptchaRef = useRef(null);
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const schema = z.object({
    name: z.string().min(2, t("ServiceRequestModal.errors.name")),
    company_name: z
      .string()
      .min(2, t("ServiceRequestModal.errors.company_name")),
    email: z.string().email(t("ServiceRequestModal.errors.email")),
    message: z.string().min(5, t("ServiceRequestModal.errors.message")),
    phone: z.string().refine((value) => isValidPhoneNumber(value || ""), {
      message: t("ServiceRequestModal.errors.phone"),
    }),
    product_id:
      modalData?.type === "product_request"
        ? z.string().min(1, t("ServiceRequestModal.errors.product_id"))
        : z.string().optional(),
    service_id:
      modalData?.type === "service_request"
        ? z.string().min(1, t("ServiceRequestModal.errors.service_id"))
        : z.string().optional(),

    recaptcha_token: z
      .string()
      .min(1, t("ServiceRequestModal.errors.recaptcha")),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      company_name: "",
      email: "",
      message: "",
      phone: "",
      product_id: "",
      service_id: "",
      recaptcha_token: "",
    },
  });

  const {
    mutate,
    isPending,
    error,
    reset: resetMutation,
  } = useMutation({
    mutationFn: sendServiceRequest,
    onSuccess: () => {
      reset();
      recaptchaRef.current?.reset(); // 👈 مهم
      toast.success(t("ServiceRequestModal.success"));
      dispatch(closeModal());
    },
  });

  useEffect(() => {
    if (modalData?.serviceId) {
      reset((prev) => ({
        ...prev,
        product_id: String(modalData.serviceId),
      }));
    }
  }, [modalData, reset]);

  const onSubmit = (data) => {
    if (!data.recaptcha_token) return;

    const payload = { ...data };

    if (modalData?.type === "product_request") {
      delete payload.service_id;
    } else if (modalData?.type === "service_request") {
      delete payload.product_id;
    }

    mutate(payload);
  };

  const { data: contactServices, isLoading } = useQuery({
    queryKey: ["contactServices"],
    queryFn: getContactServices,
    enabled:
      modalName === "ServiceRequestModal" &&
      modalData?.type === "service_request",
  });

  const { data: contactProducts, isLoading: isContactProductsLoading } =
    useQuery({
      queryKey: ["contactProducts"],
      queryFn: getContactProducts,
      enabled:
        modalName === "ServiceRequestModal" &&
        modalData?.type === "product_request",
    });

  const queryClient = useQueryClient();

  useEffect(() => {
    if (modalName !== "ServiceRequestModal") {
      reset({
        name: "",
        company_name: "",
        email: "",
        message: "",
        phone: "",
        product_id: "",
        service_id: "",
        recaptcha_token: "",
      });

      resetMutation();
      queryClient.resetQueries({ queryKey: ["contactServices"] });
    }
  }, [modalName, reset, queryClient, resetMutation]);

  return (
    <Dialog
      open={modalName === "ServiceRequestModal"}
      onOpenChange={() => dispatch(closeModal())}
    >
      <DialogContent className="md:max-w-3xl! lg:max-w-4xl! max-h-[90vh] overflow-y-auto custom_scrollbar">
        <DialogHeader>
          <DialogTitle className="text-black">
            {modalData?.serviceTitle
              ? modalData.serviceTitle
              : modalData?.type === "service_request"
                ? t("ServiceRequestModal.title")
                : t("ServiceRequestModal.titleProduct")}
          </DialogTitle>
          <DialogDescription className="sr-only"></DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {!modalData?.serviceId && modalData?.type === "service_request" && (
            <Controller
              name="service_id"
              control={control}
              render={({ field }) => (
                <MainInput
                  {...field}
                  type="select"
                  label={t("ServiceRequestModal.serviceLabel")}
                  placeholder={t("ServiceRequestModal.servicePlaceholder")}
                  options={
                    contactServices?.map((service) => ({
                      value: String(service.id),
                      label: service.title,
                    })) || []
                  }
                  error={errors.service_id?.message}
                  disabled={isLoading}
                />
              )}
            />
          )}

          {!modalData?.serviceId && modalData?.type === "product_request" && (
            <Controller
              name="product_id"
              control={control}
              render={({ field }) => (
                <MainInput
                  {...field}
                  type="select"
                  label={t("ServiceRequestModal.productLabel")}
                  placeholder={t("ServiceRequestModal.productPlaceholder")}
                  options={
                    contactProducts?.map((product) => ({
                      value: String(product.id),
                      label: product.name,
                    })) || []
                  }
                  error={errors.product_id?.message}
                  disabled={isContactProductsLoading}
                />
              )}
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <MainInput
                  {...field}
                  label={t("ServiceRequestModal.nameLabel")}
                  placeholder={t("ServiceRequestModal.namePlaceholder")}
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
                  label={t("ServiceRequestModal.companyLabel")}
                  placeholder={t("ServiceRequestModal.companyPlaceholder")}
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
                  label={t("ServiceRequestModal.emailLabel")}
                  placeholder={t("ServiceRequestModal.emailPlaceholder")}
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
                  label={t("ServiceRequestModal.phoneLabel")}
                  placeholder={t("ServiceRequestModal.phonePlaceholder")}
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
                label={t("ServiceRequestModal.messageLabel")}
                placeholder={t("ServiceRequestModal.messagePlaceholder")}
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
                  <p className="text-red-500 text-sm mt-1">
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
            {isPending
              ? t("ServiceRequestModal.submitting")
              : t("ServiceRequestModal.submit")}
          </Button>

          {error && (
            <FormError
              errorMsg={
                error?.response?.data?.message ||
                t("ServiceRequestModal.errors.general")
              }
            />
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceRequestModal;
