---
layout: 'page'
title: Awards
---

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

<h2 class="logo amazon">Amazon Awards</h2>
<AwardList :data="data.amazon"></AwardList>

<h2 class="logo disney">Disney Awards</h2>
<AwardList :data="data.disney"></AwardList>

<h2 class="logo phenomblue">Phenomblue Awards</h2>
<AwardList :data="data.phenomblue"></AwardList>

<style module>
    
</style>