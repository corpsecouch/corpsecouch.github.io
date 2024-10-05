<template>
  <Subpage>
    
    <template v-slot:title>Press Coverage</template>

    <div id="news-list">
      <p>My work has been featured or mentioned in at least <strong>{{ newsData.total }} articles</strong> (that I know of).</p>

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

  </Subpage>
</template>

<script>
  import Subpage from '@components/Subpage';
  import NewsList from '@components/NewsList';
  import news from '@data/news-coverage';
  import companies from '@data/companies';

  import _ from 'lodash';

  const name = 'PressPage';

  export default {
    name: name,

    components: {
      Subpage,
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
  }

  #rocket h3 {
    background-image: url('@/assets/rocket.png');
    height: 64px;
  }

  #amazon h3 {
    background-image: url('@/assets/amazon.png');
    height: 64px;
  }

  #disney h3 {
    background-image: url('@/assets/disney.png');
    height: 64px;
  }

  #phenomblue h3 {
    background-image: url('@/assets/phenomblue.png');
    height: 64px;
  }

  section + section {
    margin-top: 3rem;
  }

  #news-list > p {
    margin-bottom: 3rem;
  }
</style>