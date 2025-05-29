import api from '../lib/axios'
import {CategoriesApiResponseSchema, RecipeAPIResponseSchema, RecipeSchema} from "../utils/recipes-schema.ts";
import type {Recipes, SearchFilter} from "../types";

export const getCategories = async () => {

  const url = '/list.php?c=list'
  const {data} = await api(url)
  const result = CategoriesApiResponseSchema.safeParse(data)
  if (result.success) {
    return result.data
  }

}

export const getRecipes = async (filters: SearchFilter) => {
  const url = `/filter.php?c=${filters.category}&i=${filters.ingredient}`
  const {data} = await api(url)
  const result = RecipeSchema.safeParse(data)
  if (result.success) {
    return result.data
  }
}

export const getRecipeById = async (id: Recipes['drinks'][0]['idDrink']) => {
  const url = `/lookup.php?i=${id}`
  const {data} = await api(url)
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
  if (result.success) {
    return result.data
  }
}