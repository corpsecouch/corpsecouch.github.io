<template>
  <div class="widthConstrained">

    <section :class="$style.top">
      <div :class="$style.title">
        <div :class="$style.me"><img src="/assets/photos/photo1-circle.jpg"></div>
        <div :class="$style.words">
          <h1><slot name="role">Role Title</slot></h1>
          <h2><slot name="company">Company Name</slot></h2>    
        </div>
      </div>

      <div :class="$style.video" v-if="!!$props.video">
        <Video :src="$props.video"></Video>
      </div>
    </section>
    
    <section :class="$style.sales">
      <div :class="$style.logos" v-if="!!$props.logos">
        <h2>Previously at...</h2>
        <ul>
          <li><img src="/assets/logos/disney.png"></li>
          <li><img src="/assets/logos/amazon.png"></li>
          <li><img src="/assets/logos/rocket.png"></li>
        </ul>
      </div>

      <!-- <section :class="$style.content"> -->
      <section class="md">
        <Content />
      </section>

      <div :class="$style.portfolio" v-if="!!$props.projects">
        <h2>A few projects from my portfolio</h2>
        <ul>
          <li v-for="p in newfunc($props.projects)" @click="gotoProject(p.url)">
            <div :class="p.frontmatter.type + '-image'">
              <img :src="p.frontmatter.hero.image">
            </div>
            <span class="title">{{ p.frontmatter.preview.title }}</span>
          </li>
        </ul>
        <p>Check out the rest of <a href="/portfolio/">my portfolio</a>.</p>
      </div>

      <div :class="$style.socials" v-if="!!$props.socials">
        <h2>Where you can find me</h2>
        <ul>
          <li><a href="https://linkedin.com/in/jasonbejot" title="LinkedIn" target="_blank">LinkedIn</a></li>
          <li><a href="https://adplist.org/mentors/jason-bejot" title="ADPList" target="_blank">ADPList</a></li>
          <li><a href="https://medium.com/@jasonbejot" title="Medium" target="_blank">Medium</a></li>
          <li><a href="https://substack.com/@jasonbejot" title="Substack" target="_blank">Substack</a></li>
          <li><a href="https://github.com/corpsecouch" title="Github" target="_blank">Github</a></li>
        </ul>
      </div>

      <!-- <div :class="$style.cta">
        <p>Let's make something great together.</p>
      </div> -->
    </section>

  </div>
</template>

<script>
  import { data as projectData } from '@portfolio/portfolio.data';
  import _ from 'lodash'

  export default {
    name: 'Application',
    props:[
      'video',
      'projects',
      'logos',
      'socials'
    ],
    methods: {
      
      gotoProject(url) {
        window.location.href = url
      },

      newfunc(filter) {
        // TODO: do something if there is no filter, or it's empty

        // flatten the portfolio data first
        let projects = []
        _.each(projectData, company => {
          projects.push(_.flatten(_.values(company)))
        })
        projects = _.flatten(projects);

        // filter the portfolio data for the projects
        let rval = _.filter(projects, (project) => {
          let end = project.url.match(/^\/.*\/(.*)\/$/i)[1]
          return end ? _.includes(filter, end) : false
        })
        
        return rval;
      }
    }

  }
</script>

<style module lang="scss">

  /* .cta {
    text-align: center;
    p {
      border: dashed grey 1px;
      padding: 1rem 1.8rem;
      display: inline;
      border-radius: 12px;
    }
  } */

  .top, .sales {
    > * { padding: 5rem 0; }
  }

  .top {
    > *:last-child { padding-bottom: 0; }
  }

  .sales {
    /* > * { padding: 5rem 0; } */

    /* > *:nth-child(odd) {
      padding-top: 3rem;
      padding-bottom: 3rem;
    } */

    > *:nth-child(even) {
      background-color: whitesmoke;
      padding: 3rem;

      /* max-width: small screen */
      @media all and (max-width: 680px) {
        padding: 1rem;
      }
    }
  }

  .socials, .logos, .portfolio {
    h2 {
      margin: 0;
      font-size: 1.1rem;
      text-align: center;
    }
  }

  .portfolio {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    ul {
      list-style: none;
      margin: 3rem 0 ;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 1rem;
      li {
        cursor: pointer;
        border-radius: 12px;
        padding: 1rem 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: space-between;
        span {
          color: var(--color-link);
          &:hover {
            text-decoration: underline;
          }
        }
        &:hover {
          /* background-color: whitesmoke; */
          background-color: rgba(0, 0, 0, 0.04);
          transition: all 0.4s;
        }
        img {
          width: 100%;
          padding: 1rem;
        }
      }
    }

    /* max-width: small screen */
    @media all and (max-width: 680px) {
      ul {
        display: flex;
        flex-flow: column nowrap;
      }
    }
  }

  .socials {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;

    ul {
      margin: 0;
      list-style: none;
      li + li {
        margin-top: 0.8rem;
      }
    }
  }

  .logos {
    ul {
      list-style: none;
      margin: 2rem 0 0 0;
      padding: 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      column-gap: 2rem;
      li {
        margin: 0;
        padding: 0;
        img {
          width: 7rem;
        }
      }
    }

    /* max-width: small screen */
    @media all and (max-width: 680px) {
      img { width: 100% !important; }
    }
  }

  .title {
    display: grid;
    grid-template-columns: 0.1fr 1fr 1.5fr 0.1fr;
    column-gap: 3rem;
    align-content: center;
    justify-content: center;
    max-width: 100%;

    img {
      width: 100%;
      border: dashed grey 1px;
      border-radius: 100%;
      padding: 0.3rem;
    }

    .me {
      grid-column-start: 2;
    }

    .words {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      row-gap: 2rem;
      max-width: 100%;

      h1 { font-size: 2rem; }
      h2 { font-size: 1.6rem; }
      h1, h2 {
        text-align: left;
        margin: 0;
        word-wrap: break-word;
      }
    }

    /* max-width: small screen */
    @media all and (max-width: 680px) {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      row-gap: 2rem;
      .me { width: 50%; }
      .words {
        h1, h2 { text-align: center; }
      }
    }
  }
  
</style>
