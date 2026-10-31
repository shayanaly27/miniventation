import Sales from "./_components/sales";
import ProductBrowser from "./_components/product-browser";

export default function ShopPage() {
  return (
    <main className="min-w-0 w-full">
      <Sales />
      <ProductBrowser />
    </main>
  );
}