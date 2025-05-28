import {z} from 'zod/v4'
import type {CategoriesApiResponseSchema} from "../utils/recipes-schema.ts";

export type Categories = z.infer<typeof CategoriesApiResponseSchema>