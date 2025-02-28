---
# layout:         'case study'

title: Personalization
description: A case study on personalization

preview:
    company:        'rocket'
    image:      '/portfolio/rocket-personalization/thumb.png'
    type:       'product'
    color:      'lightcoral'
    year:           '2023'
    title:          'Personalization'
    description:    'A case study on personalziation'
    tags:           ['strategy', 'artificial intelligence', 'leadership']
---

<script setup>
    // import Page from './Rocket-Personalization.vue'
    import PortfolioPage from '@components/PortfolioPage';
</script>

<!-- <Page></Page> -->

<PortfolioPage pcolor="lightcoral">
    <template v-slot:title>Personalization</template>
    <template v-slot:year>2023</template>
    <template v-slot:company>Rocket Mortgage</template>
    <template v-slot:hero>
      <img src="/portfolio/rocket-ironbear/thumb.png">
    </template>
    <template v-slot:challenge>
        <p>There was no personalization
        Very little of the RKT experience was personalized.
        Clients expected it but Rocket didn’t provide it.
        Multiple industry reports and competitive analysis showed fintech clients expected a personalized experience which also contributes to higher revenues and increased trust specifically for fintech, a large body of client feedback corroborated that.</p>
    </template>
    <template v-slot:outcome>
      <p>We increased Rocket Mortgage's client experience scores and mortgage lead success KPIs by launching a new full-browser, generative AI & human-agent chat experience at the end of the primary digital lead form. This product also overhauled the conversational AI architectural foundation establishing a more robust and centralized conversational AI API.</p>
    </template>
    <template v-slot:process>
      <h4>Validate Assumptions</h4>
      <p>We assumed people clients didn't like the dead-end and the disjointed experience of receiving a phone call from a mortgage banker within seconds of filling out a form. We also assumed most clients would prefer a chat experience with a mortgage banker versus a phone call. So, we asked clients what they wanted to do at the end of the form, get a call or chat. We ran this "smoke test" for two weeks on a slice of traffic. The results strongly indicated <strong>clients at the end of the lead form preferred chatting versus getting a phone call.</strong></p>
      <h4>Design</h4>
      <p>We created a full-screen/full-browser conversational UI that enabled clients to chat with our conversational AI and mortgage bankers. The AI was powered by ChatGPT and integrated with Salesforce for mortgage banker chats. We also added light personalization by leveraging client info gathered from the lead form including their name, property type, and local time of day.</p>
      <h4>Derisking</h4>
      <p>Mortgage bankers aren't staffed 24/7 yet launching during core hours poses the highest business risk. We found that a large percentage of clients submit leads during after hours, aren't able to get immediate help, and have lower success rates. This presented us with the opportunity for lower risk and greater positive impact. Aligning with the banking business, we staffed mortgage chat bankers during after hours.</p>
    </template>
</PortfolioPage>


<!-- ## Challenge
Every Rocket Mortgage client starts in the same place, filling out one of two digital lead forms then talking with a mortgage banker. The primary lead form, however, ends at a frustrating dead end while the client unexpectedly receives a phone call. The hypothesis is this experience was the primary driver for low top-of-funnel success rates. The challenge was to **measurably improve the lead form experience without negatively impacting lead flow**.

## Process

### Validate Assumptions
We assumed people clients didn't like the dead-end and the disjointed experience of receiving a phone call from a mortgage banker within seconds of filling out a form. We also assumed most clients would prefer a chat experience with a mortgage banker versus a phone call. So, we asked clients what they wanted to do at the end of the form, get a call or chat. We ran this "smoke test" for two weeks on a slice of traffic. The results strongly indicated **clients at the end of the lead form preferred chatting versus getting a phone call**.

<Illustration>
    <template v-slot:image><img src="/portfolio/rocket-ironbear/dead-end.png"></template>
    <template v-slot:subtext>The original dead end of the lead form.</template>
</Illustration>

### Design
We created a full-screen/full-browser conversational UI that enabled clients to chat with our conversational AI and mortgage bankers. The AI was powered by ChatGPT and integrated with Salesforce for mortgage banker chats. We also added light personalization by leveraging client info gathered from the lead form including their name, property type, and local time of day.

<Illustration>
    <template v-slot:image><img src="/portfolio/rocket-ironbear/design.png"></template>
    <template v-slot:subtext>The new conversational UI.</template>
</Illustration>

<Illustration>
    <template v-slot:image><img src="/portfolio/rocket-ironbear/animation.gif"></template>
    <template v-slot:subtext>Transitioning from the lead form to the chat UI.</template>
</Illustration>

<Illustration>
    <template v-slot:image><img src="/portfolio/rocket-ironbear/chat.gif"></template>
    <template v-slot:subtext>Chatting with an AI and a mortgage banker in the new UI.</template>
</Illustration>

### Derisking
Mortgage bankers aren't staffed 24/7 yet launching during core hours poses the highest business risk. We found that a large percentage of clients submit leads during after hours, aren't able to get immediate help, and have lower success rates. This presented us with the opportunity for lower risk and greater positive impact. Aligning with the banking business, we staffed mortgage chat bankers during after hours.

<Illustration>
    <template v-slot:image><img src="/portfolio/rocket-ironbear/photo.jpg"></template>
    <template v-slot:subtext>Launch night – design, product, engineering, data, and business all in one room.</template>
</Illustration>

## Outcome
We increased Rocket Mortgage's client experience scores and mortgage lead success KPIs by launching a new full-browser, generative AI & human-agent chat experience at the end of the primary digital lead form. This product also overhauled the conversational AI architectural foundation establishing a more robust and centralized conversational AI API.

<YouTubeVideo src="https://www.youtube.com/embed/9BHhCdaoqZ8"></YouTubeVideo> -->