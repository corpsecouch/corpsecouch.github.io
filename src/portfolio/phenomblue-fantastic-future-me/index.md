---
layout:         'case study'
company:        'phenomblue'

preview:
    image:      '/portfolio/phenomblue-fantastic-future-me/thumb.png'
    type:       'title'
    year:           '2012'
    title:          'Fantastic Future Me'
    description:    'Encouraging kids to reach their Future Me.'
    tags:         ['public installation']

hero:
    title:      'Fantastic Future Me'
    year:       '2012'
    company:    'Phenomblue'
    image:      '/portfolio/phenomblue-fantastic-future-me/thumb.png'
---

<script setup>
    import YouTubeVideo from '../../components/YouTubeVideo.vue'
    import NewsList from '../../components/NewsList.vue'
    import _ from 'lodash'
    import { data as pressData } from '../../press/press.data'

    const press = _.filter(pressData, ['project', 'PhenomblueDinoDig'])
</script>

Fantastic Future Me is a kiosk-style interactive museum exhibit. It encourages kids to match their interests and aspirations to create a one-of-a-kind Future Me. Fantastic Future Me is permanent exhibit at the Omaha Children's Museum which is the second highest attended arts and cultural institution in Nebraska. Kids enjoy this exhibit once every 81 seconds!

<YouTubeVideo src="https://www.youtube.com/embed/SuEXRBP5ihY"></YouTubeVideo>

## News
<NewsList :data="press"></NewsList>