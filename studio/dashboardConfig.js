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
                  buildHookId: '5e4baf0f59c6b43ed55d04e2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gyssretw',
                  apiId: 'a9eea10d-76ba-4ed1-9218-2f00a616bbde'
                },
                {
                  buildHookId: '5e4baf0fa94305dd28772151',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vhx1sorq',
                  apiId: 'a20f1db4-66c2-454b-9d40-048e8503d8f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joostbaptist/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vhx1sorq.netlify.com',
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
