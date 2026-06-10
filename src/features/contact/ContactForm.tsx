"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, CircleAlert } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckboxField, HoneypotField, TextAreaField, TextField } from "@/components/forms/fields";
import { track } from "@/lib/analytics";
import { contactSchema, type ContactInput, type ContactMessage } from "@/lib/schemas";

type Status = "idle" | "success" | "error";

export function ContactForm() {
  const t = useTranslations("forms.contact");
  const tCommon = useTranslations("forms.common");
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput, unknown, ContactMessage>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      organization: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      privacyConsent: false,
      website: "",
    },
  });

  const fieldError = (key: keyof ContactInput): string | undefined => {
    const message = errors[key]?.message;
    return typeof message === "string" ? tCommon(message) : undefined;
  };

  async function onSubmit(data: ContactMessage) {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { ok?: boolean };
      if (response.ok && result.ok) {
        setStatus("success");
        track("contact_submit_success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-brand-teal-100 bg-brand-teal-50 p-8 text-center"
      >
        <CheckCircle2
          aria-hidden="true"
          className="mx-auto size-10 text-brand-teal-700"
          strokeWidth={2}
        />
        <h2 className="mt-4 text-2xl font-bold text-brand-navy">{t("successTitle")}</h2>
        <p className="mt-2 leading-7 text-brand-navy-700/85">{t("successMessage")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <HoneypotField {...register("website")} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          id="contact-name"
          label={t("fields.name")}
          autoComplete="name"
          error={fieldError("name")}
          {...register("name")}
        />
        <TextField
          id="contact-organization"
          label={`${t("fields.organization")} (${tCommon("optional")})`}
          autoComplete="organization"
          error={fieldError("organization")}
          {...register("organization")}
        />
        <TextField
          id="contact-phone"
          label={t("fields.phone")}
          type="tel"
          autoComplete="tel"
          dir="ltr"
          error={fieldError("phone")}
          {...register("phone")}
        />
        <TextField
          id="contact-email"
          label={t("fields.email")}
          type="email"
          autoComplete="email"
          dir="ltr"
          error={fieldError("email")}
          {...register("email")}
        />
      </div>

      <TextField
        id="contact-subject"
        label={t("fields.subject")}
        error={fieldError("subject")}
        {...register("subject")}
      />

      <TextAreaField
        id="contact-message"
        label={t("fields.message")}
        error={fieldError("message")}
        {...register("message")}
      />

      <CheckboxField
        id="contact-privacyConsent"
        label={t("fields.privacyConsent")}
        error={fieldError("privacyConsent")}
        {...register("privacyConsent")}
      />

      <div aria-live="polite">
        {status === "error" ? (
          <p className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
            <CircleAlert aria-hidden="true" className="size-5 shrink-0" strokeWidth={2} />
            {tCommon("genericError")}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-brand-navy px-7 text-base font-semibold text-white transition hover:bg-brand-navy-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? tCommon("submitting") : t("submit")}
      </button>
    </form>
  );
}
