"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatProductPrice } from "@/lib/products";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({
  product,
  priority = false,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article
      id={product.slug}
      className="group relative flex min-h-[35rem] w-[16.5rem] shrink-0 flex-col overflow-hidden rounded-[1.75rem] border-[0.5px] border-primary/30 bg-surface/60 text-text-primary shadow-luxury backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_30px_70px_rgba(109,0,26,0.28)] lg:w-[17.5rem]"
    >
      <div className="relative p-3 pb-0">
        <Link
          href={`/products/${product.id}`}
          aria-label={`مشاهده ${product.name}`}
          className="relative block aspect-[1.04/1] overflow-hidden rounded-[1.35rem] bg-background/60"
        >
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 280px, 72vw"
            className="object-cover saturate-[0.72] contrast-[1.02] transition duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
        </Link>
        <span className="absolute right-6 top-6 rounded-full border border-primary/20 bg-background/50 px-3 py-1 [font-size:var(--font-body)] font-medium text-text-primary backdrop-blur-md">
          {product.badge ?? product.category}
        </span>
        <button
          type="button"
          aria-label={
            isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"
          }
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite((current) => !current)}
          className={`absolute left-6 top-6 grid h-9 w-9 place-items-center rounded-full border border-primary/20 bg-background/50 [font-size:var(--font-body)] leading-none text-text-primary backdrop-blur-md transition-colors hover:bg-primary ${isFavorite ? "bg-primary" : ""}`}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <Link
          href={`/products/${product.id}`}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <p className="mb-2 [font-size:var(--font-body)] font-medium uppercase tracking-[0.16em] text-primary">
            {product.category}
          </p>
          <h2 className="font-display [font-size:var(--font-h2)] text-text-primary">
            {product.name}
          </h2>
          <p className="mt-3 line-clamp-2 [font-size:var(--font-body)] leading-6 text-text-secondary">
            {product.description}
          </p>
        </Link>

        <div className="mt-auto pt-5">
          <div className="mb-4 flex items-center gap-2 [font-size:var(--font-body)] text-text-secondary">
            <span className="text-primary">★</span>
            <span>{(product.rating ?? 4.8).toLocaleString("fa-IR")}</span>
            <span>({(product.reviewCount ?? 12).toLocaleString("fa-IR")})</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <p className="[font-size:var(--font-body)] font-semibold text-text-primary">
              {formatProductPrice(product.price)}
            </p>
            <Link
              href={`/products/${product.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 [font-size:var(--font-body)] font-medium text-text-primary transition-colors hover:bg-primary/85"
            >
              مشاهده جزئیات
              <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
