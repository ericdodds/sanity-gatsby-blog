export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601459ddd04606012094ae95',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-u9eispx8',
                  apiId: '553c0eaa-670a-4f43-a289-19b01301adb7'
                },
                {
                  buildHookId: '601459dd5fd01001001b4dd7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hyoa1t6k',
                  apiId: 'ebf44112-2f12-4819-80e6-ecac6d29602c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ericdodds/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hyoa1t6k.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
