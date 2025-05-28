import axios from "axios";
import {CategoriesApiResponseSchema, RecipeAPIResponseSchema, RecipeSchema} from "../utils/recipes-schema.ts";
import type {Recipes, SearchFilter} from "../types";

export const getCategories = async () => {

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
  const {data} = await axios.get(url)
  const result = CategoriesApiResponseSchema.safeParse(data)
  if (result.success) {
    return result.data
  }

}

export const getRecipes = async (filters: SearchFilter) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
  const {data} = await axios.get(url)
  const result = RecipeSchema.safeParse(data)
  if (result.success) {
    return result.data
  }
}

export const getRecipeById = async (id: Recipes['drinks'][0]['idDrink']) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  const {data} = await axios.get(url)
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
  if (result.success) {
    return result.data
  }
}