<script setup>
    import { data } from './portfolio.data'
    import _ from 'lodash'
    
    // import AwardList from '../components/AwardList.vue'

    const filteredData = _.filter(data, o => { return o.frontmatter.preview; })


    // const images = []
    // data.forEach((e) => {
    //     if(e.frontmatter.preview) {
    //         images.push(e.frontmatter.preview.image)
    //     }
    // })
    // console.log(images)

    const gotoProject = function(url) {
        window.location.href = url
    }
</script>

# Portfolio

### Rocket Companies
As the first Director of Conversational AI Design for Rocket Companies, I not only established the practice for the company I also cemented conversational AI as a company priority - a core part of it's business model and long term vision – ushering in it's investments into LLMs and generative AI.

<ul class="projects">
    <li class="project" v-for="p in filteredData" @click="gotoProject(p.url)" :style="{'background-color': p.frontmatter.preview.color}">
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