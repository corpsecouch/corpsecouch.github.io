import { Component }  from '@angular/core';
import { Title }      from '@angular/platform-browser';

@Component({
  styleUrls: [
    'styles/layout.css',
    'app/resume/components/section.styles.css',
    'app/homepage/homepage.styles.css'
  ],
  template: `
  <div class="flex row section" id="name">
    <div class="content">Hey, my name is Jason and I'm an experience architect &amp; computer scientist.</div>
  </div>

  <div class="flex row section" id="live">
    <div class="content">I live in Los Angeles where I'm the lead user experience architect for <a href="http://www.disney.com/" target="_blank"> Walt Disney Studios</a>.</div>
  </div>

  <div class="flex row section" id="social">
    <div class="content">
      <ul class="flex row">
        <li><a href="https://twitter.com/jasonbejot" target="_blank"><img src="assets/icon_twitter.svg" alt="twitter" title="twitter"></a></li>
        <li><a href="https://www.instagram.com/jasonbejot/" target="_blank"><img src="assets/icon_instagram.svg" alt="instagram" title="instagram"></a></li>
        <li><a href="https://medium.com/@jasonbejot" target="_blank"><img src="assets/icon_medium.svg" alt="medium" title="medium"></a></li>
        <li><a href="https://www.linkedin.com/in/jasonbejot" target="_blank"><img src="assets/icon_linkedin.svg" alt="linkedin" title="linkedin"></a></li>
        <li><a href="https://github.com/corpsecouch/" target="_blank"><img src="assets/icon_github.svg" alt="github" title="github"></a></li>
        <li><a href="https://www.goodreads.com/user/show/37984300-jason" target="_blank"><img src="assets/icon_goodreads.svg" alt="goodreads" title="goodreads"></a></li>
      </ul>
    </div>
  </div>

  <div class="flex row section" id="memberships">
    <div class="content">
      I'm a member of <a href="http://planetary.org/">The Planetary Society</a> to help us squishy humans become citizens of space.
      <a href="http://planetary.org/"><img src="assets/logo-planetary.png" alt="The Planetary Society" title="The Planetary Society"></a>
    </div>
  </div>

  <div class="flex row section" id="writing">
    <div class="content">
      Sometimes I'll write about tech, nerdery and other random stuff on <a href="https://medium.com/@jasonbejot" target="_blank">Medium</a>
      <medium postsToDisplay="3"></medium>
    </div>
  </div>

  <div class="flex row section" id="books">
    <div class="flex column content">
      I'm currently reading
      <goodreads-current></goodreads-current>
    </div>

    <div class="read flex row">
      <goodreads-read></goodreads-read>
    </div>
  </div>

  <div class="flex row section" id="passion">
    <div class="content">
      The future is my passion and I love dreaming of innovative tech. I'm a Disney Inventor with multiple patents pending in Virtual Reality and Augmented/Mixed Reality.
    </div>
  </div>

  <div class="flex row section" id="band">
    <div class="photo"></div>
    <div class="content">
      <div>Every so often I'll play guitar. With my last band I released two albums</div>
      <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2144392919/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://store.theanswerteam.net/album/o-sad-and-future-human">O Sad and Future Human by The Answer Team</a></iframe>
      <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2914502789/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://store.theanswerteam.net/album/dead-letter-office">Dead Letter Office by The Answer Team</a></iframe>
    </div>
  </div>

  <div class="flex row section" id="copywrite">
    <div class="content">
      &copy; Jason Bejot
    </div>
  </div>
  `
})
export class HomepageComponent  {
  constructor(private titleService:Title){}

  ngOnInit(){
    this.titleService.setTitle('Jason Bejot');
  }
}
