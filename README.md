# XL — ایکس‌لارج

> فروشگاه پوشاک مدرن با تمرکز بر طراحی مینیمال، تجربه‌ی RTL و ظاهر لوکس.

## اجرا

```bash
npm install
npm run dev
```

سپس در مرورگر به `http://localhost:3000` بروید.

## اسکریپت‌ها

```bash
npm run dev        # اجرای محیط توسعه
npm run typecheck  # بررسی TypeScript
npm run lint       # بررسی ESLint
npm run build      # ساخت نسخه production
npm run start      # اجرای نسخه production
```

## امکانات

- رابط کاربری فارسی و راست‌به‌چپ
- حالت روشن و تیره با ذخیره در مرورگر
- carousel محصولات با پشتیبانی از swipe و کنترل دکمه‌ای
- تصاویر و فونت‌های محلی برای کاهش وابستگی به سرویس‌های خارجی
- طراحی responsive با Tailwind CSS
- انیمیشن‌های سبک با Framer Motion

## ساختار پروژه

```text
app/          صفحات و layoutهای Next.js
components/   کامپوننت‌های رابط کاربری
hooks/        هوک‌های قابل استفاده مجدد
lib/          داده‌ها و توابع کمکی
types/        تایپ‌های TypeScript
public/       تصاویر، آیکون‌ها و فونت‌ها
```
