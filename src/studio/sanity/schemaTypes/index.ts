import { type SchemaTypeDefinition } from 'sanity'

import {blockContent} from './blockContentType'
import {postType} from './postType'
import {authorType} from './authorType'
import { category } from './categoryType'
import { carModel } from './carModal'
import { carYear } from './carYear'
import { clients } from './clients'
import { services } from './services'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, category, carModel,clients,services,carYear,postType, authorType],
}
