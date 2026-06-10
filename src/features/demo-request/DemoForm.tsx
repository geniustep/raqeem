"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, CircleAlert } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CheckboxField,
  HoneypotField,
  SelectField,
  TextAreaField,
  TextField,
} from "@/components/forms/fields";
import { localeNames, locales, type Locale } from "@/i18n/routing";
import { track } from "@/lib/analytics";
import {
  demoRequestSchema,
  organizationTypes,
  studentCounts,
  type DemoRequest,
  type DemoRequestInput,
} from "@/lib/schemas";

type Status = "idle" | "success" | "error";

export function DemoForm() {
  const t = useTranslations("forms.demo");
  const tCommon = useTranslations("forms.common");
  const locale = useLocale() as Locale;
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DemoRequestInput, unknown, DemoRequest>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      organizationName: "",
      organizationType: "" as DemoRequestInput["organizationType"],
      city: "",
      estimatedStudentCount: "" as DemoRequestInput["estimatedStudentCount"],
      fullName: "",
      jobTitle: "",
      phone: "",
      email: "",
      preferredLanguage: locale,
      message: "",
      privacyConsent: false,
      website: "",
    },
  });

  const fieldError = (key: keyof DemoRequestInput): string | undefined => {
    const message = errors[key]?.message;
    return typeof message === "string" ? tCommon(message) : undefined;
  };

  async function onSubmit(data: DemoRequest) {
    setStatus("idle");
    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { ok?: boolean };
      if (response.ok && result.ok) {
        setStatus("success");
        track("demo_submit_success");
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
          id="organizationName"
          label={t("fields.organizationName")}
          autoComplete="organization"
          error={fieldError("organizationName")}
          {...register("organizationName")}
        />
        <SelectField
          id="organizationType"
          label={t("fields.organizationType")}
          placeholder={tCommon("selectPlaceholder")}
          error={fieldError("organizationType")}
          options={organizationTypes.map((value) => ({
            value,
            label: t(`organizationTypes.${value}`),
          }))}
          {...register("organizationType")}
        />
        <TextField
          id="city"
          label={t("fields.city")}
          autoComplete="address-level2"
          error={fieldError("city")}
          {...register("city")}
        />
        <SelectField
          id="estimatedStudentCount"
          label={t("fields.estimatedStudentCount")}
          placeholder={tCommon("selectPlaceholder")}
          error={fieldError("estimatedStudentCount")}
          options={studentCounts.map((value) => ({
            value,
            label: t(`studentCounts.${value}`),
          }))}
          {...register("estimatedStudentCount")}
        />
        <TextField
          id="fullName"
          label={t("fields.fullName")}
          autoComplete="name"
          error={fieldError("fullName")}
          {...register("fullName")}
        />
        <TextField
          id="jobTitle"
          label={t("fields.jobTitle")}
          autoComplete="organization-title"
          error={fieldError("jobTitle")}
          {...register("jobTitle")}
        />
        <TextField
          id="phone"
          label={t("fields.phone")}
          type="tel"
          autoComplete="tel"
          dir="ltr"
          error={fieldError("phone")}
          {...register("phone")}
        />
        <TextField
          id="email"
          label={t("fields.email")}
          type="email"
          autoComplete="email"
          dir="ltr"
          error={fieldError("email")}
          {...register("email")}
        />
      </div>

      <SelectField
        id="preferredLanguage"
        label={t("fields.preferredLanguage")}
        placeholder={tCommon("selectPlaceholder")}
        defaultValue={locale}
        error={fieldError("preferredLanguage")}
        options={locales.map((value) => ({ value, label: localeNames[value] }))}
        {...register("preferredLanguage")}
      />

      <TextAreaField
        id="message"
        label={`${t("fields.message")} (${tCommon("optional")})`}
        error={fieldError("message")}
        {...register("message")}
      />

      <CheckboxField
        id="privacyConsent"
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
