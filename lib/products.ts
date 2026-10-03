import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "01",
    slug: "tshirt",
    name: "تی‌شرت آرو",
    price: 320,
    description:
      "تی‌شرتی آزاد از پنبه‌ی سنگین، با یقه‌ای تمیز و فرم مینیمال برای استایل روزمره.",
    imageUrl: "/images/products/tshirt.png",
    category: "تیشرت",
    badge: "جدید",
    rating: 4.8,
    reviewCount: 24,
  },
  {
    id: "02",
    slug: "shirt",
    name: "پیراهن نایت",
    price: 590,
    description:
      "پیراهن مشکی با پارچه‌ی نرم و جزئیات ظریف شیری؛ تعادلی بین جسارت و ظرافت.",
    imageUrl: "/images/products/shirt.png",
    category: "پیراهن",
    badge: "محبوب",
    rating: 4.9,
    reviewCount: 38,
  },
  {
    id: "03",
    slug: "trousers",
    name: "شلوار واید ۰۷",
    price: 460,
    description:
      "شلواری خوش‌فرم با کمر بلند، پلیسه‌های دقیق و برشی آزاد برای حرکت راحت.",
    imageUrl: "/images/products/trousers.png",
    category: "شلوار",
    badge: "پرفروش",
    rating: 4.7,
    reviewCount: 19,
  },
  {
    id: "04",
    slug: "shoes",
    name: "کتانی لِول",
    price: 740,
    description:
      "کتانی چرمی روشن با جزئیات بورگاندی؛ ساده، تمیز و ساخته‌شده برای استفاده‌ی طولانی.",
    imageUrl: "/images/products/shoes.png",
    category: "کفش",
    badge: "تازه‌رسیده",
    rating: 4.8,
    reviewCount: 31,
  },
  {
    id: "05",
    slug: "jacket",
    name: "ژاکت بافت بورگاندی",
    price: 680,
    description:
      "ژاکتی حجیم با بافت عمودی، یقه‌ی بلند و طیف عمیق بورگاندی برای روزهای خنک.",
    imageUrl: "/images/products/jacket.png",
    category: "ژاکت",
    badge: "محدود",
    rating: 4.9,
    reviewCount: 17,
  },
  {
    id: "06",
    slug: "coat",
    name: "کاپشن آلترا",
    price: 990,
    description:
      "کاپشن بلند و سبک با لایه‌ی داخلی بورگاندی و کمربند قابل تنظیم برای فرم معماری.",
    imageUrl: "/images/products/coat.png",
    category: "کاپشن",
    badge: "ویژه",
    rating: 4.8,
    reviewCount: 12,
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function formatProductPrice(price: number) {
  return `${price.toLocaleString("fa-IR")} دلار`;
}
