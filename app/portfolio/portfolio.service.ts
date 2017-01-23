import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CaseStudy }           from '../data/case-study';

@Injectable()

export class PortfolioService {

  private server:string = 'https://api-skullnbones.rhcloud.com/';
  private listEndpoint:string ='portfolio/list';

  constructor(private http:Http){
    console.log('PortfolioService::constructor');
  }

// mock method
  public getList(){
    return [
      <CaseStudy>{
        slug: 'viewmaster',
        title: 'Viewmaster',
        description:
        `
        <p>A holistic VR showcase experience across multiple VR platforms.</p>
        <ul>
          <li>Experience Designer</li>
          <li>Art Director</li>
          <li>Strategist</li>
          <li>Manager</li>
        </ul>
        `
      },

      <CaseStudy>{
        slug: 'hex',
        title: 'Hex',
        description:
        `
        <p>The design language for Disney Studio's enterprise applications.</p>
        `
      },

      <CaseStudy>{
        slug: 'castl',
        title: 'CASTL',
        description:
        `
        <p>The gatekeeper for all stories that Disney turns into films, CASTL manages the pre-greenlight process of script and story development.</p>
        <ul>
          <li>Experience Designer</li>
          <li>Product Owner</li>
          <li>Art Director</li>
          <li>Strategist</li>
          <li>Manager</li>
        </ul>
        `
      },

      <CaseStudy>{
        slug: 'dnote',
        title: 'DNOTE',
        description:
        `
        <p>Disney Music Group's master system for the management of Artist &amp; Repertoire data.</p>
        `
      },

      <CaseStudy>{
        slug: 'sparta',
        title: 'SPARTA',
        description:
        `
        <p>woot</p>
        `
      },
    ];
  }

  public getCaseStudy(slug:string){
    let rval:any;

    switch(slug){
      case 'viewmaster':
        rval =
        {
          heading: {
            title: 'Viewmaster',
            subtitle: 'I designed a holistic VR showcase experience across multiple VR platforms for studio executives and filmmakers.'
          },
          sections: [
            {
              title: 'Challenge',
              content:
              `
              <p>Our three person team had two months to create two VR experiences for studio executives and tentpole filmmakers. We had a hard deadline with the release date of Big Hero 6. Consumer-grade virtual reality hardware was still two years away from hitting the shelves. We were using prototype Oculus Rift 1.5 HD's, 1st generation Magic Leaps, Google Cardboard and beta SDKs.</p>
              <p>I lead the experience design and creative direction.</p>
              `
            },
            {
              title: 'Research',
              content:
              `
              <p>We had one shot at this. With the compressed timeline we needed to do it right the first time. Thourough research would be critical to the project's success.</p>

              <h3>Whitepapers</h3>
              <p>At the time most VR research was conducted by academics through university labs. Neither VR communities nor best practices existed or were publicly available. So, I went in search of whitepapers.</p>
              <ul class="flex row images">
                <li><img src="assets/research 1.png"></li>
                <li><img src="assets/slide17.png"></li>
                <li><img src="assets/slide18.png"></li>
              </ul>

              <h3>Gestures &amp; interaction</h3>
              <p>The public hadn't been exposed to interacting in VR. It's similar to the introduction of the mouse, no one knew how to use it. For this project to be successful I needed to develop natural interactions and they had to be simple enough to be recognized by the hardware.</p>
              <div class="flex row media">
                <ul class="flex row images">
                  <li><img src="assets/Photo Sep 16, 3 10 13 PM.jpg"></li>
                  <li><img src="assets/Photo Sep 17, 6 32 31 PM.jpg"></li>
                  <li><img src="assets/Photo Sep 19, 5 01 04 PM.jpg"></li>
                  <li><img src="assets/Photo Sep 19, 5 02 41 PM.jpg"></li>
                  <li><img src="assets/Photo Sep 19, 5 02 57 PM.jpg"></li>
                </ul>
                <video controls>
                  <source src="assets/Flip_Motion.mp4" type="video/mp4">
                </video>
              </div>

              <h3>Prototype</h3>
              <p>One of the project goals was to have interactions in VR done with naked hands. Oculus doesn't have any support like that. So I needed a way to attach a Magic Leap to my Oculus Rift witht he intention of 3D printing the final solution.</p>
              <p>The project manager sourced prototype Google Cardboards directly from Google. This was about a month before Google had publicly released them.</p>
              <ul class="flex row images">
                <li><img src="assets/Photo Oct 10, 3 44 54 PM.jpg"></li>
                <li><img src="assets/2014-09-12 17.16.02.jpg"></li>
                <li><img src="assets/2014-09-12 16.52.10.jpg"></li>
              </ul>
              `
            },
            {
              title: 'Experience Design',
              content:
              `
              <p>The VR experience needed to be immersive and easy to use. I couldn't have the audience have a sour experience because it was difficult to use.</p>

              <h3>User Flow</h3>
              <p>I went through multiple rounds of storyboarding and user flow exercises.</p>
              <ul class="flex row images">
                <li><img src="assets/concept 1.png"></li>
                <li><img src="assets/direction 4.png"></li>
              </ul>

              <h3>Navigation &amp; Interaction</h3>
              <p>Navigation between the showcase of VR experiences needed to be seamless and perhaps augment the experience. The in-experience controls also need to be easy to use and not get in the way of the real experience. I went through many rounds of ideation, concepting and wireframing.</p>
              <ul class="flex row images">
                <li><img src="assets/concept 3.png"></li>
                <li><img src="assets/concept 2.png"></li>
              </ul>
              `
            },
            {
              title: 'Creative Direction',
              content:
              `
              <p>I provided direction on VR experience and all the creative surrounding the experience. I worked with an off-site visual designer and the two on-site engineers to bring this to life.</p>

              <h3>Virtual Reality</h3>
              <p>This was a challenging part of the project. There were two separate but similar VR experiences, one for Oculus and one for Google Cardboard. Directing both was a challenge because of the difference in hardware capabilities and methods of interaction. On top of that there was no guidance or precedent on how to direct VR experiences.</p>
              <ul class="flex row images">
                <li><img src="assets/Photo Nov 21, 3 37 39 PM.png"></li>
                <li><img src="assets/Viewmaster Icons-FINAL-07.png"></li>
                <li><img src="assets/Photo Nov 21, 3 37 57 PM.png"></li>
                <li><img src="assets/Photo Nov 21, 3 37 17 PM.png"></li>
              </ul>

              <h3>Physical design</h3>
              <p>Part of the holistic experience is the packaging of the Google Cardboard. I directed the visual designer to create a custom printed sticker that would wrap the entire Google Cardboard as well as an insert that provided download instructions.</p>
              <ul class="flex row images">
                <li><img src="assets/Capture.PNG"></li>
                <li><img src="assets/VM_Opt_Hiro.jpg"></li>
              </ul>

              <h3>Website</h3>
              <p>For the Google Cardboard VR experience people would need to download an app. To keep the entire experience together I built a website and directed the visual designer on it's design.</p>
              <ul class="flex row images">
                <li><img src="assets/ViewMaster Landing Page-Hiro2_1.jpg"></li>
                <li><img src="assets/ViewMaster Landing Page-Hiro2_2.jpg"></li>
                <li><img src="assets/ViewMaster Landing Page-Hiro2_3.jpg"></li>
              </ul>
              `
            },
            {
              title: 'Testing',
              content:
              `
              <p>This entire project was predicated on assumptions. I needed to validate them and all my research. With every build the engineers delievered I conducted hallway tests. I sat in a building with 300 coworkers so participants were easy to come by.</p>
              `
            },
            {
              title: 'Outcome',
              content:
              `
              <p>Before the deadline I had finished all design and direction. I had even facilitated the printing, assembly and delivery of 100 Google Cardboards with custom, full-wrap stickers and instructional inserts.</p>
              <p>As a team we delivered a very successful holistic VR experience across two beta VR platforms with prototype hardware. One for the Oculus Rift and one for Google Cardboard.</p>
              <p>The experience was innovative enough that I filed a VR patent based on my menu and navigation work.</p>
              `
            }
          ]
        }
        break;

        case 'hex':
          rval =
          {
            heading: {
              title: 'Hex',
              subtitle: 'The design language for Disney Studio\'s enterprise applications.'
            },
            sections: [
              {
                title: 'My Role',
                content:
                `
                <p>I founded Disney's enterprise application design language and built the first version. As it's gone into subsequent versions I guide it as a stakeholder.</p>

                <h3>Ideation &amp; Concepting</h3>
                <p>Through divergent ideation activities I created mulitple concepts and high-level design &amp; product solutions.</p>

                <h3>Planning &amp; Scope Definition</h3>
                <p>I <em>managed up</em> to define the design language with the product manager and other stakeholders.</p>

                <h3>Testing &amp; Validation</h3>
                <p>I tested and validated assumptions, solutions and interactions at all levels and product phases for all users to reduce risk.</p>

                <h3>Direction &amp; Coordination</h3>
                <p>I <em>managed across</em> multiple visual and experience designers execute the large product scope.</p>

                <h3>Design Execution</h3>
                <p>I created user journeys, user flows, wireframes, prototypes and design specs.</p>

                <h3>Leadership</h3>
                <p>I drove the product and design processes.</p>
                `
              },
              {
                title: 'The Challenge',
                content:
                `
                <p>There are hundreds of custom internal enterprise applications within Disney Studios. Each application needs to be part of a cohesive suite of all enterprise applications. Our small UX team supports all of these applications and needs to create consistency within and across all these applications.</p>

                <!-- goals -->

                <h3>Accessible</h3>
                <p>Solutions created with this design language should have as much accessibility baked in as possible.</p>

                <h3>Measurable</h3>
                <p>To validate design effectiveness and ROI we need to automatically track usage and adoption of the design language throughout the company.</p>

                <h3>Evolving</h3>
                <p>Most enterprise applications are never updated after they launch. Our design language needs to constantly change to stay relevant and effective.</p>

                <h3>Extensible</h3>
                <p>The design language is being used to create custom and complex business applications. It shouldn't limit what a designer or developer can do with it.</p>
                `
              },
              {
                title: 'The Approach',
                content:
                `
                <h3>Design Guidelines</h3>
                <p>A published set of guidelines is the core of Hex and the main driver of consistency. Every enterprise application is a custom solution for a unique set of problems. Hex could only be successful if it didn't limit designers and was flexible enough to be used in every situation.</p>

                <h3>Resource Library</h3>
                <p>Code libraries for engineers and symbol libraries for designers would increase the speed of creation, decrease the amount of reinventing the same widget and, of course, increase the consistency across enterprise applications.</p>

                <h3>Open Source</h3>
                <p>Opening up the guidelines and the resource library as internal open source repositories allows the language to evolve and grow. By leveraging the thousands of experts across the enterprise who will use the language it can always be cutting edge and keep the Hex product team small and focused.</p>
                `
              },
              {
                title: 'The Process',
                content:
                `
                <p>I was starting from scratch. There wasn't a design language that any product team was using, and there were a lot of product teams.</p>

                <h3>Minimum Viable Product</h3>
                <p>I knew that the first version of a design language wasn't going to be perfect. I needed a version one, something I could cut my teeth on and evolve. I quickly built a set of guidelines, resource library and code library. Rather than reinventing design guidelines I leveraged the best bits from other, publicly available guidelines like Material Design and Foundation.</p>

                <h3>Evangelism</h3>
                <p>No one knew about Hex and it needed adoption in order to be successful. Product teams needed to start using it and people needed to start contribute back into it. I went on a roadshow; presenting, talking and consulting with various teams and executives across the enterprise.</p>

                <h3>Version Two</h3>
                <p>After releasing the version one and gaining wide enterprise adoption I moved to become the products' stakeholder. With me as a guide, a new team was assigned to build and release a second version based on technology advancements and learnings from the first version.</p>
                `
              },
              {
                title: 'The Outcome',
                content:
                `
                <p>A version 2.0 was released under my guidance as a stakeholder. It has gathered wide adoption within multiple segments across Disney. It continues to gain adoption and evolve.</p>
                <ul>
                  <li>Increased speed of design</li>
                  <li>Increased speed of development</li>
                  <li>Increased cross-application consistency</li>
                  <li>Increased user satisfaction</li>
                  <li>Awarded Best of Disney in 2014</li>
                </ul>
                `
              }
            ]
          }
          break;

      case 'castl':
        rval =
        {
          heading: {
            title: 'CASTL',
            subtitle: 'The gatekeeper for all stories that Disney turns into films, CASTL manages the pre-greenlight process of script and story development.'
          },
          sections: [
            {
              title: 'My Role',
              content:
              `
              <p>I led the redesign of CASTL, an enterprise level product that spans desktop, tablet and mobile with multiple focused experiences.</p>

              <h3>Experience Strategy &amp; Vision</h3>
              <p>I created the product strategy necessary to accomplish the product goals, create the best user experience and create business value.</p>

              <h3>Ideation &amp; Concepting</h3>
              <p>Through divergent ideation activities I created mulitple concepts and high-level design solutions.</p>

              <h3>Planning &amp; Scope Definition</h3>
              <p>I <em>managed up</em> to drive the product in collaboration with the product managers and stakeholders by representing and evangelizing for the users.</p>

              <h3>Testing &amp; Validation</h3>
              <p>I tested and validated assumptions, solutions and interactions at all levels and product phases for all users to reduce risk.</p>

              <h3>Direction &amp; Coordination</h3>
              <p>I <em>managed across</em> multiple visual and experience designers execute the large product scope.</p>

              <h3>Design Execution</h3>
              <p>I created user journeys, user flows, wireframes, prototypes, a design system and design specs.</p>

              <h3>Leadership</h3>
              <p>I drove the design process within the product team. I presented to stakeholders and executives to gain buy-in and support along the entire product lifecycle.</p>
              `
            },
            {
              title: 'The Challenge',
              content:
              `
              <p>A ground-up redesign of the entire creative affairs system. The system had become severly outdated, difficult to use, fragile, inefficient and insecure. Users on all sides of the system didn't like using it and preferred using work-arounds.</p>
              <p>The redesign needed to support the critical business process by being secure, efficient, available offline and support everyone involved with the process.</p>
              `
            },
            {
              title: 'The Approach',
              content:
              `
              <h3>Secure</h3>
              <p>Disney Studios has a long, rich history of high-quality story telling. The Studios is the wellspring for nearly all characters and stories used and franchised across the rest of the Disney segments. This is a mission critical system to all of Disney. We needed to design for the highest level of security and confidentiality.</p>

              <h3>Efficient</h3>
              <p>The solution needs to support every aspect of the creative affairs business process which handles a large volume of creative work. Everything from script rewrites, writing samples, story treatments, coverages, etc. Each piece of work is time sensitive so that creative and executive decisions can be made.</p>

              <h3>Available</h3>
              <p>All types of users work from remote, far-flung production locations so internet connectivity is a issue. The system needed to be able to be used without a reliable internet connection without losing work and still being secure and efficient.</p>

              <h3>Desirable</h3>
              <p>Everyone connected with the business process should want to use the system. From the highest level executives to the analysts, the system needs to be a place where people want to do their work.</p>
              `
            },
            {
              title: 'The Process',
              content:
              `
              <p>The scope was big and the project team was small. With a hard launch date we needed to work feature-by-feature, there would be little time to iterate.</p>
              <p>Solutions that I delivered needed to be right the first time. This meant that I needed to work with the product team as efficiently as possible while simultaneously reducing prodct risk.</p>

              <h3>Collaboration</h3>
              <p>Design handoffs, reviews and documentation are all the enemy of efficiency. Those practices went out the window in favor of a collaborative design method.</p>
              <p>Features were created, discussed and defined through a series of focused collaborative design sessions. Everyone was involved. Engineers, business users, stakeholders, quality assurance... everyone. I facilited every session and together we defined each features journey and high-level functionality.</p>

              <h3>Execution</h3>
              <p>The results of each collaborative session would turn into either a wireframe or a functional prototype. This would depend on the level of risk of each solution. The riskier the solution the more testing it would need.</p>

              <h3>Validation</h3>
              <p>Frequent validation with the users and business stakeholders was the key method for reducing risk. At least once a week I would conduct some form of validation. Wireframes, the less risky solutions, were simply presented for feedback. While user tests would be conducted on prototypes.</p>
              `
            },
            {
              title: 'The Outcome',
              content:
              `
              <p>The product launched version 1.0 in late 2015 to a resounding success. Providing a multi-experience platform allows users to focus their work and hit every goal that the product set out to achieve. The checkered flag of success was when the old systems were finally retired.</p>
              <ul>
                <li>Increased confidentiality and security</li>
                <li>Broadened user base</li>
                <li>Decreased management and coordination workload</li>
                <li>Increased user satisfaction and efficiency</li>
              </ul>
              `
            },
          ]
        }
        break;

      default:
        rval = 'woot';
        break;
    }

    return new Promise((resolve, reject) => resolve(rval));
  }

  /*public getCaseStudies():Observable<CaseStudy[]> {
    console.log('PortfolioService::getCaseStudies');
    return this.http
      .get(this.server)
      .map(this.extractData)
      .catch(this.handleError);
  }*/

  private extractData(res:Response):CaseStudy[] {
    let data = res.json();
    return data.data as CaseStudy[];
  }

  private handleError(err:Response | any):Observable<any> {
    console.error('PortfolioService::handleError');
    console.error(err);
    return Observable.throw(err.message);
  }
}
