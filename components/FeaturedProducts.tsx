"use client";

import { useEffect, useRef, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/types/product";
import { Icon } from "./icons";

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const entryIndex = Number(
            (entry.target as HTMLElement).dataset.carouselIndex,
          );
          const isFullyVisible =
            entry.isIntersecting && entry.intersectionRatio >= 0.95;

          if (entryIndex === 0) {
            setIsAtStart(isFullyVisible);
          }

          if (entryIndex === products.length - 1) {
            setIsAtEnd(isFullyVisible);
          }
        });

        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          )[0];

        if (!visibleEntry) {
          return;
        }

        const nextIndex = Number(
          (visibleEntry.target as HTMLElement).dataset.carouselIndex,
        );

        if (!Number.isNaN(nextIndex)) {
          setActiveIndex(nextIndex);
        }
      },
      { root: rail, threshold: [0.5, 0.75, 1] },
    );

    itemRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, [products.length]);

  function scrollToIndex(index: number) {
    const nextIndex = Math.max(0, Math.min(index, products.length - 1));
    const item = itemRefs.current[nextIndex];

    if (!item) {
      return;
    }

    setActiveIndex(nextIndex);
    item.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }

  if (!products.length) {
    return null;
  }

  return (
    <section id="collection" className="mx-auto max-w-7xl px-0 py-10 lg:py-28">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <h2 className="font-display [font-size:var(--font-h2)] text-text-primary">
            محصولات منتخب
          </h2>
        </div>
      </div>
      <div className="relative w-full">
        <div className="relative overflow-hidden">
          {!isAtStart && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-14 bg-gradient-to-l from-background via-background/20 to-transparent lg:block lg:w-40"
            />
          )}
          {!isAtEnd && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-14 bg-gradient-to-r from-background via-background/20 to-transparent lg:block lg:w-40"
            />
          )}

          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 2)}
            disabled={isAtStart}
            aria-label="محصول قبلی"
            className="absolute start-1 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-primary/25 bg-surface/80 text-text-primary shadow-lg backdrop-blur-xl transition-all hover:border-primary/60 hover:bg-primary disabled:pointer-events-none disabled:opacity-30 lg:grid"
          >
            <Icon name="next" size={19} />
          </button>

          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 2)}
            disabled={isAtEnd}
            aria-label="محصول بعدی"
            className="absolute end-1 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-primary/25 bg-surface/80 text-text-primary shadow-lg backdrop-blur-xl transition-all hover:border-primary/60 hover:bg-primary disabled:pointer-events-none disabled:opacity-30 lg:grid"
          >
            <Icon name="previous" size={19} />
          </button>

          <div
            ref={railRef}
            className="scrollbar-none overflow-x-auto pb-8 pt-6 lg:px-14 lg:pt-10"
          >
            <div className="flex w-max min-w-full snap-x snap-mandatory gap-4 lg:gap-5">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  ref={(item) => {
                    itemRefs.current[index] = item;
                  }}
                  data-carousel-index={index}
                  className="shrink-0 snap-center"
                >
                  <ProductCard product={product} priority={index === 0} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center gap-2 pt-2"
          aria-label="انتخاب محصول"
        >
          {products.map((product, index) => (
            <button
              type="button"
              key={product.id}
              onClick={() => scrollToIndex(index)}
              aria-label={`نمایش محصول ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-text-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
