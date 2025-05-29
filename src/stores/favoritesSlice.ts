import type {StateCreator} from 'zustand';
import type {Recipe} from "../types";

export type FavoritesSliceType = {
  favorites: Recipe[]
  handleClickFavorite: (recipe: Recipe) => void
  favoriteExists: (id: Recipe['idDrink']) => boolean
  loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if(get().favoriteExists(recipe.idDrink)) {
      set({favorites: get().favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)})
    } else {
      set({favorites: [...get().favorites, recipe]})
    }
    localStorage.setItem('favorites', JSON.stringify(get().favorites))
  },
  favoriteExists: (id: Recipe['idDrink']) => {
    return get().favorites.some(favorite => favorite.idDrink === id)
  },
  loadFromStorage: () => {
    const favorites: Recipe[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    if(favorites) {
      set({favorites})
    }
  }
})