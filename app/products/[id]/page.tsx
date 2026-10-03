import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/products";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map(({ id }) => ({ id }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <div></div>
    </main>
  );
}
