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
var HomepageComponent = (function () {
    function HomepageComponent(titleService) {
        this.titleService = titleService;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Jason Bejot');
    };
    HomepageComponent = __decorate([
        core_1.Component({
            styleUrls: [
                'styles/layout.css',
                'app/resume/components/section.styles.css',
                'app/homepage/homepage.styles.css'
            ],
            template: "\n  <div class=\"flex row section\" id=\"name\">\n    <div class=\"content\">Hey, my name is Jason and I'm an experience architect &amp; computer scientist.</div>\n  </div>\n\n  <div class=\"flex row section\" id=\"live\">\n    <div class=\"content\">I live in Los Angeles where I'm the lead user experience architect for <a href=\"http://www.disney.com/\" target=\"_blank\"> Walt Disney Studios</a>.</div>\n  </div>\n\n  <div class=\"flex row section\" id=\"social\">\n    <div class=\"content\">\n      <ul class=\"flex row\">\n        <li><a href=\"https://twitter.com/jasonbejot\" target=\"_blank\"><img src=\"assets/icon_twitter.svg\" alt=\"twitter\" title=\"twitter\"></a></li>\n        <li><a href=\"https://www.instagram.com/jasonbejot/\" target=\"_blank\"><img src=\"assets/icon_instagram.svg\" alt=\"instagram\" title=\"instagram\"></a></li>\n        <li><a href=\"https://medium.com/@jasonbejot\" target=\"_blank\"><img src=\"assets/icon_medium.svg\" alt=\"medium\" title=\"medium\"></a></li>\n        <li><a href=\"https://www.linkedin.com/in/jasonbejot\" target=\"_blank\"><img src=\"assets/icon_linkedin.svg\" alt=\"linkedin\" title=\"linkedin\"></a></li>\n        <li><a href=\"https://github.com/corpsecouch/\" target=\"_blank\"><img src=\"assets/icon_github.svg\" alt=\"github\" title=\"github\"></a></li>\n        <li><a href=\"https://www.goodreads.com/user/show/37984300-jason\" target=\"_blank\"><img src=\"assets/icon_goodreads.svg\" alt=\"goodreads\" title=\"goodreads\"></a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"flex row section\" id=\"memberships\">\n    <div class=\"content\">\n      I'm a member of <a href=\"http://planetary.org/\">The Planetary Society</a> to help us squishy humans become citizens of space.\n      <a href=\"http://planetary.org/\"><img src=\"assets/logo-planetary.png\" alt=\"The Planetary Society\" title=\"The Planetary Society\"></a>\n    </div>\n  </div>\n\n  <div class=\"flex row section\" id=\"writing\">\n    <div class=\"content\">\n      Sometimes I'll write about tech, nerdery and other random stuff on <a href=\"https://medium.com/@jasonbejot\" target=\"_blank\">Medium</a>\n      <medium postsToDisplay=\"3\"></medium>\n    </div>\n  </div>\n\n  <div class=\"flex row section\" id=\"books\">\n    <div class=\"flex column content\">\n      I'm currently reading\n      <goodreads-current></goodreads-current>\n    </div>\n\n    <div class=\"read flex row\">\n      <goodreads-read></goodreads-read>\n    </div>\n  </div>\n\n  <div class=\"flex row section\" id=\"passion\">\n    <div class=\"content\">\n      The future is my passion and I love dreaming of innovative tech. I'm a Disney Inventor with multiple patents pending in Virtual Reality and Augmented/Mixed Reality.\n    </div>\n  </div>\n\n  <div class=\"flex row section\" id=\"band\">\n    <div class=\"photo\"></div>\n    <div class=\"content\">\n      <div>Every so often I'll play guitar. With my last band I released two albums</div>\n      <iframe style=\"border: 0; width: 100%; height: 120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/album=2144392919/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/\" seamless><a href=\"http://store.theanswerteam.net/album/o-sad-and-future-human\">O Sad and Future Human by The Answer Team</a></iframe>\n      <iframe style=\"border: 0; width: 100%; height: 120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/album=2914502789/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/\" seamless><a href=\"http://store.theanswerteam.net/album/dead-letter-office\">Dead Letter Office by The Answer Team</a></iframe>\n    </div>\n  </div>\n\n  <div class=\"flex row section\" id=\"copywrite\">\n    <div class=\"content\">\n      &copy; Jason Bejot\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title])
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;
//# sourceMappingURL=homepage.component.js.map