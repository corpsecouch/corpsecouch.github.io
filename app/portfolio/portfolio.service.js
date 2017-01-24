"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var PortfolioService = (function () {
    function PortfolioService(http) {
        this.http = http;
        this.server = 'https://api-skullnbones.rhcloud.com/';
        this.listEndpoint = 'portfolio/list';
        console.log('PortfolioService::constructor');
    }
    // mock method
    PortfolioService.prototype.getList = function () {
        return [
            {
                slug: 'viewmaster',
                title: 'Viewmaster',
                description: "\n        <p>A holistic VR showcase experience across multiple VR platforms.</p>\n        <ul>\n          <li>Experience Designer</li>\n          <li>Art Director</li>\n          <li>Strategist</li>\n          <li>Manager</li>\n        </ul>\n        "
            },
            {
                slug: 'hex',
                title: 'Hex',
                description: "\n        <p>The design language for Disney Studio's enterprise applications.</p>\n        "
            },
            {
                slug: 'castl',
                title: 'CASTL',
                description: "\n        <p>The gatekeeper for all stories that Disney turns into films, CASTL manages the pre-greenlight process of script and story development.</p>\n        <ul>\n          <li>Experience Designer</li>\n          <li>Product Owner</li>\n          <li>Art Director</li>\n          <li>Strategist</li>\n          <li>Manager</li>\n        </ul>\n        "
            },
            {
                slug: 'dnote',
                title: 'DNOTE',
                description: "\n        <p>Disney Music Group's master system for the management of Artist &amp; Repertoire data.</p>\n        "
            },
            {
                slug: 'sparta',
                title: 'SPARTA',
                description: "\n        <p>woot</p>\n        "
            },
        ];
    };
    PortfolioService.prototype.getCaseStudy = function (slug) {
        var rval;
        switch (slug) {
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
                                content: "\n              <p>Our three person team had two months to create two VR experiences for studio executives and tentpole filmmakers. We had a hard deadline with the release date of Big Hero 6. Consumer-grade virtual reality hardware was still two years away from hitting the shelves. We were using prototype Oculus Rift 1.5 HD's, 1st generation Magic Leaps, Google Cardboard and beta SDKs.</p>\n              <p>I lead the experience design and creative direction.</p>\n              "
                            },
                            {
                                title: 'Research',
                                content: "\n              <p>We had one shot at this. With the compressed timeline we needed to do it right the first time. Thourough research would be critical to the project's success.</p>\n\n              <h3>Whitepapers</h3>\n              <p>At the time most VR research was conducted by academics through university labs. Neither VR communities nor best practices existed or were publicly available. So, I went in search of whitepapers.</p>\n              <ul class=\"flex row images\">\n                <li><img src=\"assets/research 1.png\"></li>\n                <li><img src=\"assets/slide17.png\"></li>\n                <li><img src=\"assets/slide18.png\"></li>\n              </ul>\n\n              <h3>Gestures &amp; interaction</h3>\n              <p>The public hadn't been exposed to interacting in VR. It's similar to the introduction of the mouse, no one knew how to use it. For this project to be successful I needed to develop natural interactions and they had to be simple enough to be recognized by the hardware.</p>\n              <div class=\"flex row media\">\n                <ul class=\"flex row images\">\n                  <li><img src=\"assets/Photo Sep 16, 3 10 13 PM.jpg\"></li>\n                  <li><img src=\"assets/Photo Sep 17, 6 32 31 PM.jpg\"></li>\n                  <li><img src=\"assets/Photo Sep 19, 5 01 04 PM.jpg\"></li>\n                  <li><img src=\"assets/Photo Sep 19, 5 02 41 PM.jpg\"></li>\n                  <li><img src=\"assets/Photo Sep 19, 5 02 57 PM.jpg\"></li>\n                </ul>\n                <video controls>\n                  <source src=\"assets/Flip_Motion.mp4\" type=\"video/mp4\">\n                </video>\n              </div>\n\n              <h3>Prototype</h3>\n              <p>One of the project goals was to have interactions in VR done with naked hands. Oculus doesn't have any support like that. So I needed a way to attach a Magic Leap to my Oculus Rift witht he intention of 3D printing the final solution.</p>\n              <p>The project manager sourced prototype Google Cardboards directly from Google. This was about a month before Google had publicly released them.</p>\n              <ul class=\"flex row images\">\n                <li><img src=\"assets/Photo Oct 10, 3 44 54 PM.jpg\"></li>\n                <li><img src=\"assets/2014-09-12 17.16.02.jpg\"></li>\n                <li><img src=\"assets/2014-09-12 16.52.10.jpg\"></li>\n              </ul>\n              "
                            },
                            {
                                title: 'Experience Design',
                                content: "\n              <p>The VR experience needed to be immersive and easy to use. I couldn't have the audience have a sour experience because it was difficult to use.</p>\n\n              <h3>User Flow</h3>\n              <p>I went through multiple rounds of storyboarding and user flow exercises.</p>\n              <ul class=\"flex row images\">\n                <li><img src=\"assets/concept 1.png\"></li>\n                <li><img src=\"assets/direction 4.png\"></li>\n              </ul>\n\n              <h3>Navigation &amp; Interaction</h3>\n              <p>Navigation between the showcase of VR experiences needed to be seamless and perhaps augment the experience. The in-experience controls also need to be easy to use and not get in the way of the real experience. I went through many rounds of ideation, concepting and wireframing.</p>\n              <ul class=\"flex row images\">\n                <li><img src=\"assets/concept 3.png\"></li>\n                <li><img src=\"assets/concept 2.png\"></li>\n              </ul>\n              "
                            },
                            {
                                title: 'Creative Direction',
                                content: "\n              <p>I provided direction on VR experience and all the creative surrounding the experience. I worked with an off-site visual designer and the two on-site engineers to bring this to life.</p>\n\n              <h3>Virtual Reality</h3>\n              <p>This was a challenging part of the project. There were two separate but similar VR experiences, one for Oculus and one for Google Cardboard. Directing both was a challenge because of the difference in hardware capabilities and methods of interaction. On top of that there was no guidance or precedent on how to direct VR experiences.</p>\n              <ul class=\"flex row images\">\n                <li><img src=\"assets/Photo Nov 21, 3 37 39 PM.png\"></li>\n                <li><img src=\"assets/Viewmaster Icons-FINAL-07.png\"></li>\n                <li><img src=\"assets/Photo Nov 21, 3 37 57 PM.png\"></li>\n                <li><img src=\"assets/Photo Nov 21, 3 37 17 PM.png\"></li>\n              </ul>\n\n              <h3>Physical design</h3>\n              <p>Part of the holistic experience is the packaging of the Google Cardboard. I directed the visual designer to create a custom printed sticker that would wrap the entire Google Cardboard as well as an insert that provided download instructions.</p>\n              <ul class=\"flex row images\">\n                <li><img src=\"assets/Capture.PNG\"></li>\n                <li><img src=\"assets/VM_Opt_Hiro.jpg\"></li>\n              </ul>\n\n              <h3>Website</h3>\n              <p>For the Google Cardboard VR experience people would need to download an app. To keep the entire experience together I built a website and directed the visual designer on it's design.</p>\n              <ul class=\"flex row images\">\n                <li><img src=\"assets/ViewMaster Landing Page-Hiro2_1.jpg\"></li>\n                <li><img src=\"assets/ViewMaster Landing Page-Hiro2_2.jpg\"></li>\n                <li><img src=\"assets/ViewMaster Landing Page-Hiro2_3.jpg\"></li>\n              </ul>\n              "
                            },
                            {
                                title: 'Testing',
                                content: "\n              <p>This entire project was predicated on assumptions. I needed to validate them and all my research. With every build the engineers delievered I conducted hallway tests. I sat in a building with 300 coworkers so participants were easy to come by.</p>\n              "
                            },
                            {
                                title: 'Outcome',
                                content: "\n              <p>Before the deadline I had finished all design and direction. I had even facilitated the printing, assembly and delivery of 100 Google Cardboards with custom, full-wrap stickers and instructional inserts.</p>\n              <p>As a team we delivered a very successful holistic VR experience across two beta VR platforms with prototype hardware. One for the Oculus Rift and one for Google Cardboard.</p>\n              <p>The experience was innovative enough that I filed a VR patent based on my menu and navigation work.</p>\n              "
                            }
                        ]
                    };
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
                                content: "\n                <p>I founded Disney's enterprise application design language and built the first version. As it's gone into subsequent versions I guide it as a stakeholder.</p>\n\n                <h3>Ideation &amp; Concepting</h3>\n                <p>Through divergent ideation activities I created mulitple concepts and high-level design &amp; product solutions.</p>\n\n                <h3>Planning &amp; Scope Definition</h3>\n                <p>I <em>managed up</em> to define the design language with the product manager and other stakeholders.</p>\n\n                <h3>Testing &amp; Validation</h3>\n                <p>I tested and validated assumptions, solutions and interactions at all levels and product phases for all users to reduce risk.</p>\n\n                <h3>Direction &amp; Coordination</h3>\n                <p>I <em>managed across</em> multiple visual and experience designers execute the large product scope.</p>\n\n                <h3>Design Execution</h3>\n                <p>I created user journeys, user flows, wireframes, prototypes and design specs.</p>\n\n                <h3>Leadership</h3>\n                <p>I drove the product and design processes.</p>\n                "
                            },
                            {
                                title: 'The Challenge',
                                content: "\n                <p>There are hundreds of custom internal enterprise applications within Disney Studios. Each application needs to be part of a cohesive suite of all enterprise applications. Our small UX team supports all of these applications and needs to create consistency within and across all these applications.</p>\n\n                <!-- goals -->\n\n                <h3>Accessible</h3>\n                <p>Solutions created with this design language should have as much accessibility baked in as possible.</p>\n\n                <h3>Measurable</h3>\n                <p>To validate design effectiveness and ROI we need to automatically track usage and adoption of the design language throughout the company.</p>\n\n                <h3>Evolving</h3>\n                <p>Most enterprise applications are never updated after they launch. Our design language needs to constantly change to stay relevant and effective.</p>\n\n                <h3>Extensible</h3>\n                <p>The design language is being used to create custom and complex business applications. It shouldn't limit what a designer or developer can do with it.</p>\n                "
                            },
                            {
                                title: 'The Approach',
                                content: "\n                <h3>Design Guidelines</h3>\n                <p>A published set of guidelines is the core of Hex and the main driver of consistency. Every enterprise application is a custom solution for a unique set of problems. Hex could only be successful if it didn't limit designers and was flexible enough to be used in every situation.</p>\n\n                <h3>Resource Library</h3>\n                <p>Code libraries for engineers and symbol libraries for designers would increase the speed of creation, decrease the amount of reinventing the same widget and, of course, increase the consistency across enterprise applications.</p>\n\n                <h3>Open Source</h3>\n                <p>Opening up the guidelines and the resource library as internal open source repositories allows the language to evolve and grow. By leveraging the thousands of experts across the enterprise who will use the language it can always be cutting edge and keep the Hex product team small and focused.</p>\n                "
                            },
                            {
                                title: 'The Process',
                                content: "\n                <p>I was starting from scratch. There wasn't a design language that any product team was using, and there were a lot of product teams.</p>\n\n                <h3>Minimum Viable Product</h3>\n                <p>I knew that the first version of a design language wasn't going to be perfect. I needed a version one, something I could cut my teeth on and evolve. I quickly built a set of guidelines, resource library and code library. Rather than reinventing design guidelines I leveraged the best bits from other, publicly available guidelines like Material Design and Foundation.</p>\n\n                <h3>Evangelism</h3>\n                <p>No one knew about Hex and it needed adoption in order to be successful. Product teams needed to start using it and people needed to start contribute back into it. I went on a roadshow; presenting, talking and consulting with various teams and executives across the enterprise.</p>\n\n                <h3>Version Two</h3>\n                <p>After releasing the version one and gaining wide enterprise adoption I moved to become the products' stakeholder. With me as a guide, a new team was assigned to build and release a second version based on technology advancements and learnings from the first version.</p>\n                "
                            },
                            {
                                title: 'The Outcome',
                                content: "\n                <p>A version 2.0 was released under my guidance as a stakeholder. It has gathered wide adoption within multiple segments across Disney. It continues to gain adoption and evolve.</p>\n                <ul>\n                  <li>Increased speed of design</li>\n                  <li>Increased speed of development</li>\n                  <li>Increased cross-application consistency</li>\n                  <li>Increased user satisfaction</li>\n                  <li>Awarded Best of Disney in 2014</li>\n                </ul>\n                "
                            }
                        ]
                    };
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
                                content: "\n              <p>I led the redesign of CASTL, an enterprise level product that spans desktop, tablet and mobile with multiple focused experiences.</p>\n\n              <h3>Experience Strategy &amp; Vision</h3>\n              <p>I created the product strategy necessary to accomplish the product goals, create the best user experience and create business value.</p>\n\n              <h3>Ideation &amp; Concepting</h3>\n              <p>Through divergent ideation activities I created mulitple concepts and high-level design solutions.</p>\n\n              <h3>Planning &amp; Scope Definition</h3>\n              <p>I <em>managed up</em> to drive the product in collaboration with the product managers and stakeholders by representing and evangelizing for the users.</p>\n\n              <h3>Testing &amp; Validation</h3>\n              <p>I tested and validated assumptions, solutions and interactions at all levels and product phases for all users to reduce risk.</p>\n\n              <h3>Direction &amp; Coordination</h3>\n              <p>I <em>managed across</em> multiple visual and experience designers execute the large product scope.</p>\n\n              <h3>Design Execution</h3>\n              <p>I created user journeys, user flows, wireframes, prototypes, a design system and design specs.</p>\n\n              <h3>Leadership</h3>\n              <p>I drove the design process within the product team. I presented to stakeholders and executives to gain buy-in and support along the entire product lifecycle.</p>\n              "
                            },
                            {
                                title: 'The Challenge',
                                content: "\n              <p>A ground-up redesign of the entire creative affairs system. The system had become severly outdated, difficult to use, fragile, inefficient and insecure. Users on all sides of the system didn't like using it and preferred using work-arounds.</p>\n              <p>The redesign needed to support the critical business process by being secure, efficient, available offline and support everyone involved with the process.</p>\n              "
                            },
                            {
                                title: 'The Approach',
                                content: "\n              <h3>Secure</h3>\n              <p>Disney Studios has a long, rich history of high-quality story telling. The Studios is the wellspring for nearly all characters and stories used and franchised across the rest of the Disney segments. This is a mission critical system to all of Disney. We needed to design for the highest level of security and confidentiality.</p>\n\n              <h3>Efficient</h3>\n              <p>The solution needs to support every aspect of the creative affairs business process which handles a large volume of creative work. Everything from script rewrites, writing samples, story treatments, coverages, etc. Each piece of work is time sensitive so that creative and executive decisions can be made.</p>\n\n              <h3>Available</h3>\n              <p>All types of users work from remote, far-flung production locations so internet connectivity is a issue. The system needed to be able to be used without a reliable internet connection without losing work and still being secure and efficient.</p>\n\n              <h3>Desirable</h3>\n              <p>Everyone connected with the business process should want to use the system. From the highest level executives to the analysts, the system needs to be a place where people want to do their work.</p>\n              "
                            },
                            {
                                title: 'The Process',
                                content: "\n              <p>The scope was big and the project team was small. With a hard launch date we needed to work feature-by-feature, there would be little time to iterate.</p>\n              <p>Solutions that I delivered needed to be right the first time. This meant that I needed to work with the product team as efficiently as possible while simultaneously reducing prodct risk.</p>\n\n              <h3>Collaboration</h3>\n              <p>Design handoffs, reviews and documentation are all the enemy of efficiency. Those practices went out the window in favor of a collaborative design method.</p>\n              <p>Features were created, discussed and defined through a series of focused collaborative design sessions. Everyone was involved. Engineers, business users, stakeholders, quality assurance... everyone. I facilited every session and together we defined each features journey and high-level functionality.</p>\n\n              <h3>Execution</h3>\n              <p>The results of each collaborative session would turn into either a wireframe or a functional prototype. This would depend on the level of risk of each solution. The riskier the solution the more testing it would need.</p>\n\n              <h3>Validation</h3>\n              <p>Frequent validation with the users and business stakeholders was the key method for reducing risk. At least once a week I would conduct some form of validation. Wireframes, the less risky solutions, were simply presented for feedback. While user tests would be conducted on prototypes.</p>\n              "
                            },
                            {
                                title: 'The Outcome',
                                content: "\n              <p>The product launched version 1.0 in late 2015 to a resounding success. Providing a multi-experience platform allows users to focus their work and hit every goal that the product set out to achieve. The checkered flag of success was when the old systems were finally retired.</p>\n              <ul>\n                <li>Increased confidentiality and security</li>\n                <li>Broadened user base</li>\n                <li>Decreased management and coordination workload</li>\n                <li>Increased user satisfaction and efficiency</li>\n              </ul>\n              "
                            },
                        ]
                    };
                break;
            default:
                rval = 'woot';
                break;
        }
        return new Promise(function (resolve, reject) { return resolve(rval); });
    };
    /*public getCaseStudies():Observable<CaseStudy[]> {
      console.log('PortfolioService::getCaseStudies');
      return this.http
        .get(this.server)
        .map(this.extractData)
        .catch(this.handleError);
    }*/
    PortfolioService.prototype.extractData = function (res) {
        var data = res.json();
        return data.data;
    };
    PortfolioService.prototype.handleError = function (err) {
        console.error('PortfolioService::handleError');
        console.error(err);
        return Observable_1.Observable.throw(err.message);
    };
    PortfolioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PortfolioService);
    return PortfolioService;
}());
exports.PortfolioService = PortfolioService;
//# sourceMappingURL=portfolio.service.js.map