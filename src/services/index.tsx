import * as recipes from './recipesServices'
import * as ingredients from './ingredientsServices'
import * as preparations from './preparationsServices'

export const services = {
  recipes,
  ingredients,
  preparations,

  storage: {
    imagePath:
      'https://qokvqqwtyzcfjlvnxrle.supabase.co/storage/v1/object/public/ingredients'
  }
}
