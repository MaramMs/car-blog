import { defineType } from "sanity";

export const clients = defineType({
  name: "clients",
  title: "Clients",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    },
    {
      name: "publishedAt",
      title: "Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: "message",
      title: "Message Text",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().min(10),
    },
    {
      name: "mainImage", 
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "mainImage",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title,
        media,
      };
    },
  },
});
