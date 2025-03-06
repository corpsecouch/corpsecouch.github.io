---
layout: portfolio
title: Conversational Lead Funnel
description: A case study on overhauling the mortgage top-of-funnel using conversational AI.
nda: true
keys:
  project: RocketIronbear
  company: rocket
hero:
  type: product
  color: lightcoral
  image: /portfolio/rocket-ironbear/thumb.png
year: 2023
tags: ['artificial intelligence', 'conversational ai', 'leadership', 'personalization']
preview:
    title:          'Conversational Lead Funnel'
    description:    'Overhauling the mortgage top-of-funnel with conversational AI.'
---

Every Rocket Mortgage client starts in the same place, filling out one of two digital lead forms then talking with a mortgage banker. The primary lead form, however, ends at a frustrating dead end while the client unexpectedly receives a phone call. The hypothesis is this experience was the primary driver for low top-of-funnel success rates. The challenge was to **measurably improve the lead form experience without negatively impacting lead flow**.

## Role
I was the Director of Design. My cross-disciplinary design team was partnered with the growth product design team, engineering, data, banking, and product teams.

## Outcome
At the end of the lead form, we launched a gen AI powered chat that connects a client to a mortgage banker – all within the same chat experience.

To do this, we overhauled the architectures of the lead form and conversational AI. We also designed a net-new, full-browser, personalized chat experience.

We launched this new experience during after-hours where nearly half of all leads were coming in, creating the biggest opportunity and addressing a major experience pain point.

We saw a significant increase in lead conversion and estimated ARR (annual recurring revenue).

<!-- We increased Rocket Mortgage's client experience scores and mortgage lead success KPIs by launching a new full-browser, generative AI & human-agent chat experience at the end of the primary digital lead form. This product also overhauled the conversational AI architectural foundation establishing a more robust and centralized conversational AI API. -->

<Video src="https://www.youtube.com/embed/9BHhCdaoqZ8"></Video>

## Process

### Validate Assumptions
We assumed people clients didn't like the dead-end and the disjointed experience of receiving a phone call from a mortgage banker within seconds of filling out a form. We also assumed most clients would prefer a chat experience with a mortgage banker versus a phone call. So, we asked clients what they wanted to do at the end of the form, get a call or chat. We ran this "smoke test" for two weeks on a slice of traffic. The results strongly indicated **clients at the end of the lead form preferred chatting versus getting a phone call**.

![The original dead end of the lead form.](/portfolio/rocket-ironbear/dead-end.png)

### Design
We created a full-screen/full-browser conversational UI that enabled clients to chat with our conversational AI and mortgage bankers. The AI was powered by ChatGPT and integrated with Salesforce for mortgage banker chats. We also added light personalization by leveraging client info gathered from the lead form including their name, property type, and local time of day.

![The new conversational UI.](/portfolio/rocket-ironbear/design.png)

![Transitioning from the lead form to the chat UI.](/portfolio/rocket-ironbear/animation.gif)

![Chatting with an AI and a mortgage banker in the new UI.](/portfolio/rocket-ironbear/chat.gif)

### Derisking
Mortgage bankers aren't staffed 24/7 yet launching during core hours poses the highest business risk. We found that a large percentage of clients submit leads during after hours, aren't able to get immediate help, and have lower success rates. This presented us with the opportunity for lower risk and greater positive impact. Aligning with the banking business, we staffed mortgage chat bankers during after hours.

<!-- ![Launch night – design, product, engineering, data, and business all in one room.](/portfolio/rocket-ironbear/photo.jpg) -->