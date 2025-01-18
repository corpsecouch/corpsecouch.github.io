<script setup>
    import { data } from '../data/news-coverage.data'
    import NewsList from '../components/NewsList.vue'
</script>

# Press

My work has been featured or mentioned in at least **{{ data.total }} articles** (that I know of).

<section id="rocket" v-if="data.rocket.length">
    <h3>Rocket News</h3>
    <NewsList :data="data.rocket"></NewsList>
</section>

<section id="amazon" v-if="data.amazon.length">
    <h3>Amazon News</h3>
    <NewsList :data="data.amazon"></NewsList>
</section>

<section id="disney" v-if="data.disney.length">
    <h3>Disney News</h3>
    <NewsList :data="data.disney"></NewsList>
</section>

<section id="phenomblue" v-if="data.phenomblue.length">
    <h3>Phenomblue News</h3>
    <NewsList :data="data.phenomblue"></NewsList>
</section>