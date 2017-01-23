import { Component, OnInit }  from '@angular/core';
import { Title }              from '@angular/platform-browser';

@Component({
  styleUrls: [
    'styles/interior.css',
    'app/portfolio/portfolio.styles.css'
  ],
  template: `
  <header imageUrl="assets/portfolio/castl/masthead.jpg">
    <h1 title>CASTL</h1>
    <p subtitle>CASTL is a product that manages the process of script and story development for all Disney Studios films.</p>
  </header>

  <section>
    <h2 title>The Challenge</h2>
    <content>
      <p>The system the Creative Affairs team used had become severly outdated, difficult to use and unreliable. It could no longer the business and user needs. Users on all sides of the system didn't like using it and created a set of elaborate work-arounds.</p>
      <p>CASTL needed to be a ground-up redesign of the entire Creative Affairs system and process. This system would be the gatekeeper for all theatrical stories and characters created by Disney.</p>

      <h3>Secure</h3>
      <p>Protecting stories and characters while still in development is mission critical. CASTL needs to have the highest level of security and confidentiality.</p>

      <h3>Efficient</h3>
      <p>It needs to support the creative and business processes to handle high volumes of time sensitive creative work.</p>

      <h3>Available</h3>
      <p>Work never stops even when you are at a remote production location without internet.</p>

      <h3 class="page-break-before">Desirable</h3>
      <p>Everyone involved in the process, from the analysts to top decision-making executives should want to use CASTL. It should be the place they want to personally do their work.</p>

      <h3>Hard Deadline</h3>
      <p>There was no room for major product iteration post-launch. The product team needed to deliver a complete product by a specific deadline.</p>
    </content>
  </section>

  <section>
    <h2 title>My Role</h2>
    <content>
        <p>I led the experience design effort for the entirety of the CASTL redesign.</p>
        <p>I wore many hats during the course of the product. The notable roles I covered are:</p>
        <ul>
          <li>Experience Designer</li>
          <li>Experience Architect</li>
          <li>Experience &amp; Art Director</li>
          <li>Manager</li>
          <li>Product Owner</li>
          <li>Researcher</li>
          <li>Experience Strategist</li>
        </ul>

        <h3>Experience Strategy &amp; Vision</h3>
        <p>I created the product strategy necessary to accomplish the product goals, create the best user experience and create business value.</p>

        <h3>Ideation &amp; Concepting</h3>
        <p>Through divergent ideation activities I created mulitple concepts and high-level design solutions.</p>

        <h3 class="page-break-before">Planning &amp; Scope Definition</h3>
        <p>I <em>managed up</em> to drive the product in collaboration with the product managers, stakeholders and executives.</p>

        <h3>Testing &amp; Validation</h3>
        <p>I tested and validated assumptions, solutions and interactions at all levels and product phases for all users to reduce risk.</p>

        <h3>Direction &amp; Coordination</h3>
        <p>I <em>managed across</em> multiple visual and experience designers execute the scope across multiple years and phases of the product.</p>

        <h3>Design Execution</h3>
        <p>I created user journeys, user flows, wireframes, prototypes, a design system and design specs.</p>

        <h3>Leadership</h3>
        <p>I drove the experience design process within the product team. I presented to stakeholders and executives to gain buy-in and support along the entire product lifecycle.</p>
    </content>
  </section>

  <section>
    <h2 title>Strategy</h2>
    <content>
      <p>With a large scope, small product team, hard launch date and lots of technical unknowns it seemed like a perfect storm. Everything that myself and my team delivered needed to be within one iteration of right. A sound experience strategy would be critical to the success of this product.</p>

      <h3>Reduce Risk</h3>
      <p>There was a mountain of user, business an technical unknowns that would all affect the experience design. Before getting too far into solutions I needed to conduct as much research and assumption validation as possible.</p>

      <h3>Refine Scope</h3>
      <p>The huge feature list was daunting. I needed to whittle it down to the core of the what the product needs to do. After prioritizing and roadmapping that I could tackle less critical features.</p>

      <h3>Constant Validation</h3>
      <p>Without the luxury of testing after something is built I needed a user testing paradigm involving interactive prototypes that was regular, quick, highly valuable and accomodated busy executive schedules.</p>
    </content>
  </section>

  <section>
    <h2 title>Research</h2>
    <content>
      <p>As the lead experience designer on the product I personally conducted the experience research.</p>

      <h3>The Users</h3>
      <p>This sysytem turned out to be a 3-sided marketplace, not including system administrators. A separate persona was created for each.</p>
      <visual-example image="castl/persona.jpg">Example of one of the personas</visual-example>

      <h3 class="page-break-before">Context</h3>
      <p>There are a lot of different situations, tasks and needs that this system needed to support. Only some of them were shared between personas.</p>
      <visual-example image="castl/context.jpg">A whiteboard after a use case exercise</visual-example>

      <h3>Competitive Experience Analysis</h3>
      <p>I needed to understand what sort of best practices were currently in the marketplace. I analyzed popular consumer-grade experiences that had similar scenarios I needed to design for.</p>
      <visual-example image="castl/market.png">A screenshot taken during my analysis</visual-example>

      <h3>Features</h3>
      <p>The first step to wrangling the scope is to map it all out. I worked with the business stakeholders, users and product owner to do this. The results of this would later influence feature planning, the roadmap and managing the Agile process.</p>
      <visual-example image="castl/features.jpg">A wall of features after a discovery exercise</visual-example>

      <h3 class="page-break-before">Technology</h3>
      <p>Working closely with the engineering team we worked to de-mystify the technology solutions need for security and working offline.</p>

      <h3>Measurement</h3>
      <p>The product team needed to prove that CASTL would be an improvement over the current system. By working with the product owner and users I established experience metrics and baselines for comparison.</p>
      <visual-example image="castl/metrics.jpg">A whiteboard of exerpeince metrics after a discovery exercise</visual-example>
    </content>
  </section>

  <section>
    <h2 title>Execution</h2>
    <content>
      <p>I oversaw every aspect of the execution from the experience perspective.</p>

      <h3>Design Process</h3>
      <p>I drove the design process within the product team from day zero to the launch of the product. I worked closely with the product owner, business analysts and managers to plan, remove roadblocks and add value.</p>

      <h3>Shared Patterns</h3>
      <p>Having a set of reusable design artifacts is a major component to a consistent product experience and a smooth Agile process. Collaborating with the engineering team I established a pattern library for the product very early on in the process. It became our shared language and enabled us to very effectively communicate about all parts of the product.</p>
      <visual-example image="castl/patterns.jpg">An excerpt of an early version of a design pattern</visual-example>

      <h3>Collaboration</h3>
      <p>Design handoffs, reviews and documentation are all the enemy of efficiency. Those practices went out the window in favor of a collaborative design method.</p>
      <p>Features were created, discussed and defined through a series of very focused collaborative design sessions. Everyone was involved: Engineers, business users, stakeholders, quality assurance, etc. I facilited every session and together we defined each features journey and high-level functionality.</p>
      <p>The results of each collaborative session would turn into either a wireframe or a functional prototype. This would depend on the level of risk of each solution. The riskier the solution the more testing it would need.</p>
      <visual-example image="castl/collaboration.jpg">Photo of collaborative design workshop</visual-example>

      <h3>Flow</h3>
      <p>I spent a lot of time designing how users would flow through the system. This was important to create an experience that was easy and fast to use without being complicated even though it has a lot of features. These flows were also a great tool for communicating how different parts of the experience connect.</p>
      <visual-example image="castl/flow.jpg">An example of a user flow</visual-example>

      <h3>Wireframing</h3>
      <p>The wireframes essentially documented various untested concepts and the results of the collaborative design sessions. I personally created the majority of the wireframes and documentation then later directed other experience designers.</p>
      <visual-example image="castl/wireframe.jpg">One of hundreds of wireframes produced</visual-example>

      <h3>Prototyping</h3>
      <p>I used interactive Axure prototypes to validate user flow assumptions and riskier experience areas. Not every part of the product was prototyped, only specific parts that needed validation. I led and directed other experience designers to create these prototypes.</p>

      <h3>Validation</h3>
      <p>Frequent validation with the users and business stakeholders was the key method for reducing risk. At least once a week I would conduct some form of validation. Wireframes, the less risky solutions, were simply presented for feedback. While more in-depth user tests were conducted using the interactive prototypes.</p>
      <visual-example image="castl/user-test.png">A screencap from a recorded user test</visual-example>
    </content>
  </section>

  <section class="page-break-before">
    <h2 title>Outcome</h2>
    <content>
      <p>The product launched on-time in late 2015. It acheived all the goals set for it. The users and stakeholders have called the product a huge-success.</p>

      <blockquote>
        <p>One of the most exciting days, I think, at Disney</p>
        <footer>CASTL User</footer>
      </blockquote>

      <p>CASTL is a multi-sided enterprise application available on mobile, tablet and desktop. It gives users the power to work without an internet connection. It focuses users so there are as few unneccessary distractions making for an effective and elegant experience. Security is also now back-of-mind, even if a document is accidentally shared it will remain secure and confidential.</p>

      <p>CASTL successfully:</p>

      <ul>
        <li>Increased confidentiality and security</li>
        <li>Broadened user base</li>
        <li>Decreased management and coordination workload</li>
        <li>Increased user satisfaction and efficiency</li>
      </ul>
    </content>
  </section>
  `
})
export class CastlComponent implements OnInit {
  constructor(private titleService:Title){}

  ngOnInit(){
    this.titleService.setTitle('CASTL from Jason Bejot\'s Portfolio');
  }
}
