"use client";

import { Backpack, Presentation, ShieldCheck, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

const ROLES = [
  { key: "administration", icon: ShieldCheck },
  { key: "teachers", icon: Presentation },
  { key: "parents", icon: Users },
  { key: "students", icon: Backpack },
] as const;

type RoleKey = (typeof ROLES)[number]["key"];

export function RolesSection() {
  const t = useTranslations("roles");
  const [active, setActive] = useState<RoleKey>("administration");
  const tabRefs = useRef<Partial<Record<RoleKey, HTMLButtonElement | null>>>({});

  function onKeyDown(event: React.KeyboardEvent, index: number) {
    let nextIndex: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % ROLES.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + ROLES.length) % ROLES.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = ROLES.length - 1;
    }
    if (nextIndex === null) {
      return;
    }
    event.preventDefault();
    const role = ROLES[nextIndex];
    if (role) {
      setActive(role.key);
      tabRefs.current[role.key]?.focus();
    }
  }

  const activeRole = ROLES.find((role) => role.key === active) ?? ROLES[0];

  return (
    <section className="bg-brand-ivory py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-navy-700/80">{t("description")}</p>
        </div>

        <div
          role="tablist"
          aria-label={t("tablistLabel")}
          className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2"
        >
          {ROLES.map((role, index) => {
            const selected = role.key === active;
            return (
              <button
                key={role.key}
                ref={(element) => {
                  tabRefs.current[role.key] = element;
                }}
                type="button"
                role="tab"
                id={`role-tab-${role.key}`}
                aria-selected={selected}
                aria-controls={`role-panel-${role.key}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(role.key)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={`inline-flex h-11 items-center gap-2 rounded-xl px-4 text-sm font-semibold transition ${
                  selected
                    ? "bg-brand-navy text-white shadow-sm"
                    : "bg-white text-brand-navy hover:bg-brand-navy-50"
                }`}
              >
                <role.icon aria-hidden="true" className="size-4" strokeWidth={2} />
                {t(`${role.key}.label`)}
              </button>
            );
          })}
        </div>

        <div
          key={activeRole.key}
          role="tabpanel"
          id={`role-panel-${activeRole.key}`}
          aria-labelledby={`role-tab-${activeRole.key}`}
          className="animate-fade-up mx-auto mt-8 grid max-w-4xl grid-cols-1 items-center gap-8 rounded-2xl border border-brand-navy-100 bg-white p-8 md:grid-cols-2"
        >
          <div>
            <h3 className="text-2xl font-bold text-brand-navy">{t(`${activeRole.key}.title`)}</h3>
            <p className="mt-3 leading-7 text-brand-navy-700/85">
              {t(`${activeRole.key}.description`)}
            </p>
            <ul className="mt-5 space-y-3">
              {(["1", "2", "3", "4"] as const).map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-brand-navy-700/90">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-2 shrink-0 rounded-full bg-brand-gold"
                  />
                  {t(`${activeRole.key}.points.${point}`)}
                </li>
              ))}
            </ul>
          </div>
          <div
            aria-hidden="true"
            className="bg-dots-soft flex h-full min-h-48 items-center justify-center rounded-xl border border-brand-navy-50 bg-brand-ivory/70 p-6"
          >
            <span className="inline-flex size-20 items-center justify-center rounded-2xl bg-white shadow-sm">
              <activeRole.icon className="size-10 text-brand-teal-600" strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
