---
# layout: portfolio
title: Alexa Personalization
description: A case study on how I established the Human Interface Guidelines of personalization for Alexa.
nda: true

preview:
    company:        'amazon'
    image:          '/portfolio/amazon-personalization/thumb.png'
    type:           'product'
    color: lightskyblue
    # color:  lightsalmon
    year:           '2019'
    title:          'Alexa Personalization'
    description:    'How I wrote the book on personalization for Alexa.'
    tags:           ['strategy', 'artificial intelligence', 'leadership', 'personalization']
---

<script setup>
    import { useData } from 'vitepress'
    import PortfolioPage from '@components/PortfolioPage';
    const { frontmatter } = useData()
</script>

<PortfolioPage :pcolor="frontmatter.preview.color" :nda="frontmatter.nda">
    <template v-slot:title>{{ frontmatter.title }}</template>
    <template v-slot:year>{{ frontmatter.preview.year }}</template>
    <template v-slot:company>Amazon</template>
    <template v-slot:hero>
      <img src="/portfolio/amazon-personalization/thumb.png">
    </template>
    <template v-slot:challenge>
      <p>Prior to the release of voice identification, Alexa had no idea whom it was talking with. Voice identification unlocked the opportunity for Alexa to provide truely personalized experiences. This was a new paradigm for Alexa and smart assistants in general; a personalized voice assistant.</p>
      <p>Through quantitative and qualitative research, we knew that:</p>
      <ul>
        <li>A majority (60+%) of users want Alexa to respond in a way that is specific to them as an individual</li>
        <li>At least half (50+%) of users perceive personalized experiences as valuable</li>
      </ul>
      <p>With personalization being possible, the problem was lack of knowledge across the Alexa org on what personalization is, how it works, how to make them, and what makes a personalized experience good.</p>
    </template>
    <template v-slot:outcome>
      <p>The Personalization HIG unlocked quality and consistency at scale. It provided cross-functional teams the resources they need to understand the underlying technical components, the product requirements, the experience guidelines, as well as best practices and reusable patterns.</p>
      <p>It was a huge success. The Personalization HIG was celebrated by teams and senior leaders across up and across the Alexa organization.</p>
    </template>
    <template v-slot:process>
      <p>Alexa has an internal Alexa HIG (Human Interface Guidelines) which establishes the quality bar for good Alexa experiences. Everyone making Alexa experiences, not just designers, are kept accountable to the content of the HIG. When it came to personalization, the solution was two-fold:</p>
      <ul>
        <li><strong>Publish:</strong> Extend the Alexa HIG to include personalization</li>
        <li><strong>Communicate:</strong> Broadly share the new personalization content</li>
      </ul>
    </template>
</PortfolioPage>