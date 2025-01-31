---
layout: page
title: Press Coverage
description: A collection of the press coverage about me and my work.
---

<script setup>
    // import { data as press } from './press.data'
    // import { data as companies } from '@globals/companies.data'
    // import NewsList from '@components/NewsList.vue'
    // import _ from 'lodash'

    import PressPage from './Press.vue'

    // const data = {}
    // _.each(companies, (value, key) => {
    //     data[value.slug] = _.filter(press, o => { return o.company.slug == value.slug })
    // });
    // data.total = press.length;
</script>

<PressPage></PressPage>

<!-- # Press

My work has been featured or mentioned in at least **{{ data.total }} articles** (that I know of).

<h2 class="logo rocket">Rocket News</h2>
<NewsList :data="data.rocket"></NewsList>

<h2 class="logo amazon">Amazon News</h2>
<NewsList :data="data.amazon"></NewsList>

<h2 class="logo phenomblue">Phenomblue News</h2>
<NewsList :data="data.phenomblue"></NewsList> -->