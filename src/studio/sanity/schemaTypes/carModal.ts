import { defineType } from 'sanity'

export const carModel = defineType({
  name: 'carModel',
  title: 'Car Model',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Model Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
  ],
})
