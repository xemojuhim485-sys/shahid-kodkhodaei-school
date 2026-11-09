# دبیرستان شهید کدخدایی
سامانه Full-Stack با Next.js + TypeScript + PostgreSQL + Prisma + Tailwind.

## اجرا
1. Node.js 20+ و PostgreSQL 15+ نصب کنید.
2. `cp .env.example .env` و `DATABASE_URL` و `AUTH_SECRET` را تنظیم کنید.
3. `npm install`
4. `npx prisma migrate dev --name init`
5. `npm run db:seed`
6. `npm run dev`
7. `http://localhost:3000` را باز کنید.

## حساب‌های seed
- admin / Admin@12345 — مدیر
- moaven / Moaven@12345 — معاون
- teacher1 / Teacher@12345 — معلم
- hamyar1 / Hamyar@12345 — همیار آموزشی
- student1 / Student@12345 — دانش‌آموز

در محیط واقعی بلافاصله رمزهای seed را تغییر دهید.

## منطق برنامه هفتگی
در `Schedule` برای هر زنگ `subjectA` و در صورت نیاز `subjectB` نگهداری می‌شود. مقدارهایی مانند `ریاضی / علوم` معنای یک‌هفته‌درمیان دارند. تابع انتخاب هفته را می‌توان در UI/سرور بر اساس شماره هفته سال تحصیلی اعمال کرد. تاریخ‌های شمسی فقط برای نمایش هستند؛ PostgreSQL زمان را میلادی/UTC نگه می‌دارد.

## نکات production
- `AUTH_SECRET` طولانی و تصادفی باشد.
- PostgreSQL با TLS و کاربر کم‌دسترسی اجرا شود.
- reverse proxy و HTTPS فعال باشد.
- برای فایل عکس از object storage استفاده کنید.
- rate limit برای login و audit log قبل از استقرار عمومی اضافه شود.
