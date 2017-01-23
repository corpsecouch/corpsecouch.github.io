import { Component, OnInit }  from '@angular/core';
import { Title }              from '@angular/platform-browser';

@Component({
  styleUrls: [
    'styles/layout.css',
    'styles/interior.css',
    'app/resume/resume.styles.css',
  ],
  template: `
  <header>
    <h1 title>Jason Bejot</h1>
    <p subtitle>Experience Innovator. Pun Slinger</p>
  </header>

  <section class="page-break-after">
    <h2 title>tl;dr</h2>
    <content>
      <p>I am passionate about innovative, magical experiences. I’m a leader with a vision for the future of the human experience. With over a decade of experience as an accomplished experience architect and computer scientist I know how to push the limits of technology &amp; design to create magic. Basically, I want to make cool things with cool people to make an amazing future for everyone.</p>
      <ul>
        <li>Directed and managed teams of experience designers</li>
        <li>2x recipient of the Disney Inventor Award for AR and VR patents</li>
        <li>Led agency UX and R&amp;D</li>
        <li>Former Vice President of an academic HCI research group</li>
        <li>I’m a Certified Scrum Product Owner (CSPO)</li>
        <li>Present and guest lecture about UX</li>
        <li>Won multiple awards for agency work</li>
        <li>Member of IxDA, ACM SIGGRAPH and The Planetery Society</li>
      </ul>
    </content>
  </section>

  <section>
    <h2 title>Why Me?</h2>
    <content>
      <h4>Ambitious</h4>
      <p>Challenging the status quo is in my DNA. I strive to make things better and blow peoples’ minds with new ways to solve things.</p>

      <h4>Collaborative</h4>
      <p>One person can’t know or do everything. I lean on the people around me to make great things together.</p>

      <h4>Dreamer</h4>
      <p>I'm constantly developing new ideas, disruptive and sustaining. My imagination and sharpened ability for creative problem solving are some of my greatest strengths.</p>

      <h4>Strategic</h4>
      <p>I achieve goals through foresight, creativity, data and careful planning.</p>

      <h4>Leader</h4>
      <p>I know how to bring the best out in people, focus their skills and talents to achieve things they didn’t know they could.</p>
    </content>
  </section>

  <section>
    <h2 title>My Experience</h2>
    <content>
      <h3>User Experience Lead, Architecture &amp; Strategy</h3>
      <p class="context">The Walt Disney Studios in Glendale, CA / 2013 - Present</p>
        <p>I’m responsible for creating magical experiences for the Studios’ critical enterprise-level business systems, to bring the magic inside.</p>
        <ul>
          <li>Concept, pitch, research, design, test and measure magical experiences</li>
          <li>Define Studio-wide UX vision, principles, strategy, process and standards</li>
          <li>Established a UX agency inside the Studios</li>
          <li>Lead a team of UX and visual designers</li>
          <li>Drive experience and technology innovation</li>
          <li>Run products as a Certified SCRUM Product Owner</li>
        </ul>

        <h4>Key Projects</h4>
        <ul>
          <li>Tracking international ticket sales for all Disney theatrical releases</li>
          <li>Managing the movie pre-greenlight development process for all Disney films</li>
          <li>Tracking lifecycles of Disney films</li>
          <li>Planning release schedules for all Disney films</li>
          <li>Managing A&amp;R (artist &amp; repitoir) data for all Disney music</li>
          <li>Managing residual payouts to talent</li>
          <li>Managing on-set physical assets (i.e. props)</li>
        </ul>



      <h3>Technology Innovation Evangelist, Segment Head</h3>
      <p class="context">The Walt Disney Studios in Glendale, CA / 2015 - Present</p>
      <p>I work to drive and evangelize innovation across the Studio segment, including: Marvel, Lucasfilm, Pixar, Walt Disney Pictures, Disney Animation, Disney Records, Hollywood Records and Disneytoon Studios.</p>
      <ul>
        <li>Evangelize innovations and innovative teams</li>
        <li>Establish innovation policies, programs and strategies</li>
        <li>Personally chosen by Studio CTO, Jamie Voris, to lead the studio segment innovation evangelism</li>
        <li>Collaborate with all levels, from interns to C-level executives</li>
      </ul>



      <h3>Hex, Founder &amp; Stakeholder</h3>
      <p class="context">The Walt Disney Studios in Glendale, CA / 2014 - Present</p>
      <p>Consistency across the suite of enterprise business systems is an important part of a magical work experience. I established the experience design language adopted throughout the Studios.</p>
      <ul>
        <li>Founded the Studio-wide design language</li>
        <li>Recognized at the Best of Disney in 2014</li>
        <li>Act as the UX stakeholder</li>
      </ul>





      <h3>Creative Director</h3>
      <p class="context">Ace Metrix in El Segundo, CA / 2013</p>
      <p>As a start-up full of engineers and business people I took on the responsibility of driving creative direction and user experience.</p>
      <ul>
        <li>Lead and managed the visual design team</li>
        <li>Collaborated directly with the executive team</li>
        <li>Established the creative and UX direction</li>
        <li>Ensured all design was on-brand</li>
        <li>Concepted and pitched innovative product features</li>
      </ul>



      <h3>Sr. UI Engineer</h3>
      <p class="context">Ace Metrix in El Segundo, CA / 2013</p>
      <p>I was responsible for building and maintaining the front-end of the flagship product on all platforms; web, mobile and tablet.</p>
      <ul>
        <li>Developed full-stack</li>
        <li>Built interactive visualization UI for data analysis</li>
        <li>Built innovative Javascript word cloud driven by simulated annealing and quad trees</li>
      </ul>




      <h3>Sr. UX Designer</h3>
      <p class="context">Phenomblue in Omaha, NE &amp; Santa Monica, CA / 2010 - 2013</p>
      <ul>
        <li>Concepted, pitched, researched, designed and tested interactive experiences</li>
        <li>Established and lead the UX practice for the agency</li>
        <li>UX accounted for 10% of agecy revenue</li>
      </ul>

      <h4 class="page-break-before">Brands Worked With</h4>
      <ul class="flex row" id="brands">
        <li><img src="assets/resume/logo-gatorade.jpg" alt="Gatorade" title="Gatorade"></li>
        <li><img src="assets/resume/logo-mcdonalds.jpg" alt="McDonalds" title="McDonalds"></li>
        <li><img src="assets/resume/logo-nike.jpg" alt="Nike" title="Nike"></li>
        <li><img src="assets/resume/logo-gogo.png" alt="Gogo" title="Gogo"></li>
        <li><img src="assets/resume/logo-budweiser.jpg" alt="Budweiser" title="Budweiser"></li>
        <li><img src="assets/resume/logo-5gum.jpeg" alt="5 Gum" title="5 Gum"></li>
        <li><img src="assets/resume/logo-dietcoke.jpg" alt="Diet Coke" title="Diet Coke"></li>
        <li><img src="assets/resume/logo-microsoft.jpg" alt="Microsoft" title="Microsoft"></li>
        <li><img src="assets/resume/logo-playtex.jpeg" alt="Playtex" title="Playtex"></li>
      </ul>

      <h4>Awards Won</h4>
      <ul>
        <li>ADDY</li>
        <li>FWA</li>
        <li>Webby</li>
        <li>SXSW Interactive Award</li>
        <li>Microsoft PhizzPop Design Challenge Winner</li>
      </ul>

      <h4>Key Projects</h4>
      <ul>
        <li>Augmented Reality Museum - The Field Museum</li>
        <li>Wild Kingdom - Mutual of Omaha</li>
        <li>Genesis - Microsoft</li>
        <li>Fantastic Future Me - Omaha Children’s Museum</li>
        <li>WatchMeBloom.com - College of Saint Mary</li>
        <li>HelloQR</li>
        <li>I Smell Brains</li>
      </ul>


      <h3>Lead R&amp;D</h3>
      <p class="context">Phenomblue in Omaha, NE / 2009 - 2010</p>
      <ul>
        <li>Established the R&amp;D practice within the agency</li>
        <li>Conducted R&amp;D on bleeding edge technologies</li>
        <li>Peer-voted onto the interal innovation board, Signature Reserve</li>
        <li>Concepted and pitched emerging tech-based experiences</li>
        <li>Built custom physics engines, game engines, 3D engines and an AR engine</li>
      </ul>


      <h3 class="page-break-before">Experience Engineer</h3>
      <p class="context">Phenomblue in Omaha, NE / 2007 - 2009</p>
      <ul>
        <li>Built mobile, web, tablet, kiosk and custom interactive installations</li>
        <li>Developed full-stack</li>
        <li>Built interactive 3D Flash experiences</li>
      </ul>




      <h3>Web Developer</h3>
      <p class="context">Orajen in Omaha, NE / 2005 - 2007</p>
      <ul>
        <li>Built web sites and Flash experiences</li>
        <li>Developed full-stack</li>
      </ul>
    </content>
  </section>

  <section>
    <h2 title>My Education</h2>
    <content>
      <h3>Bachelor of Science in Computer Science</h3>
      <p class="context">Omaha, NE / 2000 - 2005</p>
      <ul>
        <li>University of Nebraska at Omaha</li>
        <li>College of Information Science &amp; Technology</li>
        <li>Dean’s List for high academic achievement</li>
      </ul>

      <h4>Key Projects</h4>
      <ul>
        <li>Vice President of the HCI research group</li>
        <li>Managed and facilitated the Space Shuttle Simulator lab</li>
      </ul>
    </content>
  </section>
  `
})
export class ResumeComponent implements OnInit {
  constructor(private titleService:Title){}

  ngOnInit(){
    this.titleService.setTitle('Resume of Jason Bejot');
  }
}
