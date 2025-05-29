import type {StateCreator} from 'zustand';
import type {Recipe} from "../types";
import {createNotificationSlice, type NotificationSliceType} from "./notificationSlice.ts";

export type FavoritesSliceType = {
  favorites: Recipe[]
  handleClickFavorite: (recipe: Recipe) => void
  favoriteExists: (id: Recipe['idDrink']) => boolean
  loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (get().favoriteExists(recipe.idDrink)) {
      set({favorites: get().favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)})
      createNotificationSlice(set, get, api).showNotification({text: 'Bebida eliminada de favoritos', error: false})
    } else {
      set({favorites: [...get().favorites, recipe]})
      createNotificationSlice(set, get, api).showNotification({text: 'Bebida agregada de favoritos', error: false})
    }
    localStorage.setItem('favorites', JSON.stringify(get().favorites))
  },
  favoriteExists: (id: Recipe['idDrink']) => {
    return get().favorites.some(favorite => favorite.idDrink === id)
  },
  loadFromStorage: () => {
    const favorites: Recipe[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (favorites) {
      set({favorites})
    }
  }
})