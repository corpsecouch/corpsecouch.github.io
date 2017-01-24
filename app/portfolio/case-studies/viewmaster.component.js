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
var platform_browser_1 = require('@angular/platform-browser');
var ViewmasterComponent = (function () {
    function ViewmasterComponent(titleService) {
        this.titleService = titleService;
    }
    ViewmasterComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Viewmaster from Jason Bejot\'s Portfolio');
    };
    ViewmasterComponent = __decorate([
        core_1.Component({
            styleUrls: [
                'styles/interior.css',
                'app/portfolio/portfolio.styles.css'
            ],
            template: "\n  <header imageUrl=\"assets/portfolio/viewmaster/header.png\">\n    <h1 title>Viewmaster</h1>\n    <p subtitle>A multi-platform Virtual Reality experience showcasing the possibilities of this new type of theatrical storytelling.</p>\n  </header>\n\n  <section class=\"page-break-after\">\n    <h2 title>The Challenge</h2>\n    <content>\n      <p>Virtual Reality was still new. Consumer-grade VR hardware hadn't yet been released except for the first version of the Google Cardboard. Film makers and studio executives alike still had no idea how to tell stories or what's possible in VR.</p>\n      <p>Our three person team had two months to create a mulit-platform VR experience to showcase what storytelling possiblities VR provides. We had a hard deadline with the release date of Big Hero 6. Consumer-grade VR hardware was still two years away from hitting the shelves. We were using prototype Oculus Rift 1.5 HD's, 1st generation Magic Leaps, Google Cardboard and beta SDKs.</p>\n    </content>\n  </section>\n\n  <section>\n    <h2 title>My Role</h2>\n    <content>\n      <p>I was the lead experience designer I provided the experience, creative and art direction.</p>\n      <p>I wore a few different hats during the course of the product. The notable roles I covered are:</p>\n      <ul>\n        <li>Experience, Art &amp; Creative Director</li>\n        <li>Manager</li>\n        <li>Researcher</li>\n        <li>Experience Designer</li>\n      </ul>\n\n      <h3>Creative Direction</h3>\n      <p>I provided direction on VR experience and all the creative surrounding the experience. I worked with an off-site visual designer and the two on-site engineers to bring this to life.</p>\n\n      <h3>Ideation &amp; Concepting</h3>\n      <p>I lead ideation activities within the product team and created mulitple concepts and high-level design, product and experience solutions.</p>\n\n      <h3>Planning &amp; Scope Definition</h3>\n      <p>I <em>managed up</em> to define the design language with the product manager and other stakeholders.</p>\n\n      <h3>Testing &amp; Validation</h3>\n      <p>I tested and validated assumptions, solutions and interactions at all levels and product phases for all users to reduce risk.</p>\n\n      <h3>Direction &amp; Coordination</h3>\n      <p>I <em>managed across</em> a visual designer and engineers.</p>\n\n      <h3>Design Execution</h3>\n      <p>I created user journeys, user flows, wireframes, prototypes and design specs.</p>\n\n      <h3>Leadership</h3>\n      <p>I drove the experience design process within the product team. I presented to stakeholders and executives to gain buy-in and support along the entire product lifecycle.</p>\n    </content>\n  </section>\n\n  <section>\n    <h2 title>Strategy</h2>\n    <p>This was the first time the Studios had attempted VR. Because of the audience and technology hype it was a high visibility product. There was a lot riding on its success.</p>\n\n    <content>\n      <h3>Usability</h3>\n      <p>For many this app would be their first exposure to virtual reality. Using and moving through the experience needed to feel like a part of the overall experience. It should augment the time spent in VR and not give any negative impression towards the creative and decision-making audience.</p>\n\n      <h3>Persuasiveness</h3>\n      <p>The content of the showcase needs to highlight the areas of potential in VR to spark ideas from filmmakers. It simultaneously needs to be persuasive enough for executives to get excited and buy-in to the ideas.</p>\n\n      <h3>Research</h3>\n      <p>With all of the pre-release SDKs and hardware as well as people never using VR before there were a mountain of assumptions and unknowns. Research would be critical to this products success.</p>\n    </content>\n  </section>\n\n  <section class=\"page-break-before\">\n    <h2 title>Research</h2>\n    <p>This proved to be one of the few products where the users took a back-seat in priority. It was all about discovering what the technology could do and what academic VR research had already learned.</p>\n\n    <content>\n      <h3>Whitepapers</h3>\n      <p>At the time most VR research was conducted by academics through university labs. Neither VR communities nor best practices existed or were publicly available. So, I went in search of whitepapers.</p>\n      <visual-example image=\"viewmaster/slide18.png\">Excerpt from whitepaper research</visual-example>\n\n      <h3>Gestures &amp; interaction</h3>\n      <p>The public hadn't been exposed to interacting in VR. It's similar to the introduction of the mouse, no one knew how to use it. For this project to be successful I needed to develop natural interactions and they had to be simple enough to be recognized by the hardware.</p>\n      <visual-example image=\"viewmaster/Photo Sep 17, 6 32 31 PM.jpg\">One of many gesture &amp; interaction research whiteboards</visual-example>\n\n      <h3>Prototype</h3>\n      <p>One of the project goals was to have interactions in VR done with naked hands. Oculus doesn't have any support like that. So I needed a way to attach a Magic Leap to my Oculus Rift witht he intention of 3D printing the final solution.</p>\n      <p>The project manager sourced prototype Google Cardboards directly from Google. This was about a month before Google had publicly released them.</p>\n      <visual-example image=\"viewmaster/Photo Oct 10, 3 44 54 PM.jpg\">Initial cardboard prototype of an Oculus Rift with Magic Leap attached</visual-example>\n    </content>\n  </section>\n\n  <section>\n    <h2 title>Execution</h2>\n    <content>\n      <p>The VR experience needed to be immersive and easy to use. I couldn't give the audience a sour experience because it was difficult move around in.</p>\n\n      <h3>User Flow</h3>\n      <p>I went through multiple rounds of storyboarding and user flow exercises.</p>\n      <visual-example image=\"viewmaster/direction 4.png\">Example of experience flow</visual-example>\n\n      <h3>Navigation &amp; Interaction</h3>\n      <p>Navigation between the showcase of VR experiences needed to be seamless and perhaps augment the experience. The in-experience controls also need to be easy to use and not get in the way of the real experience. I went through many rounds of ideation, concepting and wireframing.</p>\n      <visual-example image=\"viewmaster/concept 3.png\">One of many menuing and navigation concepts</visual-example>\n\n      <h3>Virtual Reality</h3>\n      <p>This was a challenging part of the project. There were two separate but similar VR experiences, one for Oculus and one for Google Cardboard. Directing both was a challenge because of the difference in hardware capabilities and methods of interaction. On top of that there was no guidance or precedent on how to direct VR experiences.</p>\n      <visual-example image=\"viewmaster/Photo Nov 21, 3 37 57 PM.png\">Screenshot from within the VR experience</visual-example>\n\n      <h3>Physical design</h3>\n      <p>Part of the holistic experience is the packaging of the Google Cardboard. I directed the visual designer to create a custom printed sticker that would wrap the entire Google Cardboard as well as an insert that provided download instructions.</p>\n      <visual-example image=\"viewmaster/Capture.PNG\">Direction notes for Google Cardboard packaging</visual-example>\n\n      <h3>Website</h3>\n      <p>For the Google Cardboard VR experience people would need to download an app. To keep the entire experience together I built a website and directed the visual designer on it's design.</p>\n      <visual-example image=\"viewmaster/ViewMaster Landing Page-Hiro2_1.jpg\" note=\"\">Screenshot of the app download microsite</visual-example>\n\n      <h3 class=\"page-break-before\">Validation</h3>\n      <p>This entire project was predicated on assumptions. I needed to validate them and all my research. With every build the engineers delievered I conducted hallway tests. I sat in a building with 300 coworkers so participants were easy to come by.</p>\n    </content>\n  </section>\n\n  <section>\n    <h2 title>Outcome</h2>\n    <content>\n      <p>Before the deadline I had finished all design and direction. I had even facilitated the printing, assembly and delivery of 100 Google Cardboards with custom, full-wrap stickers and instructional inserts.</p>\n      <p>As a team we delivered a very successful holistic VR experience across two beta VR platforms with prototype hardware. One for the Oculus Rift and one for Google Cardboard.</p>\n      <p>The experience was innovative enough that I filed a VR patent based on my menu and navigation work.</p>\n    </content>\n  </section>\n  "
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title])
    ], ViewmasterComponent);
    return ViewmasterComponent;
}());
exports.ViewmasterComponent = ViewmasterComponent;
//# sourceMappingURL=viewmaster.component.js.map