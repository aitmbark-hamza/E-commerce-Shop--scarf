import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-12">
       

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
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
      </div>
    </div>
  );
};

export default Products;
