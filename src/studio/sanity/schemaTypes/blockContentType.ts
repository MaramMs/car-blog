import { defineType, defineField } from 'sanity'

export const blockContent = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'عادي', value: 'normal' },
        { title: 'عنوان كبير', value: 'h1' },
        { title: 'عنوان وسط', value: 'h2' },
        { title: 'عنوان صغير', value: 'h3' },
      ],
      lists: [
        { title: 'قائمة نقطية', value: 'bullet' },
        { title: 'قائمة مرقمة', value: 'number' }
      ],
      marks: {
        decorators: [
          { title: 'عريض', value: 'strong' },
          { title: 'مائل', value: 'em' },
          { title: 'تسطير', value: 'underline' },
          { title: 'خط فوق النص', value: 'overline' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'رابط',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'رابط'
              }
            ]
          }
        ]
      }
    },
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
    })
  ]
})
