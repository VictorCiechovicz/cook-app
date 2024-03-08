import * as recipes from './recipesServices'
import * as ingredientes from './ingredientsServices'
import * as preparations from './preparationsServices'

export const services = {
  recipes,
  ingredientes,
  preparations,

  storage: {
    imagePath:
      'https://qokvqqwtyzcfjlvnxrle.supabase.co/storage/v1/object/public/ingredients'
  }
}
