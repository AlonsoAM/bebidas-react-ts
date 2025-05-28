import {z} from 'zod/v4'

export const CategoriesApiResponseSchema = z.object({
  drinks: z.array(z.object({
    strCategory: z.string(),
  }))
})