import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useFavoritesStore } from "@/lib/favorites";
import { toast } from "sonner";
import { getProductById } from "@/lib/products";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  salePrice?: number;
}

export const ProductCard = ({ id, name, price, image, salePrice }: ProductCardProps) => {
  const isFavorite = useFavoritesStore((state) => state.isFavorite(id));
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const product = getProductById(id);
    if (!product) return;

    if (isFavorite) {
      removeFavorite(id);
      toast.success(`${name} removed from favorites`);
    } else {
      addFavorite(product);
      toast.success(`${name} added to favorites`);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 group relative">
      {/* Favorite Button */}
      <button
        onClick={handleFavoriteClick}
        className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart
          className={`h-5 w-5 transition-colors ${
            isFavorite ? "fill-red-500 text-red-500" : "text-gray-300 hover:text-red-500"
          }`}
        />
      </button>

      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden aspect-[4/5]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-foreground truncate">{name}</h3>
          <div className="flex items-center gap-2">
            {salePrice ? (
              <>
                <span className="text-lg font-bold text-foreground">DH {salePrice}</span>
                <span className="text-sm text-muted-foreground line-through">DH {price}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-foreground">DH {price}</span>
            )}
          </div>
          <Button variant="default" size="sm" className="w-full mt-2">
            Voir More
          </Button>
        </div>
      </Link>
    </div>
  );
};