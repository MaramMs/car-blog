import { defineType } from "sanity";
import { blockContent } from './blockContentType' 


export const services = defineType({
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
     {
      name: "question",
      title: "Service Question",
      type: "string",
    },
      {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    
       {
      name: "publishedAt",
      title: "Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "body",
      title: "Content",
      type: "blockContent",
    },
    {
      name: "prices",
      title: "Prices",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Price Name" },
            { name: "value", type: "number", title: "Price Value" },
          ],
        },
      ],
    },
  ],
});
