import { createContentLoader } from 'vitepress';
import { companies } from '../globals/companies.data'
import _ from 'lodash'

export default {
  load() {
    let data = createContentLoader('portfolio/projects/**/*.md').load();
  
    return data
      .then(projects => {
        // fix the urls due to the route rewrites
        _.map(projects, (project) => {
          // Regex to remove '/projects/{dynamic_part}/project'
          project.url = `${project.url}`.replace(/\/projects\/[^\/]+/, '');

          // Regex to make a project :company-:name
          // project.url= `${project.url}`.replace(/\/projects\/([^/]+)\/([^/]+)\//, '/$1-$2/');
        })

        return projects
      })
      .then(projects => {
        // add in the company name

        _.map(projects, project => {
          project.frontmatter.company = companies[project.frontmatter.keys.company].name.short
        })

        return projects
      })
      .then(projects => {
        // group by company
        return _.groupBy(projects, o => { return o.frontmatter.keys.company });
      })
      .then(companies => {
        // group by type and sort

        return _.mapValues(companies, projects => {
          let company = _.groupBy(projects, o => { return 'type' in o.frontmatter ? o.frontmatter.type : 'caseStudy' })
          
          company = _.mapValues(company, types => {
            return _.orderBy(
              types,
              ['frontmatter.featured', 'frontmatter.year'],
              ['asc', 'desc'])
          })

          return company
        })
      })
  }
}
