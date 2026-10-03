export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  badge?: string;
  rating?: number;
  reviewCount?: number;
}
