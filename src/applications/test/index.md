---
layout: application
title: Application One
role: Director of Something
company: The Best Company
video: https://www.youtube.com/embed/2aeYrgPDrdU
logos: true
socials: true
projects:
    - amazon-alexa-cortana
    - amazon-profile
    - disney-design-system
---

<script setup>
    import { useData } from 'vitepress'
    const { frontmatter } = useData()
</script>

## What I'll bring to {{frontmatter.company}}
- **Keyword:** Blah blah blah
- **Keyword:** Blah blah blah
- **Keyword:** Blah blah blah

## A few of my career highlights
- **Pioneered AI Experiences:** Drove development of innovative AI experiences for Alexa and Cortana and established conversational AI as it’s own practice and line of business for Rocket Companies.
- **Built Organizations:** Built high-performing organizations for Phenomblue, Ace Metrix, Disney, and Rocket from the ground up.
- **Defined Vision:** Established the long-term, holistic vision for products at Amazon, Disney, and Rocket.