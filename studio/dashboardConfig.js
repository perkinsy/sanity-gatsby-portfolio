export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6254dfd54cef7461730c02cb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gprmswnt',
                  apiId: '8dc333a0-e65a-4ee5-a2eb-5e408b99467d'
                },
                {
                  buildHookId: '6254dfd508e2c360636fed96',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-okjs663v',
                  apiId: 'c85611de-d101-4612-be6e-ada0d17aa394'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/perkinsy/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-okjs663v.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
