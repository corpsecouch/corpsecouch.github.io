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
var ARConceptComponent = (function () {
    function ARConceptComponent(titleService) {
        this.titleService = titleService;
    }
    ARConceptComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('AR Concept - Jason Bejot\'s Portfolio');
    };
    ARConceptComponent = __decorate([
        core_1.Component({
            styleUrls: [
                'styles/interior.css',
                'app/portfolio/portfolio.styles.css'
            ],
            template: "\n  <header>\n    <h1 title>AR Concept</h1>\n    <p subtitle>A glimpse into the future of theatrical storytelling.</p>\n  </header>\n\n  <section>\n    <h2 title>The Challenge</h2>\n    <content>\n      <p>Imagine theatrical storytelling outside of the theater setting. What does the future of best-in-class storytelling look like?</p>\n      <p>This was the challenge I posed to myself.</p>\n      <h3>Blue Sky</h3>\n      <p>This concept shouldn't hinge on current-state limitations. I wanted to imagine a possible future without worring about technological, market, process, societal or anything else that could restrict it before it ever sees the light of day.</p>\n      <h3>Funding</h3>\n      <p>Seeing this potential future come to life is the ultimate goal. This concept should be something I could pitch and eventually get funding for.</p>\n    </content>\n  </section>\n\n  <section>\n    <h2 title>Strategy</h2>\n    <content>\n      <p>This was a purely creative challenge but I wanted to come away with something that could conceivably be built today and yet still seem like someone stole a time machine.</p>\n      <h3>Convergence</h3>\n      <p>I needed too look at and understand various technology and non-technology factors that are or could converge.</p>\n      <h3>Business Viability</h3>\n      <p>In order to eventually get fundind I need to keep business viability in mind as the concept matures.</p>\n      <h3>Mindful Futurism</h3>\n      <p>So often people imagine a dark future especially when towards technologys impact on society. I need to approach this concept that provides an optimistic look at the future and could influence society in a positive way.</p>\n    </content>\n  </section>\n\n  <section>\n    <h2 title>Execution</h2>\n    <content>\n      <h3>Ideation</h3>\n      <p>Being purely divergent, generating concepts and documenting the wildest ideas. It's one of the funnest parts of the process. I built up a stockpile of ideas; great, mediocre, and lots of crappy ones. I documented them using any means necessary to capture the idea. Sometimes it was a series of sketches, a sentence or two in a notebook, or a collection of reference URLs with a feature list in Evernote.</p>\n      <visual-example image=\"ar-concept/ideation.jpg\">One of many ideation sketchs</visual-example>\n\n      <h3>Foresight/Futursim</h3>\n      <p>I needed to whittle down the mountain of ideas if I was going to accomplish the goals of my challenge. So I ran through a series scenarios using futurism techniques and analyzed general trends to decide on an appropriate direction.</p>\n\n      <h3>Storyboarding</h3>\n      <p>Communicating an experience is challenging, especially one full of nuances and possibilities. I could have written a novella explaining it all. Instead I storyboarded the major portions of the experience. They provide the most effective means of communicating the concept. The storyboards conveyed the various stories of the experience and simultaneously showcased its major features.</p>\n      <visual-example image=\"ar-concept/storyboard.png\">A glimpse at some of the storyboards</visual-example>\n    </content>\n  </section>\n\n  <section>\n    <h2 title>Outcome</h2>\n    <content>\n      <p>By the end I had a series of documents that visually communicates a new theatrical storytelling experience. It's immersive utilizing augmented reality as the method to convey theatrical-level stories. By combining subconscious user interactions and non-linear storytelling each person has a unique yet consistent experience. Incorporating the spirit of geocaching and simultaneous multi-user input people explore their physical world and share experiences with others.</p>\n      <p>The concept has been receive very well after an initial round of pitching. Based on feedback so far I've iterated on the concept and submitted various patents to help the concept eventually come to life.</p>\n    </content>\n  </section>\n  "
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title])
    ], ARConceptComponent);
    return ARConceptComponent;
}());
exports.ARConceptComponent = ARConceptComponent;
//# sourceMappingURL=ar-concept.component.js.map