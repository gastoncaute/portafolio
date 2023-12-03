export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
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
      name: 'social_network',
      title: 'Social Network',
      type: 'string',
    },
    {
      name: 'social_link',
      title: 'Social Link',
      type: 'string'
    },
    {
      name: 'social_image',
      title: 'Social Image',
      type: 'image',
      validation: (Rule: any) => Rule.required().error('The "Social Image" is required'),
    },
  ]
}