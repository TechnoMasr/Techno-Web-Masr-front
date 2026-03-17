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
import { useMutation } from "@tanstack/react-query";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInputField from "@/components/form/PhoneInputField";
import { sendServiceRequest } from "@/api/mainServices";

const ServiceRequestModal = () => {
  const dispatch = useDispatch();
  const { modalName } = useSelector((state) => state.modals);

  const contactSchema = z.object({
    name: z.string().min(2, "الاسم مطلوب"),
    company_name: z.string().min(2, "اسم الشركة مطلوب"),
    email: z.string().email("البريد الإلكتروني غير صحيح"),
    message: z.string().min(10, "الرسالة يجب أن تكون 10 أحرف على الأقل"),
    phone: z.string().refine((value) => isValidPhoneNumber(value || ""), {
      message: "رقم الهاتف غير صحيح",
    }),
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
    },
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: sendServiceRequest,
    onSuccess: () => {
      reset();
      toast.success("تم إرسال الرسالة بنجاح");
    },
  });

  const onSubmit = (data) => {
    // mutate(data);
    console.log(data);
  };

  const services = [
    {
      id: 1,
      label: "طلب خدمة",
      value: "ServiceRequestModal",
    },
    {
      id: 2,
      label: "طلب خدمة",
      value: "ServiceRequestModal",
    },
    {
      id: 3,
      label: "طلب خدمة",
      value: "ServiceRequestModal",
    },
  ];

  return (
    <Dialog
      open={modalName === "ServiceRequestModal"}
      onOpenChange={() => dispatch(closeModal())}
    >
      <DialogContent className="md:max-w-3xl! max-h-[90vh] overflow-y-auto custom_scrollbar">
        <DialogHeader>
          <DialogTitle className={`text-black`}>طلب خدمة</DialogTitle>
          <DialogDescription className="sr-only"></DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Controller
            name="service"
            control={control}
            render={({ field }) => (
              <MainInput
                {...field}
                type="select"
                label="الخدمة"
                placeholder="الخدمة"
                options={services}
                error={errors.service?.message}
              />
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <MainInput
                  {...field}
                  label="الاسم"
                  placeholder="اكتب اسمك"
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
                  label="اسم الشركة"
                  placeholder="اكتب اسم الشركة"
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
                  label="البريد الإلكتروني"
                  placeholder="اكتب البريد الإلكتروني"
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
                  label="رقم الهاتف"
                  placeholder="اكتب رقم الهاتف"
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
                label="الرسالة"
                placeholder="اكتب رسالتك"
                error={errors.message?.message}
              />
            )}
          />

          <Button
            type="submit"
            disabled={isPending}
            className="w-fit mx-auto min-w-32"
          >
            {isPending ? "جاري الإرسال..." : "إرسال"}
          </Button>

          {error && (
            <FormError
              errorMsg={
                error?.response?.data?.message || "حدث خطأ ما، حاول مرة أخرى"
              }
            />
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceRequestModal;
