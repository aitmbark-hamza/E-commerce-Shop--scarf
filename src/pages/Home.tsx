import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import hero from "@/assets/hero.png";

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 overflow-hidden rounded-b-3xl mb-12">
        <img
          src={hero}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          {/* مثال، يمكن تحط عنوان هنا */}
          {/* <h1 className="text-4xl md:text-6xl font-bold text-white">Scarf Store</h1> */}
        </div>
      </section>

      {/* Welcome Banner Under Hero */}
      <div className="overflow-hidden bg-black text-white py-4">
        <div className="whitespace-nowrap inline-block animate-scroll text-xl font-semibold">
          🔥 عروض محدودة — Livraison gratuite sur Casa • 🔥 عروض محدودة — Livraison gratuite sur Casa • 🔥 عروض محدودة — Livraison gratuite sur Casa •
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              salePrice={product.salePrice}
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Info Section */}
    
    </div>
  );
};

export default Home;
