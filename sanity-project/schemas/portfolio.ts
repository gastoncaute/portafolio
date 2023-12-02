export default {
  name: 'portfolio',
  type: 'document',
  title: 'Portfolio',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'Spanish', value: 'Spanish'},
          {title: 'English', value: 'English'},
        ],
      },
      validation: (Rule: any) => Rule.required().error('The "Language" is required')
    },
    {
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (Rule: any) => Rule.required().error('The "Title" is required'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (Rule: any) => Rule.required().error('The "Description" is required'),
    },
    {
      name: 'main_image',
      title: 'Main Image',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          validation: (Rule: any) => Rule.required().error('The "Image" is required'),
        },
        {
          name: 'epigraph',
          type: 'array',
          title: 'Epigraph',
          of: [{type: 'block'}],
          validation: (Rule: any) => Rule.required().error('The "Epigraph" is required'),
        },
      ],
      validation: (Rule: any) => Rule.required().error('The "Main Image" is required'),
    },
    {
      name: 'page_link',
      title: 'Page Link',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('The "Page Link" is required'),
    },
    {
      name: 'second_description',
      title: 'Second Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'image_list',
      title: 'Image List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              validation: (Rule: any) => Rule.required().error('The "Image List" is required'),
            },
            {
              name: 'epigraph',
              type: 'array',
              title: 'Epigraph',
              of: [{type: 'block'}],
              validation: (Rule: any) => Rule.required().error('The "Epigraph" is required'),
            },
          ],
        },
      ],
    },
  ],
}
