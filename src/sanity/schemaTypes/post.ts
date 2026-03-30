import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Published Date',
      type: 'string',
      description: 'Format: Dec 29, 2025',
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time',
      type: 'string',
      description: 'Example: 12 min read',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'meta',
      title: 'Meta Info (SEO)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Meta Title', type: 'string' },
        { name: 'description', title: 'Meta Description', type: 'text', rows: 3 },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Body Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Blockquote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
        // Old types for backward compatibility and to fix "item not valid" errors
        {
          type: 'object',
          name: 'paragraph',
          title: 'Paragraph (Old)',
          fields: [{ name: 'text', type: 'text', title: 'Text' }],
        },
        {
          type: 'object',
          name: 'heading',
          title: 'Heading (Old)',
          fields: [{ name: 'text', type: 'string', title: 'Text' }],
        },
        {
          type: 'object',
          name: 'list',
          title: 'List (Old)',
          fields: [{ name: 'items', type: 'array', of: [{ type: 'string' }], title: 'Items' }],
        },
        {
          type: 'object',
          name: 'quote',
          title: 'Quote (Old)',
          fields: [{ name: 'text', type: 'text', title: 'Text' }],
        },
        {
          type: 'object',
          name: 'tip',
          title: 'Tip (Old)',
          fields: [{ name: 'text', type: 'text', title: 'Text' }],
        },
        {
          type: 'object',
          name: 'code',
          title: 'Code Block (Old)',
          fields: [
            { name: 'code', type: 'text', title: 'Code' },
            { name: 'language', type: 'string', title: 'Language' },
          ],
        },
      ],
    }),
  ],
});
