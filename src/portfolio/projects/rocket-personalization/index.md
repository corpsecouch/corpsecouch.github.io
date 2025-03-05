---
# layout: portfolio
title: Rocket Personalization Strategy
description: A case study on how I established the personalization strategy for Rocket Companies.
nda: true

preview:
    company:        'rocket'
    image:      '/portfolio/rocket-personalization/thumb.png'
    type:       'product'
    color:      'lightcoral'
    year:           '2023'
    title:          'Rocket Personalization Strategy'
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
      <img src="/portfolio/rocket-personalization/thumb.png">
    </template>
    <template v-slot:challenge>
      <p>Large financial decisions are a very personal thing. Through research, we knew that clients desired a personal experience, expected that their experience was personals, and assumed that it was. However, we also knew that Rocket was known as "The Big Red Machine" where everyone is treated like a number. We also knew that personalized experiences contribute to higher revenues and increased trust especcially for fintech.</p>
      <p>Our goal was to enable personalization at scale so that we could:</p>
      <ul>
        <li>Provide better service and experiences.</li>
        <li>Meet client expectations.</li>
        <li>Increase profit in a down mortgage market and in the long term.</li>
      </ul>
    </template>
    <template v-slot:outcome>
      <p>We established the company-wide strategy for personalization in 2023.</p>
      <p>This strategy impacts every aspect of the business that has a client-facing experience including:</p>
      <ul>
        <li>Product</li>
        <li>Marketing</li>
        <li>Artificial Intelligence</li>
        <li>Banking</li>
        <li>Design</li>
        <li>Engineering</li>
      </ul>
      <p>This was such a success and such an important part of Rocket's future that it became a top company priority in 2024. A new organization was formed around this priority to give it the resources it needs to become a durable and high-impact reality.</p>
    </template>
    <template v-slot:process>
      <p>This was a large, cross-functional effort that myself and a PM spearheaded. We dove through the organization to understand what personalization is happening, at what capacity, the results it drives, and what technology is enabling it. Once we identified the solution, I crafted the high-level strategy, paired it with a durable roadmap, and through effective storytelling built concensus around it at the senior leader levels.</p>
    </template>
</PortfolioPage>