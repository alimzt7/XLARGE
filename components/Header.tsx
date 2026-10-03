import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icons";
import Navbar from "./Navbar";

const actionClassName =
  "grid h-11 w-11 place-items-center rounded-full border border-primary/20 bg-surface/35 text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_25px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/70";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex h-[5.5rem] items-center justify-between border-b border-primary/15 bg-background/15 px-4 backdrop-blur-md sm:px-10 lg:px-16">
      <Navbar />

      <Image
        src="/icons/Image.webp"
        alt="لوگوی ایکس‌ال"
        width={150}
        height={70}
        priority
        className="absolute left-1/2 h-auto w-[8.5rem] -translate-x-1/2 object-contain sm:w-[9.5rem]"
      />

      <div className="mr-auto flex flex-row-reverse gap-2 sm:gap-3">
        <Link
          href="/profile"
          aria-label="پروفایل کاربری"
          className={actionClassName}
        >
          <Icon name="profile" size={17} />
        </Link>

        <Link
          href="/cart"
          aria-label="سبد خرید"
          className={`${actionClassName} relative`}
        >
          <Icon name="bag" size={17} />
          <span className="absolute -left-1 -top-1 flex justify-center items-center h-5 min-w-5 rounded-full border border-background/40 bg-primary px-1 [font-size:var(--font-body)] text-text-primary">
            ۰
          </span>
        </Link>
      </div>
    </header>
  );
}
