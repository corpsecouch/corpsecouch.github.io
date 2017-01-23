import { Component, OnInit }  from '@angular/core';
import { Title }              from '@angular/platform-browser';

@Component({
  styleUrls: [
    'styles/interior.css',
    'app/portfolio/portfolio.styles.css'
  ],
  template: `
  <header>
    <h1 title>AR Concept</h1>
    <p subtitle>A glimpse into the future of theatrical storytelling.</p>
  </header>

  <section>
    <h2 title>The Challenge</h2>
    <content>
      <p>Imagine theatrical storytelling outside of the theater setting. What does the future of best-in-class storytelling look like?</p>
      <p>This was the challenge I posed to myself.</p>
      <h3>Blue Sky</h3>
      <p>This concept shouldn't hinge on current-state limitations. I wanted to imagine a possible future without worring about technological, market, process, societal or anything else that could restrict it before it ever sees the light of day.</p>
      <h3>Funding</h3>
      <p>Seeing this potential future come to life is the ultimate goal. This concept should be something I could pitch and eventually get funding for.</p>
    </content>
  </section>

  <section>
    <h2 title>Strategy</h2>
    <content>
      <p>This was a purely creative challenge but I wanted to come away with something that could conceivably be built today and yet still seem like someone stole a time machine.</p>
      <h3>Convergence</h3>
      <p>I needed too look at and understand various technology and non-technology factors that are or could converge.</p>
      <h3>Business Viability</h3>
      <p>In order to eventually get fundind I need to keep business viability in mind as the concept matures.</p>
      <h3>Mindful Futurism</h3>
      <p>So often people imagine a dark future especially when towards technologys impact on society. I need to approach this concept that provides an optimistic look at the future and could influence society in a positive way.</p>
    </content>
  </section>

  <section>
    <h2 title>Execution</h2>
    <content>
      <h3>Ideation</h3>
      <p>Being purely divergent, generating concepts and documenting the wildest ideas. It's one of the funnest parts of the process. I built up a stockpile of ideas; great, mediocre, and lots of crappy ones. I documented them using any means necessary to capture the idea. Sometimes it was a series of sketches, a sentence or two in a notebook, or a collection of reference URLs with a feature list in Evernote.</p>
      <visual-example image="ar-concept/ideation.jpg">One of many ideation sketchs</visual-example>

      <h3>Foresight/Futursim</h3>
      <p>I needed to whittle down the mountain of ideas if I was going to accomplish the goals of my challenge. So I ran through a series scenarios using futurism techniques and analyzed general trends to decide on an appropriate direction.</p>

      <h3>Storyboarding</h3>
      <p>Communicating an experience is challenging, especially one full of nuances and possibilities. I could have written a novella explaining it all. Instead I storyboarded the major portions of the experience. They provide the most effective means of communicating the concept. The storyboards conveyed the various stories of the experience and simultaneously showcased its major features.</p>
      <visual-example image="ar-concept/storyboard.png">A glimpse at some of the storyboards</visual-example>
    </content>
  </section>

  <section>
    <h2 title>Outcome</h2>
    <content>
      <p>By the end I had a series of documents that visually communicates a new theatrical storytelling experience. It's immersive utilizing augmented reality as the method to convey theatrical-level stories. By combining subconscious user interactions and non-linear storytelling each person has a unique yet consistent experience. Incorporating the spirit of geocaching and simultaneous multi-user input people explore their physical world and share experiences with others.</p>
      <p>The concept has been receive very well after an initial round of pitching. Based on feedback so far I've iterated on the concept and submitted various patents to help the concept eventually come to life.</p>
    </content>
  </section>
  `
})
export class ARConceptComponent implements OnInit {
  constructor(private titleService:Title){}

  ngOnInit(){
    this.titleService.setTitle('AR Concept - Jason Bejot\'s Portfolio');
  }
}
