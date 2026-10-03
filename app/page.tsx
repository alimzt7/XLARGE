import { FeaturedProducts } from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <main id="home">
        <Header />

        <HeroSection />

        <FeaturedProducts products={products} />
      </main>
      <Footer />
    </>
  );
}
