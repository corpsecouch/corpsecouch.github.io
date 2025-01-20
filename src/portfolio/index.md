---
layout: 'page'
title: 'Portfolio'
---

<script setup>
    import { data as projects } from './portfolio.data'
    import { data as companies } from '../globals/companies.data'
    import { data as awardsData } from '../awards/awards.data'
    import { data as pressData } from '../press/press.data'
    import Callouts from '../components/Callouts.vue'
    import _ from 'lodash'

    const filteredProjects = _.orderBy(
        _.filter(projects, o => { return o.frontmatter.preview; }),
        ['frontmatter.preview.year'],
        ['desc']
    )

    const data = {}
    _.each(companies, (value, key) => {
        data[value.slug] = {

          projects: _.filter(filteredProjects, o => { return o.frontmatter.preview.company == value.slug; }),

          awards: _.orderBy(
            _.filter(awardsData, o => { return o.company.slug == value.slug }),
            o => { return o.date.year; },
            ['desc']),

          news: {
            total: _.filter(pressData, o => { return o.company.slug == value.slug }).length,
            data: _.take(_.filter(pressData, o => { return o.company.slug == value.slug }), 3)
          }
        }
    });

    const gotoProject = function(url) {
        window.location.href = url
    }
</script>

# Portfolio

<h2 class="logo rocket">Rocket Companies</h2>
As the first Director of Conversational AI Design for Rocket Companies, I not only established the practice for the company I also cemented conversational AI as a company priority - a core part of it's business model and long term vision – ushering in it's investments into LLMs and generative AI.

<Callouts
    :pressTotal="data.rocket.news.total"
    pressURL="/press/#rocket"
    :awardsTotal="data.rocket.awards.length"
    awardsURL="/awards/#rocket" />

<ul class="projects">
    <li class="project" v-for="p in data.rocket.projects" @click="gotoProject(p.url)" :style="{'background-color': p.frontmatter.preview.color}">
        <div :class="p.frontmatter.preview.type + '-image'">
            <img :src="p.frontmatter.preview.image" class="rounded">
        </div>
        <span class="title">{{ p.frontmatter.preview.title }}</span>
            <span class="description">{{ p.frontmatter.preview.year }} &mdash; {{ p.frontmatter.preview.description }}</span>
            <ul class="tags" v-if="p.frontmatter.preview.tags">
                <li class="tag" v-for="tag in p.frontmatter.preview.tags">{{ tag }}</li>
            </ul>
        <a :href="p.url" :title="p.frontmatter.preview.title" class="link">Read the case study</a>
    </li>
</ul>

<h2 class="logo amazon">Amazon</h2>
At Amazon, I was focused on all things Alexa identity, especially biometrics. I led the design of voice, modal, and device experiences for Alexa; starting with voice recognition then expanding to face recognition, authentication, authorization, profiles, and establishing the persoanlization guidelines. These are features used or available across every Echo device and has influenced every personalized experience.

<Callouts
    :pressTotal="data.amazon.news.total"
    pressURL="/press/#rocket"
    :awardsTotal="data.amazon.awards.length"
    awardsURL="/awards/#rocket" />

<ul class="projects">
    <li class="project" v-for="p in data.amazon.projects" @click="gotoProject(p.url)" :style="{'background-color': p.frontmatter.preview.color}">
        <div :class="p.frontmatter.preview.type + '-image'">
            <img :src="p.frontmatter.preview.image" class="rounded">
        </div>
        <span class="title">{{ p.frontmatter.preview.title }}</span>
            <span class="description">{{ p.frontmatter.preview.year }} &mdash; {{ p.frontmatter.preview.description }}</span>
            <ul class="tags" v-if="p.frontmatter.preview.tags">
                <li class="tag" v-for="tag in p.frontmatter.preview.tags">{{ tag }}</li>
            </ul>
        <a :href="p.url" :title="p.frontmatter.preview.title" class="link">Read the case study</a>
    </li>
</ul>

<h2 class="logo disney">Walt Disney Studios</h2>
At Disney, I was leading the UX design of the Studio's digital transformation of it's enterprise tools and processes. I also went deep into emerging technologies and R&D, especially design-driven innovation.

<Callouts
    :pressTotal="data.disney.news.total"
    pressURL="/press/#rocket"
    :awardsTotal="data.disney.awards.length"
    awardsURL="/awards/#rocket" />

<ul class="projects">
    <li class="project" v-for="p in data.disney.projects" @click="gotoProject(p.url)" :style="{'background-color': p.frontmatter.preview.color}">
        <div :class="p.frontmatter.preview.type + '-image'">
            <img :src="p.frontmatter.preview.image" class="rounded">
        </div>
        <span class="title">{{ p.frontmatter.preview.title }}</span>
            <span class="description">{{ p.frontmatter.preview.year }} &mdash; {{ p.frontmatter.preview.description }}</span>
            <ul class="tags" v-if="p.frontmatter.preview.tags">
                <li class="tag" v-for="tag in p.frontmatter.preview.tags">{{ tag }}</li>
            </ul>
        <a :href="p.url" :title="p.frontmatter.preview.title" class="link">Read the case study</a>
    </li>
</ul>

<h2 class="logo phenomblue">Phenomblue</h2>
Phenomblue was a digital brand experience agency. What does that even mean? It means I created digital experiences for brands including Microsoft, Gatorade, McDonalds, TUMS, and more.

<Callouts
    :pressTotal="data.phenomblue.news.total"
    pressURL="/press/#rocket"
    :awardsTotal="data.phenomblue.awards.length"
    awardsURL="/awards/#rocket" />

<ul class="projects">
    <li class="project" v-for="p in data.phenomblue.projects" @click="gotoProject(p.url)" :style="{'background-color': p.frontmatter.preview.color}">
        <div :class="p.frontmatter.preview.type + '-image'">
            <img :src="p.frontmatter.preview.image" class="rounded">
        </div>
        <span class="title">{{ p.frontmatter.preview.title }}</span>
            <span class="description">{{ p.frontmatter.preview.year }} &mdash; {{ p.frontmatter.preview.description }}</span>
            <ul class="tags" v-if="p.frontmatter.preview.tags">
                <li class="tag" v-for="tag in p.frontmatter.preview.tags">{{ tag }}</li>
            </ul>
        <a :href="p.url" :title="p.frontmatter.preview.title" class="link">Check out this project</a>
    </li>
</ul>