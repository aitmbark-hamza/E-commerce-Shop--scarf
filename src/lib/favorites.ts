import { create } from 'zustand';
import { Product } from './products';

interface FavoritesStore {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  
  addFavorite: (product: Product) => {
    set((state) => {
      const updated = [...state.favorites, product];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return { favorites: updated };
    });
  },
  
  removeFavorite: (productId: number) => {
    set((state) => {
      const updated = state.favorites.filter((p) => p.id !== productId);
      localStorage.setItem('favorites', JSON.stringify(updated));
      return { favorites: updated };
    });
  },
  
  isFavorite: (productId: number) => {
    return get().favorites.some((p) => p.id === productId);
  },
  
  clearFavorites: () => {
    localStorage.setItem('favorites', JSON.stringify([]));
    set({ favorites: [] });
  },
}));
