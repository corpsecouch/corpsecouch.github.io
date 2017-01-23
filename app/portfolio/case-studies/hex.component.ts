import { Component, OnInit }  from '@angular/core';
import { Title }              from '@angular/platform-browser';

@Component({
  styleUrls: [
    'styles/interior.css',
    'app/portfolio/portfolio.styles.css'
  ],
  template: `
  <header imageUrl="assets/portfolio/hex/masthead.jpg">
    <h1 title>Hex</h1>
    <p subtitle>The design language for Disney Studio's enterprise applications.</p>
  </header>

  <section>
    <h2 title>The Challenge</h2>
    <content>
      <p>The business of Disney Studios depends on custom internal enterprise applications. These applications should look and behave consistently as if they were originally created as a part of the same suite. With hundreds of these mission critical applications created by various people across many years consistency is nonexistent. Efficency and effectiveness from both business operations and product development both suffer becauce of this situation.</p>
      <p>The UX team needs a shared design language to make the suite of enterprise applications consistent and show measurable improvements with users, business operations and product development.</p>

      <h3>Accessible</h3>
      <p>Products created using Hex should comply with accessibility standards with as little effort by designers and engineers as possible. </p>

      <h3>Measurable</h3>
      <p>To validate design effectiveness and ROI we need to automatically track usage and adoption of the design language throughout the company.</p>

      <h3 class="page-break-before">Mutable</h3>
      <p>Most enterprise applications are never updated after they launch. Our design language needs to constantly change to stay relevant and effective.</p>

      <h3>Extensible</h3>
      <p>The design language is being used to create custom and complex business applications. It shouldn't limit what a designer or developer can do with it.</p>
    </content>
  </section>

  <section>
    <h2 title>My Role</h2>
    <content>
      <p>I am founded Hex and personally created the first version. As it has subsequently gone into high versions and grown with a dedicated product team that I guide.</p>
      <p>I wore many hats during the course of the product. The notable roles I covered are:</p>
      <ul>
        <li>Founder</li>
        <li>Stakeholder</li>
        <li>Product Owner</li>
        <li>Experience &amp; Art Director</li>
        <li>Manager</li>
        <li>Researcher</li>
        <li>Experience Strategist</li>
        <li>Experience Designer</li>
        <li>Developer</li>
      </ul>

      <h3>Experience Strategy &amp; Vision</h3>
      <p>I created the product strategy necessary to accomplish the product goals, create the best user experience and create business value.</p>

      <h3 class="page-break-before">Ideation &amp; Concepting</h3>
      <p>Through divergent ideation activities I created mulitple concepts as well as blue sky design &amp; product solutions.</p>

      <h3>Planning &amp; Scope Definition</h3>
      <p>I <em>managed up</em> to define the design language with the product manager and other stakeholders.</p>

      <h3>Testing &amp; Validation</h3>
      <p>I tested and validated assumptions, solutions and interactions at all levels and product phases for all users to reduce risk.</p>

      <h3>Direction &amp; Coordination</h3>
      <p>I <em>managed across</em> multiple visual and experience designers, engineers and copywriters acheive my vision.</p>

      <h3>Design Execution</h3>
      <p>I created user journeys, user flows, wireframes, prototypes and design specs.</p>

      <h3>Leadership</h3>
      <p>I drove the product and it's processes. I presented to stakeholders and executives to gain buy-in and support along the entire product lifecycle.</p>
    </content>
  </section>

  <section>
    <h2 title>Strategy</h2>
    <p>This was a disruptive idea for Studio Technology. It needed a strategy that we, the team, could learn from and evolve as the product evolves.</p>

    <content>
      <h3>Guidelines &amp; Patterns</h3>
      <p>Every enterprise application is a custom solution for a unique set of problems. By providing a comprehensive set of guidelines, best practices and specifications on common patterns and situations Hex would become the reference material for product teams and drive consistency.</p>

      <h3>Resource Library</h3>
      <p>Code libraries for engineers and symbol libraries for designers would increase the speed of creation, decrease the amount of reinventing the same widget and, of course, increase the consistency across enterprise applications.</p>

      <h3>Open Source</h3>
      <p>Opening up the guidelines and the resource library as internal open source repositories allows the language to evolve and grow. By leveraging the thousands of experts across the enterprise who will use the language it can always be cutting edge and keep the Hex product team small and focused.</p>

      <h3>Evangelism</h3>
      <p>Product teams are free to choose how they create products. With no internal guidelines or shared design library I would need to "get the word out" and gain adoption from across the company.</p>
    </content>
  </section>

  <section>
    <h2 title>Research</h2>
    <p>I couldn't start completely from scratch. Formal research would have taken too long and similar things existed in the consumer market. The research needed to learn as much as it could from existing solutions to keep things moving quickly and not reinvent the wheel.</p>

    <content>
      <h3>The Users</h3>
      <p>By interviewing many people throughout the company I found that everyone in a product team would be a Hex user. Designers use it for guidelines, best practices and patterns. Engineers use it for resource library and code samples. Product owners use it as reference.</p>

      <h3>Competitive Analysis</h3>
      <p>To gain adoption Hex would need to directly compete with the high-quality and mature consumer design languages like Material Design, Bootstrap and Foundation. I conducted extensive competitve research to identify what gaps Hex could fill. This eventually influenced the product feature list, service architecture and best practices.</p>
      <visual-example image="hex/competitive-analysis.png">Competitive analysis matrix</visual-example>

      <h3>Technology</h3>
      <p>Working closely with the larger engineering team we identifed the technology needed to create the resource libraries and code samples that would provide product teams the best solution and evolve over time.</p>
    </content>
  </section>

  <section>
    <h2 title>Execution</h2>
    <content>
      <p>There wasn't a design language that any product team was using, and there were a lot of product teams. In building the product I needed to create something usable and valuale quickly then use it as a base for iteration and enhancement.</p>

      <h3>Minimum Viable Product</h3>
      <p>I knew that the first version of a design language wasn't going to be perfect. I needed a version one, something I could cut my teeth on and evolve. I quickly built a set of guidelines, resource library and code library. Rather than reinventing design guidelines I leveraged the best bits from other, publicly available guidelines like Material Design and Foundation.</p>
      <visual-example image="hex/feature-planning.png">MVP feature planning</visual-example>

      <h3>Guidelines &amp; Patterns</h3>
      <p>The main driver of Hex is it's guidelines. I created the initial set of guidelines, patterns, best practices and specifications. Then created a website where they are available to anyone in the company.</p>
      <visual-example image="hex/guidelines.png">Example of the design guidelines</visual-example>

      <h3>Resource Library</h3>
      <p>The resource library provides ready-to-use resources for designers and engineers alike. I created the inital versions of both sets of resources.</p>
      <visual-example image="hex/resource-library.png">Example of the resource library</visual-example>

      <h3>Product Growth</h3>
      <p>No one knew about Hex and it needed adoption in order to be successful. Product teams needed to start using it and people needed to start contribute back into it. I planned and executed on how to gain adoption and drive product growth over time.</p>
      <visual-example image="hex/product-growth.jpg">Whiteboard of product growth planning</visual-example>

      <h3 class="page-break-before">Community Involvement</h3>
      <p>I managed the community of engineers and designers from across the company that were contributing the Hex so that it can grow and evolve without a large dedicated team.</p>
      <visual-example image="hex/pull-requests.png">Screenshot of GitHub pull requests</visual-example>

      <h3>Version Two</h3>
      <p>After releasing the version one and gaining wide enterprise adoption I moved to become the products' stakeholder. With me as a guide, a new team was assigned to build and release a second version based on technology advancements and learnings from the first version.</p>
      <visual-example image="hex/version-two.png">Version two screenshot</visual-example>
    </content>
  </section>

  <section>
    <h2 title>Outcome</h2>
    <content>
      <p>Hex has been a huge success. Every product team has adopted it and every single new product is created using it. It continues to evolve with designers and engineers alike contributing updates and new features.</p>

      <p>With teams outside of Disney Studios using Hex, it has also gained recognition and adoption across the segments of Disney. It has even gained high internal recognition as Best of Disney 2014.</p>

      <p>Hex has successfully:</p>
      <ul>
        <li>Increased speed of design</li>
        <li>Increased speed of development</li>
        <li>Increased cross-application consistency</li>
        <li>Increased user satisfaction</li>
      </ul>
    </content>
  </section>
  `
})
export class HexComponent implements OnInit {
  constructor(private titleService:Title){}

  ngOnInit(){
    this.titleService.setTitle('Hex from Jason Bejot\'s Portfolio');
  }
}
