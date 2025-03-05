---
# layout: portfolio
title: Rocket Personalization
description: A case study on how I established the personalization strategy for Rocket Companies.
nda: true

preview:
    company:        'rocket'
    image:      '/portfolio/rocket-personalization/thumb.png'
    type:       'product'
    color:      'lightcoral'
    year:           '2023'
    title:          'Rocket Personalization'
    description:    'Establishing the personalization strategy for Rocket Companies.'
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
    <template v-slot:company>Rocket Mortgage</template>
    <template v-slot:hero>
      <img src="/portfolio/rocket-ironbear/thumb.png">
    </template>
    <template v-slot:challenge>
        <p>There was no personalization
        Very little of the RKT experience was personalized.
        Clients expected it but Rocket didn’t provide it.
        Multiple industry reports and competitive analysis showed fintech clients expected a personalized experience which also contributes to higher revenues and increased trust specifically for fintech, a large body of client feedback corroborated that.</p>
    </template>
    <template v-slot:outcome>
      <p>We increased Rocket Mortgage's client experience scores and mortgage lead success KPIs by launching a new full-browser, generative AI & human-agent chat experience at the end of the primary digital lead form. This product also overhauled the conversational AI architectural foundation establishing a more robust and centralized conversational AI API.</p>
    </template>
    <template v-slot:process>
      asdf
    </template>
</PortfolioPage>