"use client";

import Image from "next/image";
import { useState } from "react";
import { Link } from "@/i18n/navigation";

interface Screenshot {
  key: string;
  src: string;
  width: number;
  height: number;
  title: string;
  description: string;
  alt: string;
  href?: string;
}

interface ProductGalleryProps {
  screenshots: Screenshot[];
  ariaLabel: string;
  actionLabel: string;
}

export function ProductGallery({ screenshots, ariaLabel, actionLabel }: ProductGalleryProps) {
  const [activeKey, setActiveKey] = useState(screenshots[0]?.key);
  const activeScreenshot =
    screenshots.find((screenshot) => screenshot.key === activeKey) ?? screenshots[0];

  if (!activeScreenshot) return null;

  return (
    <div className="mt-10 lg:mt-12">
      <div className="overflow-hidden rounded-3xl border border-brand-navy-100 bg-white shadow-xl shadow-brand-navy/10">
        <div className="relative overflow-hidden border-b border-brand-navy-100 bg-brand-navy-50">
          <Image
            key={activeScreenshot.key}
            src={activeScreenshot.src}
            width={activeScreenshot.width}
            height={activeScreenshot.height}
            alt={activeScreenshot.alt}
            sizes="(min-width: 1280px) 1200px, 100vw"
            loading="lazy"
            fetchPriority="low"
            className="h-auto w-full"
          />
        </div>
        <div className="px-5 py-5 sm:px-7">
          <h3 className="text-lg font-bold text-brand-navy">{activeScreenshot.title}</h3>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-brand-navy-700/70">
            {activeScreenshot.description}
          </p>
          {activeScreenshot.href ? (
            <Link
              href={activeScreenshot.href}
              className="mt-4 inline-flex text-sm font-semibold text-brand-teal-700 transition hover:text-brand-teal-600"
            >
              {actionLabel}
            </Link>
          ) : null}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4" role="tablist" aria-label={ariaLabel}>
        {screenshots.map((screenshot) => {
          const isActive = screenshot.key === activeScreenshot.key;

          return (
            <button
              key={screenshot.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveKey(screenshot.key)}
              className={`rounded-2xl border px-4 py-3 text-start transition ${
                isActive
                  ? "border-brand-gold bg-white shadow-md shadow-brand-navy/10"
                  : "border-brand-navy-100 bg-white/60 hover:border-brand-gold/60 hover:bg-white"
              }`}
            >
              <span className="block text-sm font-bold text-brand-navy">{screenshot.title}</span>
              <span
                aria-hidden="true"
                className={`mt-2 block h-0.5 transition-all ${
                  isActive ? "w-10 bg-brand-gold" : "w-5 bg-brand-navy-100"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
