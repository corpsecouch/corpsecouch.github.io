<template>
  <p>My work has been featured or mentioned in at least <strong>{{ newsData.total }} articles</strong> (that I know of).</p>

  <div id="news-list">
    
    <section id="rocket" v-if="newsData.rocket.length">
      <h3>Rocket News</h3>
      <NewsList :data="newsData.rocket"></NewsList>
    </section>

    <section id="amazon" v-if="newsData.amazon.length">
      <h3>Amazon News</h3>
      <NewsList :data="newsData.amazon"></NewsList>
    </section>

    <section id="disney" v-if="newsData.disney.length">
      <h3>Disney News</h3>
      <NewsList :data="newsData.disney"></NewsList>
    </section>

    <section id="phenomblue" v-if="newsData.phenomblue.length">
      <h3>Phenomblue News</h3>
      <NewsList :data="newsData.phenomblue"></NewsList>
    </section>

  </div>
</template>

<script>
  import NewsList from '@components/NewsList';
  import { data as news } from '@press/press.data';
  import { data as companies } from '@globals/companies.data'

  import _ from 'lodash';

  const name = 'PressPage';

  export default {
    name: name,

    components: {
      NewsList
    },

    data () {
      let newsData = {};
      _.each(companies, (value, key) => {
        newsData[value.slug] = _.filter(news, o => { return o.company.slug == value.slug })
      });

      newsData.total = news.length;

      return {
        newsData: newsData
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

  #news-list {
    /* margin-top: 4rem; */

    > section {
      margin-top: 4rem;
    }
  }
</style>