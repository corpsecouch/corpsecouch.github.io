<template>
  <Subpage>
    
    <template v-slot:title>&bull; In The News &bull;</template>

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
  import Subpage from 'components/Subpage';
  import NewsList from 'components/NewsList';
  import news from 'data/news-coverage';
  import companies from 'data/companies';

  const name = 'NewsPage';

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

<style scoped lang="scss">
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.3rem;
  }

  section + section {
    margin-top: 3rem;
  }

  #news-list > p {
    margin-bottom: 3rem;
  }
</style>