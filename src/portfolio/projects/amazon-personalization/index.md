---
# layout:         'case study'

title: Personalization
description: A case study on personalization

preview:
    company:        'amazon'
    image:      '/portfolio/amazon-personalization/thumb.png'
    type:       'product'
    color:      'lightcoral'
    year:           '20XX'
    title:          'Personalization'
    description:    'A case study on personalziation'
    tags:           ['strategy', 'artificial intelligence', 'leadership']
---

<script setup>
    import PortfolioPage from '@components/PortfolioPage';
</script>

<PortfolioPage pcolor="lightcoral">
    <template v-slot:title>Personalization</template>
    <template v-slot:year>20XX</template>
    <template v-slot:company>Amazon</template>
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