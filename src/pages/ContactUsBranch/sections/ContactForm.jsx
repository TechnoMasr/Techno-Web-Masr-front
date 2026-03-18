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

const ContactForm = () => {
  const { slug } = useParams();

  const contactSchema = z.object({
    name: z.string().min(2, "الاسم مطلوب"),
    company_name: z.string().min(2, "اسم الشركة مطلوب"),
    email: z.string().email("البريد الإلكتروني غير صحيح"),
    message: z.string().min(5, "الرسالة يجب أن تكون 5 أحرف على الأقل"),
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
    mutationFn: sendContactUs,
    onSuccess: () => {
      reset();
      toast.success("تم إرسال الرسالة بنجاح");
    },
  });

  const onSubmit = (data) => {
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
  );
};

export default ContactForm;
