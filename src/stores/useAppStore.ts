import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import {createRecipesSlice, type RecipeSlice} from "./recipeSlice.ts";
import {createFavoritesSlice, type FavoritesSliceType} from "./favoritesSlice.ts";

type AppStore = RecipeSlice & FavoritesSliceType;

export const useAppStore = create<AppStore>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a)
})))