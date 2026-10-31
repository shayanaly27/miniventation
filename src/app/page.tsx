import BestSellers from "./_components/main-page/best-sellers";
import CategorySection from "./_components/main-page/categories-section";
import FeaturesStrip from "./_components/main-page/feature-strip";
import Hero from "./_components/main-page/hero/hero";

export default function Home() {
  return (
    <main className="min-w-0 w-full">
      <Hero />
      <FeaturesStrip/>
      <CategorySection/>
      <BestSellers/>
    </main>
  );
}