
'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// Import using ES module syntax
import * as icons from 'lucide-react'
import {visionTool} from '@sanity/vision'

import {structureTool} from 'sanity/structure'
 // Use ESM import
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'
import {markdownSchema} from 'sanity-plugin-markdown'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    deskTool({
      // Use dynamic import if needed
      icon: icons.LayoutDashboard
    }),
    markdownSchema(),

  ],
})
