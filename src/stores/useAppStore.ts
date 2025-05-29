import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import {createRecipesSlice, type RecipeSlice} from "./recipeSlice.ts";
import {createFavoritesSlice, type FavoritesSliceType} from "./favoritesSlice.ts";
import {createNotificationSlice, type NotificationSliceType} from "./notificationSlice.ts";


type AppStore = RecipeSlice & FavoritesSliceType & NotificationSliceType;

export const useAppStore = create<AppStore>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
  ...createNotificationSlice(...a),
})))