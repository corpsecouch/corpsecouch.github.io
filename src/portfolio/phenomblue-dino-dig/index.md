---
layout:         'case study'
company:        'phenomblue'

preview:
    image:      '/portfolio/phenomblue-dino-dig/thumb.png'
    type:       'title'
    year:           '2012'
    title:          'Operation: Dino Dig'
    description:    'Social computing for learning and exploration.'
    tags:         ['microsoft surface']

hero:
    title:      'Operation: Dino Dig'
    year:       '2012'
    company:    'Phenomblue'
    image:      '/portfolio/phenomblue-dino-dig/thumb.png'
---

<script setup>
    import YouTubeVideo from '../../components/YouTubeVideo.vue'
    import NewsList from '../../components/NewsList.vue'
    import _ from 'lodash'
    import { data as pressData } from '../../press/press.data'

    const press = _.filter(pressData, ['project', 'PhenomlbueDinoDig'])
</script>

Operation: Dino Dig is a social learning and exploration experience. Utilizing Microsoft Surface 2.0, people use real-world tools to interact with the digital experience and with each other.

<YouTubeVideo src="https://www.youtube.com/embed/UGvu78DYris"></YouTubeVideo>

## News
<NewsList :data="press"></NewsList>