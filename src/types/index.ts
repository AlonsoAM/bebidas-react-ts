import {z} from 'zod/v4'
import {
  type CategoriesApiResponseSchema,
  SearchFilterSchema,
  RecipeSchema,
  RecipeAPIResponseSchema
} from "../utils/recipes-schema.ts";

export type Categories = z.infer<typeof CategoriesApiResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Recipes = z.infer<typeof RecipeSchema>
export type Recipe = z.infer<typeof  RecipeAPIResponseSchema>