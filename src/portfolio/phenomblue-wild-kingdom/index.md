---
layout:         'case study'

preview:
    company:        'phenomblue'
    image:      '/portfolio/phenomblue-wild-kingdom/thumb.png'
    type:       'product'
    year:           '2013'
    title:          'My Wild Kingdom'
    description:    'A groundbreaking adventure app that brings the wild to any situation.'
    tags:         ['mobile design']
    color:  'wheat'

hero:
    title:      'My Wild Kingdom'
    year:       '2013'
    company:    'Phenomblue'
    image:      '/portfolio/phenomblue-wild-kingdom/thumb.png'
    color:  'wheat'
---

<script setup>
    import YouTubeVideo from '../../components/YouTubeVideo.vue'
    import NewsList from '../../components/NewsList.vue'
    import AwardList from '../../components/AwardList.vue'
    import _ from 'lodash'
    import { data as pressData } from '../../press/press.data'
    import { data as awardsData } from '../../awards/awards.data'

    const press = _.filter(pressData, ['project', 'PhenomblueWildKingdom'])
    const awards = _.filter(awardsData, ['project', 'PhenomblueWildKingdom'])
</script>

Mutual of Omaha's My Wild Kingdom is a groundbreaking adventure app that brings the wild to any situation. Whatever you can imagine, My Wild Kingdom makes it a reality. Hold a giraffe in your hand, put a giant elephant on the freeway or sneak an alligator into your family portrait. Like the animal kingdom itself, it can adapt to almost any environment.

<YouTubeVideo src="https://www.youtube.com/embed/HoZxKh5Q3CY"></YouTubeVideo>

## Awards
<AwardList :data="awards"></AwardList>

## News
<NewsList :data="press"></NewsList>