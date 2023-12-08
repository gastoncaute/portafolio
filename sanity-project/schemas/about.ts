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
    {
      name: 'resume',
      title: 'Resume',
      type: 'object',
      fields: [
        {
          name: 'resume_image',
          title: 'Resume Image',
          type: 'image',
          validation: (Rule: any) => Rule.required().error('The "Resume Image" is required'),
        },
        {
          name: 'resume_link',
          title: 'Resume Link',
          type: 'string',
          validation: (Rule: any) => Rule.required().error('The "Resume Link" is required'),
        },
      ],
      validation: (Rule: any) => Rule.required().error('The "Resume" is required'),
    },
  ]
}