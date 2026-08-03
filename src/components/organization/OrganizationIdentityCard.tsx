import { Building2, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import {
  formatOrganizationAddress,
  organizationIdentity,
  organizationIdentityCopy,
} from "@/content/organization-identity";
import type { Locale } from "@/i18n/routing";

interface OrganizationIdentityCardProps {
  locale: Locale;
}

export function OrganizationIdentityCard({ locale }: OrganizationIdentityCardProps) {
  const copy = organizationIdentityCopy[locale];
  const address = formatOrganizationAddress(locale);

  const identityRows = [
    {
      label: copy.legalNameLabel,
      value: organizationIdentity.legalName,
      icon: Building2,
    },
    {
      label: copy.brandLabel,
      value: `${organizationIdentity.brandNameAr} | ${organizationIdentity.brandName}`,
      icon: ShieldCheck,
    },
    {
      label: copy.registrationLabel,
      value: organizationIdentity.registrationNumber,
      icon: ShieldCheck,
    },
    {
      label: copy.addressLabel,
      value: address,
      icon: MapPin,
    },
  ];

  return (
    <section className="py-14 lg:py-16" aria-labelledby="organization-identity-title">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-navy-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-700">
              <ShieldCheck className="size-4" aria-hidden="true" />
              {copy.legalNameLabel}
            </p>
            <h2 id="organization-identity-title" className="mt-3 text-3xl font-bold text-brand-navy">
              {copy.title}
            </h2>
            <p className="mt-4 leading-8 text-brand-navy-700/85">{copy.description}</p>
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {identityRows.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-2xl border border-brand-navy-100 bg-brand-ivory/45 p-5">
                  <dt className="flex items-center gap-2 text-sm font-semibold text-brand-navy-700/70">
                    <Icon className="size-4 text-brand-teal-700" aria-hidden="true" />
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-bold leading-7 text-brand-navy" dir="auto">
                    {item.value}
                  </dd>
                </div>
              );
            })}
          </dl>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a
              href={`mailto:${organizationIdentity.email}`}
              className="group rounded-2xl border border-brand-navy-100 p-5 transition hover:border-brand-teal-300 hover:shadow-md"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-brand-navy-700/70">
                <Mail className="size-4 text-brand-teal-700" aria-hidden="true" />
                {copy.emailLabel}
              </span>
              <span className="mt-2 block font-bold text-brand-navy" dir="ltr">
                {organizationIdentity.email}
              </span>
            </a>
            <a
              href={`tel:${organizationIdentity.telephone}`}
              className="group rounded-2xl border border-brand-navy-100 p-5 transition hover:border-brand-teal-300 hover:shadow-md"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-brand-navy-700/70">
                <Phone className="size-4 text-brand-teal-700" aria-hidden="true" />
                {copy.phoneLabel}
              </span>
              <span className="mt-2 block font-bold text-brand-navy" dir="ltr">
                {organizationIdentity.telephoneDisplay}
              </span>
            </a>
            <a
              href={`https://wa.me/${organizationIdentity.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-brand-navy-100 p-5 transition hover:border-brand-teal-300 hover:shadow-md"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-brand-navy-700/70">
                <MessageCircle className="size-4 text-brand-teal-700" aria-hidden="true" />
                {copy.whatsappLabel}
              </span>
              <span className="mt-2 block font-bold text-brand-navy" dir="ltr">
                {organizationIdentity.whatsappDisplay}
              </span>
            </a>
          </div>

          <p className="mt-6 text-sm leading-7 text-brand-navy-700/70">{copy.contactNote}</p>
        </div>
      </div>
    </section>
  );
}
