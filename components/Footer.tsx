import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { Icon } from "@/components/icons";

function Footer() {
  return (
    <footer
      id="about"
      className="relative overflow-hidden border-t border-primary/20 bg-surface/20 px-6 pb-8 pt-16 sm:px-10 lg:px-16 lg:pt-10"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_repeat(3,minmax(0,1fr))] lg:gap-14">
          <section aria-labelledby="footer-brand-title">
            <div className="mb-5 flex items-center gap-3">
              <h2
                id="footer-brand-title"
                className="font-display [font-size:var(--font-h2)] leading-none text-text-primary"
              >
                X-LARGE
              </h2>
              <span className="h-px w-12 bg-primary/50" />
            </div>
            <p className="max-w-xs [font-size:var(--font-body)] leading-8 text-text-secondary">
              ایکس‌لارج؛ پوشیدنی‌هایی برای کسانی که جزئیات را می‌بینند و
              انتخاب‌هایشان را ماندگار می‌کنند.
            </p>
            <a
              href="mailto:hello@xlstudio.ir"
              className="mt-5 inline-flex items-center gap-2 [font-size:var(--font-body)] text-text-primary transition-colors hover:text-primary"
            >
              hello@xlstudio.ir
            </a>
          </section>

          <nav aria-labelledby="footer-links-title">
            <h3
              id="footer-links-title"
              className="mb-5 [font-size:var(--font-body)] font-semibold uppercase tracking-[0.18em] text-primary"
            >
              دسترسی سریع
            </h3>
            <ul className="space-y-3 [font-size:var(--font-body)] text-text-secondary">
              <li>
                <Link
                  className="transition-colors hover:text-text-primary"
                  href="#home"
                >
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-text-primary"
                  href="#collection"
                >
                  مجموعه منتخب
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-text-primary"
                  href="#contact"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </nav>

          <section id="contact" aria-labelledby="footer-contact-title">
            <h3
              id="footer-contact-title"
              className="mb-5 [font-size:var(--font-body)] font-semibold uppercase tracking-[0.18em] text-primary"
            >
              در تماس بمانید
            </h3>
            <div className="space-y-4 [font-size:var(--font-body)] text-text-secondary">
              <a
                href="tel:+982112345678"
                className="flex items-center gap-3 transition-colors hover:text-text-primary"
              >
                <Icon
                  name="phone"
                  size={17}
                  className="shrink-0 text-primary"
                />
                +۹۸ ۱۲۳۴ ۵۶۷۸
              </a>
              <p className="flex items-center gap-3">
                <Icon
                  name="location"
                  size={17}
                  className="shrink-0 text-primary"
                />
                اصفهان، سیتی سنتر
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="اینستاگرام XLARGE"
                className="grid h-9 w-9 place-items-center rounded-full border border-primary/25 bg-surface/60 text-text-secondary transition-all hover:border-primary/60 hover:bg-primary hover:text-text-primary"
              >
                <Icon name="instagram" size={16} />
              </a>
              <a
                  href="mailto:hello@xlstudio.ir"
                aria-label="ایمیل XLARGE"
                className="grid h-9 w-9 place-items-center rounded-full border border-primary/25 bg-surface/60 text-text-secondary transition-all hover:border-primary/60 hover:bg-primary hover:text-text-primary"
              >
                <span className="[font-size:var(--font-body)] font-semibold">
                  @
                </span>
              </a>
            </div>
          </section>

          <section aria-labelledby="footer-settings-title">
            <h3
              id="footer-settings-title"
              className="mb-5 [font-size:var(--font-body)] font-semibold uppercase tracking-[0.18em] text-primary"
            >
              تنظیمات نمایش
            </h3>
            <div className="rounded-2xl border border-primary/20 bg-surface/50 p-4 backdrop-blur-lg">
              <p className="mb-4 [font-size:var(--font-body)] leading-6 text-text-secondary">
                تجربه‌ی XL را با حال‌وهوای مورد علاقه‌ات ببین.
              </p>
              <ThemeToggle />
            </div>
          </section>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-primary/15 pt-6 [font-size:var(--font-body)] text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© ۲۰۲۶ XL / ایکس‌ال. تمامی حقوق محفوظ است.</p>
          <p>با دقت ساخته‌شده، برای ماندگاری بیشتر.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
