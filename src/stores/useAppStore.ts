import {create} from 'zustand'
import {createRecipesSlice, type RecipeSlice} from "./recipeSlice.ts";

export type AppStore = RecipeSlice ;


export const useAppStore = create<AppStore>()((...a) => ({
  ...createRecipesSlice(...a),
}))