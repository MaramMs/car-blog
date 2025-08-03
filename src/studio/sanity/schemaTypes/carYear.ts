import { defineType } from 'sanity'

export const carYear = defineType({
  name: 'carYear',
  title: 'Car Year',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
})
