export default {
  name: 'about',
  type: 'document',
  title: 'About',
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
      name: 'resume',
      title: 'Resume',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ],
      validation: (Rule: any) => Rule.required().error('The "Resume" is required')
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ],
      validation: (Rule: any) => Rule.required().error('The "Description" is required')
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ],
      validation: (Rule: any) => Rule.required().error('The "Skills" are required')
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ],
      validation: (Rule: any) => Rule.required().error('The "Education" is required')
    },
  ]
}