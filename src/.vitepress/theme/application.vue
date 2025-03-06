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

      <section :class="$style.content">
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

        let rval = _.filter(projectData, (project) => {
          let end = project.url.match(/^\/.*\/(.*)\/$/i)[1]
          return end ? _.includes(filter, end) : false
        })

        // remove 'projects' from the url
        rval = _.forEach(rval, (val) => {
          val.url = _.join(_.slice(val.url.match(/^(.*)\/projects\/(.*)$/i), 1), '/')
        });
        
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
    /* max-width: 100%; */
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
    /* margin-bottom: 4rem; */
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

  section.content {
    h2 {
      text-align: left;
      margin: 3rem 0 0 0;
      line-height: 1.5em;
      font-weight: 500;
      font-size: 1.3rem;
      &:first-child { margin-top: 0; }
    }

    img { width: 100%; }

    p { margin: 1.3rem 0; }

    em { font-style: italic; }

    strong { font-weight: bold; }

    ol { margin-left: 1.8rem; }

    li {
      margin: 1.3rem 0;
      &:last-child { margin-bottom: 0; }
    }

    hr {
      border-top: solid 1px #c9d0d9;
      width: 70%;
      margin: 2rem auto;
    }

    blockquote {
      font-style: italic;
      font-weight: 300;
      margin: 2rem 0;
      padding: 0.5rem 2rem;
      border-left: solid 2px var(--color-background-dark);

      p { margin: 0; }
    }

    figure {
      margin: 3rem 0;

      img {
        width: inherit;
        max-width: 100%;
        display: block;
        margin: 0 auto;
      }

      figcaption {
        text-align: center;
        margin-top: 1rem;
        font-size: 0.8rem;
      }
    }
  }
  
</style>
