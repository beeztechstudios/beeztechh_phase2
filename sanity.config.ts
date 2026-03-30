import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes';

export default defineConfig({
    name: 'default',
    title: 'BeezTech Studio Blog',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'g2g7wect',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    basePath: '/studio',

    plugins: [structureTool()],

    schema: schema,
});
