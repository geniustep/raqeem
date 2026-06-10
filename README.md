# رقيم | Raqeem — الموقع الرسمي

الموقع التعريفي الرسمي لمنصة **رقيم**: منصة رقمية متكاملة لإدارة المؤسسات التعليمية
(المدارس • المعاهد • مراكز الدعم • مراكز اللغات).

> **تنبيه الهوية البصرية:** لا يجوز إعادة رسم أو تعديل ملفات الهوية الرسمية.
> ملفا اللوغو في `public/brand/` يُستعملان كما هما، دون قص أو تلوين أو تغيير نسب.

## التقنيات

| التقنية              | الإصدار           |
| -------------------- | ----------------- |
| Next.js (App Router) | 16.2.9            |
| React                | 19.2.7            |
| TypeScript (strict)  | 5.9.3             |
| Tailwind CSS         | 4.3.0             |
| next-intl            | 4.13.0            |
| Zod                  | 4.4.3             |
| React Hook Form      | 7.78.0            |
| Lucide React         | 1.17.0            |
| Playwright           | 1.60.0            |
| Node.js              | 24 LTS (`.nvmrc`) |
| pnpm                 | ≥ 10              |

## المتطلبات

- Node.js 24 (استعمل `nvm use` لقراءة `.nvmrc`)
- pnpm 10 أو أحدث

## التثبيت والتشغيل

```bash
pnpm install
cp .env.example .env.local   # ثم عدّل القيم
pnpm dev                     # http://localhost:3000
```

## Environment Variables

انظر `.env.example` للقائمة الكاملة. أهمها:

| المتغير                                       | إلزامي     | الوصف                                                     |
| --------------------------------------------- | ---------- | --------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                        | في الإنتاج | عنوان الموقع الكنسي (مثل `https://raqeem.ma`)             |
| `NEXT_PUBLIC_APP_URL`                         | في الإنتاج | رابط تسجيل الدخول للوحة التطبيق (`https://app.raqeem.ma`) |
| `NEXT_PUBLIC_FACEBOOK_URL` وأخواتها           | لا         | روابط اجتماعية؛ تُخفى إن كانت فارغة                       |
| `CONTACT_TO_EMAIL` / `DEMO_TO_EMAIL`          | لا         | وجهة رسائل النماذج                                        |
| `EMAIL_FROM` + `EMAIL_PROVIDER_API_KEY`       | لا         | مزود البريد (واجهة متوافقة مع Resend)                     |
| `TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | لا         | حماية Cloudflare Turnstile الاختيارية                     |
| `NEXT_PUBLIC_ANALYTICS_ID`                    | لا         | تفعيل طبقة التحليلات (معطلة إن كان فارغًا)                |

يتم التحقق من المتغيرات عبر Zod في `src/lib/env.ts`، ويفشل التطبيق برسالة
واضحة عند غياب متغير إلزامي في الإنتاج. لا تضف `.env.local` إلى Git أبدًا.

## اللغات

المسارات: `/ar` (افتراضية، RTL) و`/fr` و`/en` و`/es`.

- الترجمات في `messages/{ar,fr,en,es}.json` بمفاتيح منظمة (`hero.title`، `forms.demo.fields.*`…).
- **إضافة ترجمة:** أضف المفتاح في الملفات الأربعة، ثم استعمله عبر
  `useTranslations()` أو `getTranslations()`. لا تكتب نصوص واجهة داخل المكونات.
- **إضافة لغة:** أضفها في `src/i18n/routing.ts` (`locales`, `localeDirections`, `localeNames`)
  وأنشئ `messages/<locale>.json`.

## بنية المجلدات

```txt
src/
  app/[locale]/        الصفحات (solutions, features, institutions/*, roles/*, …)
  app/api/             demo-request, contact, health
  components/          brand, layout, navigation, sections, forms, ui, seo
  features/            demo-request, contact (نماذج العميل)
  i18n/                routing, request, navigation
  lib/                 env, metadata, schemas, constants, analytics, security, email, jsonld
  styles/globals.css   Design Tokens + Tailwind
messages/              ar, fr, en, es
public/brand/          اللوغو الرسمي (لا يُعدّل)
public/screenshots/    لقطات المنتج الحقيقية (Placeholders عند غيابها)
tests/e2e/             اختبارات Playwright
```

## إضافة صفحة

1. أنشئ `src/app/[locale]/<path>/page.tsx` مع `generateMetadata` عبر
   `buildPageMetadata` و`setRequestLocale`.
2. أضف مفاتيح `metadata.<page>` والمحتوى في ملفات الترجمة الأربعة.
3. أضف المسار إلى `src/app/sitemap.ts` وروابط التنقل إن لزم.

## إضافة Screenshot

ضع الصور في `public/screenshots/` (انظر README هناك للتسمية)، ثم اربطها في
أقسام `Hero` و`ProductSection` عبر `next/image` بأبعاد صريحة.

## الفحوص والاختبارات

```bash
pnpm typecheck      # TypeScript strict
pnpm lint           # ESLint
pnpm format:check   # Prettier
pnpm build          # بناء الإنتاج
pnpm check          # كل ما سبق

pnpm build          # مطلوب قبل الاختبارات (الخادم production)
pnpm test:e2e       # Playwright على Chromium/Firefox/WebKit
pnpm test:e2e:ui    # واجهة Playwright التفاعلية
```

## Docker

```bash
docker compose up --build      # يبني multi-stage ويشغّل كمستخدم غير root
curl http://localhost:3000/api/health   # {"ok":true}
```

البناء داخل Docker يستعمل `output: "standalone"` (عبر `BUILD_STANDALONE=1`).

## النشر

### Vercel

1. اربط المستودع بمشروع Vercel (إطار Next.js يُكتشف تلقائيًا، والمدير pnpm).
2. أضف Environment Variables من الجدول أعلاه (Production).
3. وجّه نطاق `raqeem.ma` إلى المشروع.

### Docker على VPS

```bash
git clone <repo> && cd raqeem
cp .env.example .env.local && nano .env.local
docker compose up -d --build
```

### Reverse Proxy (Nginx)

```nginx
server {
  server_name raqeem.ma;
  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

ثم فعّل TLS عبر certbot أو ضع الموقع خلف Cloudflare (Full strict). ترويسة
`X-Forwarded-For` ضرورية لعمل Rate Limiting الخاص بالنماذج بشكل صحيح.

### Cloudflare

- Proxy مفعّل + TLS Full (strict).
- يمكن تفعيل Turnstile للنماذج عبر مفاتيح البيئة دون أي تغيير في الكود.

## سياسة اللوغو

- `public/brand/raqeem-logo.png` — النسخة الكاملة: Header وFooter والأقسام التعريفية.
- `public/brand/raqeem-logo-small.png` — الرمز: الأيقونات وFavicon وصور العلامة المصغرة.
- ممنوع: إعادة الرسم، تغيير الألوان، القص، تغيير النسب، فصل الرمز عن الاسم في
  النسخة الكاملة، أو كتابة «رقيم/Raqeem» بخط بديل.
- أيقونات `public/icons/` وصورة `public/social/og-image.png` مولّدة من الملفين
  الرسميين بالتبطين فقط (دون أي تعديل على الرسم).
