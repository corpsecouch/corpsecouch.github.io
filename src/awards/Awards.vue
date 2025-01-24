<template>
    <p>Me or my work has been recognized with <strong>{{ data.total }} awards</strong>.</p>

    <div id="awards-list">
      
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

    </div>
</template>

<script>
  import AwardList from '@components/AwardList';
  import { data as awards } from '@awards/awards.data'
  import { data as companies } from '@globals/companies.data'

  import _ from 'lodash';

  const name = 'AwardsPage';

  export default {
    name: name,

    components: {
      AwardList
    },

    data () {
      let data = {};
      _.each(companies, (value, key) => {
        data[value.slug] = _.filter(awards, o => { return o.company.slug == value.slug })
      });

      data.total = awards.length;

      return {
        data: data
      }
    }
  }
</script>

<style scoped lang="css">
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.3rem;

    text-indent: 100%;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position-x: left;
    text-indent: 100%;
    overflow: hidden;
    white-space: nowrap;

    height: 84px;
    background-size: contain;
  }

  #rocket h3 {
    background-image: url('/assets/logos/rocket.png');
    height: 64px;
  }

  #amazon h3 {
    background-image: url('/assets/logos/amazon.png');
    height: 64px;
  }

  #disney h3 {
    background-image: url('/assets/logos/disney.png');
    height: 64px;
  }

  #phenomblue h3 {
    background-image: url('/assets/logos/phenomblue.png');
    height: 64px;
  }

  section + section {
    margin-top: 3rem;
  }

  #awards-list {
    /* margin-top: 4rem; */

    > section {
      margin-top: 4rem;
    }
  }
</style>