export const postType = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      type: "reference",
      title: "Author",
      to: [{ type: "author" }],
    },
    {
      name: "mainImage",
      type: "image",
      title: "Main Image",
      options: { hotspot: true },
      // احذف الـ fields هنا إذا النسخة قديمة ولا تدعمها
      // لو حبيت تضيف alt ممكن تعمله حقل string منفصل خارج هذا الحقل
    },
    {
      name: "price",
      type: "number",
      title: "سعر السيارة",
    },
    {
      name: "installment",
      type: "number",
      title: "سعر القسط",
    },
    {
      name: "buttonText",
      type: "string",
      title: "Button Text",
    },
    {
      name: "category",
      type: "reference",
      title: "Category",
      to: [{ type: "category" }],
    },
    {
      name: "carModel",
      type: "reference",
      title: "موديل السيارة",
      to: [{ type: "carModel" }],
    },
    {
      name: "carYear",
      type: "reference",
      title: "سنة الصنع",
      to: [{ type: "carYear" }],
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "body",
      type: "blockContent",
      title: "Body",
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return {
        ...selection,
        subtitle: author ? `by ${author}` : undefined,
      };
    },
  },
};
