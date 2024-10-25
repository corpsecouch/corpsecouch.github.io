<template>
  <PortfolioPage pcolor="lightcoral">
    <template v-slot:title>Conversational Lead Funnel</template>
    <template v-slot:year>2023</template>
    <template v-slot:company>Rocket Mortgage</template>
    <template v-slot:hero>
      <img src="@assets/portfolio/rocket/ironbear/thumb.png">
    </template>

    <template v-slot:challenge>
      <p>Every Rocket Mortgage client starts in the same place, filling out one of two digital lead forms then talking with a mortgage banker. The primary lead form, however, ends at a frustrating dead end while the client unexpectedly receives a phone call. The hypothesis is this experience was the primary driver for low top-of-funnel success rates. The challenge was to <strong>measurably improve the lead form experience without negatively impacting lead flow.</strong></p>
    </template>

    <!-- <template v-slot:role>
      <p>Flibbity flim-flam.</p>
    </template> -->

    <template v-slot:process>
      <h4>Validate Assumptions</h4>
      <p>We assumed people clients didn't like the dead-end and the disjointed experience of receiving a phone call from a mortgage banker within seconds of filling out a form. We also assumed most clients would prefer a chat experience with a mortgage banker versus a phone call. So, we asked clients what they wanted to do at the end of the form, get a call or chat. We ran this "smoke test" for two weeks on a slice of traffic. The results strongly indicated <strong>clients at the end of the lead form preferred chatting versus getting a phone call.</strong></p>

      <Illustration :imagesrc="require('@assets/portfolio/rocket/ironbear/dead-end.png')">
        <template v-slot:subtext>The original dead end of the lead form.</template>
      </Illustration>

      <h4>Design</h4>
      <p>We created a full-screen/full-browser conversational UI that enabled clients to chat with our conversational AI and mortgage bankers. The AI was powered by ChatGPT and integrated with Salesforce for mortgage banker chats. We also added light personalization by leveraging client info gathered from the lead form including their name, property type, and local time of day.</p>

      <Illustration :imagesrc="require('@assets/portfolio/rocket/ironbear/design.png')">
        <template v-slot:subtext>The new conversational UI.</template>
      </Illustration>

      <div class="columns">
        <Illustration :imagesrc="require('@assets/portfolio/rocket/ironbear/animation.gif')">
          <template v-slot:subtext>Transitioning from the lead form to the chat UI.</template>
        </Illustration>

        <Illustration :imagesrc="require('@assets/portfolio/rocket/ironbear/chat.gif')">
          <template v-slot:subtext>Chatting with an AI and a mortgage banker in the new UI.</template>
        </Illustration>

      </div>

      <h4>Derisking</h4>
      <p>Mortgage bankers aren't staffed 24/7 yet launching during core hours poses the highest business risk. We found that a large percentage of clients submit leads during after hours, aren't able to get immediate help, and have lower success rates. This presented us with the opportunity for lower risk and greater positive impact. Aligning with the banking business, we staffed mortgage chat bankers during after hours.</p>

      <Illustration :imagesrc="require('@assets/portfolio/rocket/ironbear/photo.jpg')">
        <template v-slot:subtext>Launch night – design, product, engineering, data, and business all in one room.</template>
      </Illustration>
    </template>

    <template v-slot:outcome>
      <p>We increased Rocket Mortgage's client experience scores and mortgage lead success KPIs by launching a new full-browser, generative AI & human-agent chat experience at the end of the primary digital lead form. This product also overhauled the conversational AI architectural foundation establishing a more robust and centralized conversational AI API.</p>
      <YouTubeVideo src="https://www.youtube.com/embed/9BHhCdaoqZ8"></YouTubeVideo>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from '@components/PortfolioPage';
  import NewsLink from '@components/NewsLink';
  import newsData from '@data/news-coverage';
  import YouTubeVideo from '@components/YouTubeVideo';
  import Illustration from '@components/Illustration';
  import _ from 'lodash';

  export default {
    name: 'RocketIronbear',

    components: {
      PortfolioPage,
      NewsLink,
      YouTubeVideo,
      Illustration
    },

    data() {
      return {
        news: _.filter(newsData, ['project', 'RocketIronbear'])
      }
    }
  }
</script>

<style scoped lang="css">
  .columns {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    grid-gap: 3.5rem 1.5rem;

    /* max-width: xsmall screen */
    @media all and (max-width: 600px) { display: block; }
  }
</style>
