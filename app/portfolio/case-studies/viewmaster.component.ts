import { Component, OnInit }  from '@angular/core';
import { Title }              from '@angular/platform-browser';

@Component({
  styleUrls: [
    'styles/interior.css',
    'app/portfolio/portfolio.styles.css'
  ],
  template: `
  <header imageUrl="assets/portfolio/viewmaster/header.png">
    <h1 title>Viewmaster</h1>
    <p subtitle>A multi-platform Virtual Reality experience showcasing the possibilities of this new type of theatrical storytelling.</p>
  </header>

  <section class="page-break-after">
    <h2 title>The Challenge</h2>
    <content>
      <p>Virtual Reality was still new. Consumer-grade VR hardware hadn't yet been released except for the first version of the Google Cardboard. Film makers and studio executives alike still had no idea how to tell stories or what's possible in VR.</p>
      <p>Our three person team had two months to create a mulit-platform VR experience to showcase what storytelling possiblities VR provides. We had a hard deadline with the release date of Big Hero 6. Consumer-grade VR hardware was still two years away from hitting the shelves. We were using prototype Oculus Rift 1.5 HD's, 1st generation Magic Leaps, Google Cardboard and beta SDKs.</p>
    </content>
  </section>

  <section>
    <h2 title>My Role</h2>
    <content>
      <p>I was the lead experience designer I provided the experience, creative and art direction.</p>
      <p>I wore a few different hats during the course of the product. The notable roles I covered are:</p>
      <ul>
        <li>Experience, Art &amp; Creative Director</li>
        <li>Manager</li>
        <li>Researcher</li>
        <li>Experience Designer</li>
      </ul>

      <h3>Creative Direction</h3>
      <p>I provided direction on VR experience and all the creative surrounding the experience. I worked with an off-site visual designer and the two on-site engineers to bring this to life.</p>

      <h3>Ideation &amp; Concepting</h3>
      <p>I lead ideation activities within the product team and created mulitple concepts and high-level design, product and experience solutions.</p>

      <h3>Planning &amp; Scope Definition</h3>
      <p>I <em>managed up</em> to define the design language with the product manager and other stakeholders.</p>

      <h3>Testing &amp; Validation</h3>
      <p>I tested and validated assumptions, solutions and interactions at all levels and product phases for all users to reduce risk.</p>

      <h3>Direction &amp; Coordination</h3>
      <p>I <em>managed across</em> a visual designer and engineers.</p>

      <h3>Design Execution</h3>
      <p>I created user journeys, user flows, wireframes, prototypes and design specs.</p>

      <h3>Leadership</h3>
      <p>I drove the experience design process within the product team. I presented to stakeholders and executives to gain buy-in and support along the entire product lifecycle.</p>
    </content>
  </section>

  <section>
    <h2 title>Strategy</h2>
    <p>This was the first time the Studios had attempted VR. Because of the audience and technology hype it was a high visibility product. There was a lot riding on its success.</p>

    <content>
      <h3>Usability</h3>
      <p>For many this app would be their first exposure to virtual reality. Using and moving through the experience needed to feel like a part of the overall experience. It should augment the time spent in VR and not give any negative impression towards the creative and decision-making audience.</p>

      <h3>Persuasiveness</h3>
      <p>The content of the showcase needs to highlight the areas of potential in VR to spark ideas from filmmakers. It simultaneously needs to be persuasive enough for executives to get excited and buy-in to the ideas.</p>

      <h3>Research</h3>
      <p>With all of the pre-release SDKs and hardware as well as people never using VR before there were a mountain of assumptions and unknowns. Research would be critical to this products success.</p>
    </content>
  </section>

  <section class="page-break-before">
    <h2 title>Research</h2>
    <p>This proved to be one of the few products where the users took a back-seat in priority. It was all about discovering what the technology could do and what academic VR research had already learned.</p>

    <content>
      <h3>Whitepapers</h3>
      <p>At the time most VR research was conducted by academics through university labs. Neither VR communities nor best practices existed or were publicly available. So, I went in search of whitepapers.</p>
      <visual-example image="viewmaster/slide18.png">Excerpt from whitepaper research</visual-example>

      <h3>Gestures &amp; interaction</h3>
      <p>The public hadn't been exposed to interacting in VR. It's similar to the introduction of the mouse, no one knew how to use it. For this project to be successful I needed to develop natural interactions and they had to be simple enough to be recognized by the hardware.</p>
      <visual-example image="viewmaster/Photo Sep 17, 6 32 31 PM.jpg">One of many gesture &amp; interaction research whiteboards</visual-example>

      <h3>Prototype</h3>
      <p>One of the project goals was to have interactions in VR done with naked hands. Oculus doesn't have any support like that. So I needed a way to attach a Magic Leap to my Oculus Rift witht he intention of 3D printing the final solution.</p>
      <p>The project manager sourced prototype Google Cardboards directly from Google. This was about a month before Google had publicly released them.</p>
      <visual-example image="viewmaster/Photo Oct 10, 3 44 54 PM.jpg">Initial cardboard prototype of an Oculus Rift with Magic Leap attached</visual-example>
    </content>
  </section>

  <section>
    <h2 title>Execution</h2>
    <content>
      <p>The VR experience needed to be immersive and easy to use. I couldn't give the audience a sour experience because it was difficult move around in.</p>

      <h3>User Flow</h3>
      <p>I went through multiple rounds of storyboarding and user flow exercises.</p>
      <visual-example image="viewmaster/direction 4.png">Example of experience flow</visual-example>

      <h3>Navigation &amp; Interaction</h3>
      <p>Navigation between the showcase of VR experiences needed to be seamless and perhaps augment the experience. The in-experience controls also need to be easy to use and not get in the way of the real experience. I went through many rounds of ideation, concepting and wireframing.</p>
      <visual-example image="viewmaster/concept 3.png">One of many menuing and navigation concepts</visual-example>

      <h3>Virtual Reality</h3>
      <p>This was a challenging part of the project. There were two separate but similar VR experiences, one for Oculus and one for Google Cardboard. Directing both was a challenge because of the difference in hardware capabilities and methods of interaction. On top of that there was no guidance or precedent on how to direct VR experiences.</p>
      <visual-example image="viewmaster/Photo Nov 21, 3 37 57 PM.png">Screenshot from within the VR experience</visual-example>

      <h3>Physical design</h3>
      <p>Part of the holistic experience is the packaging of the Google Cardboard. I directed the visual designer to create a custom printed sticker that would wrap the entire Google Cardboard as well as an insert that provided download instructions.</p>
      <visual-example image="viewmaster/Capture.PNG">Direction notes for Google Cardboard packaging</visual-example>

      <h3>Website</h3>
      <p>For the Google Cardboard VR experience people would need to download an app. To keep the entire experience together I built a website and directed the visual designer on it's design.</p>
      <visual-example image="viewmaster/ViewMaster Landing Page-Hiro2_1.jpg" note="">Screenshot of the app download microsite</visual-example>

      <h3 class="page-break-before">Validation</h3>
      <p>This entire project was predicated on assumptions. I needed to validate them and all my research. With every build the engineers delievered I conducted hallway tests. I sat in a building with 300 coworkers so participants were easy to come by.</p>
    </content>
  </section>

  <section>
    <h2 title>Outcome</h2>
    <content>
      <p>Before the deadline I had finished all design and direction. I had even facilitated the printing, assembly and delivery of 100 Google Cardboards with custom, full-wrap stickers and instructional inserts.</p>
      <p>As a team we delivered a very successful holistic VR experience across two beta VR platforms with prototype hardware. One for the Oculus Rift and one for Google Cardboard.</p>
      <p>The experience was innovative enough that I filed a VR patent based on my menu and navigation work.</p>
    </content>
  </section>
  `
})
export class ViewmasterComponent implements OnInit {
  constructor(private titleService:Title){}

  ngOnInit(){
    this.titleService.setTitle('Viewmaster from Jason Bejot\'s Portfolio');
  }
}
