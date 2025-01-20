<script setup>
    import { data as awards } from './awards.data'
    import { data as companies } from '../globals/companies.data'
    import AwardList from '../components/AwardList.vue'
    import _ from 'lodash'

    const data = {}
    _.each(companies, (value, key) => {
        data[value.slug] = _.filter(awards, o => { return o.company.slug == value.slug })
    });
    data.total = awards.length;
</script>

# Awards

Me or my work has been recognized with **{{ data.total }} awards**.

<section id="rocket" v-if="data.rocket.length">
    <h3>Rocket Awards</h3>
    <AwardList :data="data.rocket"></AwardList>
</section>

<section id="amazon" v-if="data.amazon.length">
    <h3>Amazon Awards</h3>
    <AwardList :data="data.amazon"></AwardList>
</section>

<section id="disney" v-if="data.disney.length">
    <h3>Disney Awards</h3>
    <AwardList :data="data.disney"></AwardList>
</section>

<section id="phenomblue" v-if="data.phenomblue.length">
    <h3>Phenomblue Awards</h3>
    <AwardList :data="data.phenomblue"></AwardList>
</section>