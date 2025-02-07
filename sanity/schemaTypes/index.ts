// sanity/schemaTypes.ts
import 'server-only'; // Add this at the top

import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { startup } from './startup'
import { playlist } from './playlist'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author,startup, playlist],
}
