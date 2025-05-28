import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import {createRecipesSlice, type RecipeSlice} from "./recipeSlice.ts";

export type AppStore = RecipeSlice;


export const useAppStore = create<AppStore>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
})))