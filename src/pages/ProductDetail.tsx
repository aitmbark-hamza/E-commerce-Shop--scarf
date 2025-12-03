import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/lib/products";
import { useCartStore } from "@/lib/cart";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { OrderForm } from "@/components/OrderForm";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const addItem = useCartStore((state) => state.addItem);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  const product = getProductById(Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/products")}>Back to Products</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.image,
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="relative aspect-[4/5] bg-secondary overflow-hidden rounded-2xl shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                {product.salePrice ? (
                  <>
                    <span className="text-3xl font-bold text-foreground">DH {product.salePrice}</span>
                    <span className="text-2xl text-muted-foreground line-through">DH {product.price}</span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-foreground">DH {product.price}</span>
                )}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-6">
              <p className="text-sm">
                <span className="font-semibold">Availability: </span>
                {product.inStock ? (
                  <span className="text-foreground">In Stock</span>
                ) : (
                  <span className="text-muted-foreground">Out of Stock</span>
                )}
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1"
                onClick={() => setIsOrderFormOpen(true)}
                disabled={!product.inStock}
              >
                Order Now
              </Button>
            </div>

            <div className="mt-12 pt-12 border-t border-border space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">Free worldwide shipping on all orders</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">30-day hassle-free return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Form Modal */}
      <OrderForm
        productName={product.name}
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
      />
    </div>
  );
};

export default ProductDetail;