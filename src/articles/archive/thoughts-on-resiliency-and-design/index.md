---
title: 'Thoughts on Resiliency & Design'
date: '2024-11-04T12:00'
layout: 'article'
preview:
    text: 'A common question from product designers is “How do I do conversation design?”. There''s a disconnect in grasping the concept.'
---

![](./hero.jpg)

Early in his book [Wicked Problems](https://bookshop.org/p/books/wicked-problems-how-thinking-like-an-engineer-can-create-a-better-world-guru-madhavan/20059933), author Guru Madhavan talks about the efficiency trade-offs when solving different types of problems. Defining efficiency as a solution producing measurable output using specific inputs, he talks about the pursuit of efficiency coming at a cost. When the inputs change, the solution breaks. Basically, an efficient solution is also brittle.

A car’s engine (the solution) needs air and fuel (the inputs) to turn the car’s wheels (the output). We measure cars by their MPG, how efficient they are at using fuel. But if you accidentally put diesel in your gas-powered car, even though it’s a type of fuel, you’re going to need a tow truck. In an efficient solution, the more its inputs change the more likely it’ll break.

A common question I hear from product designers wanting to break into conversation design is “How do I do conversation design?”. This leaves me wondering, where’s the disconnect? Why is it so hard to grasp this concept? Thinking about efficiency, I had a brainwave. Stick with me while I try to lay it all out.

---

> Modern product design is caught in the trap of efficiency.

---

Entire solutions aren’t designed all at once, generally speaking, like a mobile app or an e-comm site. They’re created in parts, iteratively, and snapped together like an imaginary Lego set. Each has its own set of problems, inputs, and outputs:

- People need to log in, so you create a log in experience.
- People need to buy items they’ve selected, so you create a checkout experience.
- The business wants to reduce lost opportunity, so you create an abandoned cart experience.
- People need to know when they get a message, so you create a notification experience.

The list is endless. What you end up with is an ecosystem of interconnected purpose-built solutions with their own measures of efficiency: abandoned cart opportunity loss, checkout flow drop-off rate, product page CTR, etc. like some sort of Mad Max-eqsue, multi-engine monstrosity of a vehicle.

This is the world the vast majority of product designers operate in: designing efficient, purpose-built solutions. Modern product design is caught in the trap of efficiency, creating brittle points that can become breaks.

## So what about resiliency?
Resiliency is almost the opposite of efficiency, depending on how you look at it. A resilient solution is one that wont break when the inputs change, it will still produce an output.

---

> The very nature of conversation design is resiliency over efficiency.

---

This, I think, is where product designers start to struggle wrapping their heads around conversation design. A conversational AI should always respond to the person no matter what they say. Every time someone interacts, there’s a response. There’s always exceptions, but that’s a foundational and overarching principal of conversation design. With non-conversational product design, there’s only a response when you hit a button, or some other pre-determined interactive element like an image in a carousel.

Conversational AI experiences happen through a text field on the internet. You better believe people will try to put everything they can in it. No matter what someone puts in that text field, the AI needs to respond to keep that conversation moving forward.

The primary input for non-conversational product experiences are taps and clicks, very tightly limited to the interactive elements (buttons) on the screen. The input for conversational experiences, however, is essentially unbounded; it’s whatever someone puts or doesn’t put in that text field. How do you create efficiency with unbounded input? The very nature of conversation design is resiliency over efficiency.

## It’s not efficiency vs resiliency
I know, I said “resiliency is almost the opposite of efficiency”. They’re related, but not two ends of the same spectrum. They can coexist; a solution can be described by its resiliency and its efficiency. It all depends on how you measure it, and how you frame it.

Let’s look at a good old FAQ as an example. An FAQ (the solution) is typically pretty simple, consisting of only two parts: what the person asks (the input) and the answer (the output). A well implemented conversational FAQ is resilient because there’s a thousand different ways a person could ask a question to get the answer. At the same time, a conversational FAQ is efficient because it usually takes less time and effort to get the answer compared to finding it another way.

Both resiliency and efficiency can be true.

This is a squishy topic and it’s still developing as the field matures. That’s usually what happens with conversation design. Besides, there’s that ever-present question “how do you go about doing this?” Glad you asked. But, that’s a different topic for a different time.