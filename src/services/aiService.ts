import {streamText} from 'ai'
import {openRouter} from "../lib/ai.ts";

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openRouter('qwen/qwen3-30b-a3b:free'),
      prompt,
      system: 'Eres un bartender profesional con muchos años de experiencia.',
      temperature: 1
    })

    return result.textStream

  }
}