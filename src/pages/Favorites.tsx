import { Link } from "react-router-dom";
import { Heart, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavoritesStore } from "@/lib/favorites";
import { useCartStore } from "@/lib/cart";
import { toast } from "sonner";

const Favorites = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  const addToCart = useCartStore((state) => state.addItem);

  const handleRemoveFavorite = (productId: number, productName: string) => {
    removeFavorite(productId);
    toast.success(`${productName} removed from favorites`);
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.image,
    });
    toast.success(`${product.name} added to cart`);
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <Heart className="h-20 w-20 mx-auto text-muted-foreground opacity-50" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Your Favorites List is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Start adding your favorite products to your wishlist. You can easily access them anytime!
            </p>
            <Link to="/products">
              <Button size="lg" className="gap-2">
                Continue Shopping <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Heart className="h-8 w-8 text-red-500 fill-red-500" />
              My Favorites
            </h1>
            <p className="text-muted-foreground">
              You have {favorites.length} {favorites.length === 1 ? 'item' : 'items'} in your favorites
            </p>
          </div>

          {/* Favorites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((product) => (
              <div
                key={product.id}
                className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                {/* Image Container */}
               {/* Image Container */}
<div className="relative w-full pb-[100%] bg-secondary overflow-hidden">
  <img
    src={product.image}
    alt={product.name}
    className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
  />
  {product.salePrice && (
    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
      Sale
    </div>
  )}
</div>


                {/* Product Info */}
                <div className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-semibold hover:text-muted-foreground transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {product.category}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2 mt-3">
                    {product.salePrice ? (
                      <>
                        <span className="text-lg font-bold text-foreground">
                          ${product.salePrice.toFixed(2)}
                        </span>
                        <span className="text-sm line-through text-muted-foreground">
                          ${product.price.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-foreground">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Stock Status */}
                  <div className="mt-3">
                    <p className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4">
                    <Button
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                      variant="default"
                      className="flex-1 gap-2"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button
                      onClick={() => handleRemoveFavorite(product.id, product.name)}
                      variant="outline"
                      size="icon"
                      className="text-red-500 hover:text-red-600"
                    >
                      <Heart className="h-4 w-4 fill-red-500" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
