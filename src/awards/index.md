---
layout: page
title: Awards
description: The comprehensive list of awards I've won for my work.
---

<script setup>
    import AwardsPage from './Awards.vue'
    import { data as awards } from './awards.data'
    import { data as companies } from '../globals/companies.data'
    import _ from 'lodash'

    const data = {}
    _.each(companies, (value) => {
        data[value.slug] = _.filter(awards, o => { return o.company.slug == value.slug })
    });
    data.total = awards.length;
</script>

Me or my work has been recognized with **{{ data.total }} awards**.

<AwardsPage :data="data"></AwardsPage>
