<template>
  <footer :class="$style.footer">
    <div :class="$style.links" class="container">
      <div>
        <div :class="$style.navs">
          <a href="/" alt="Home">Home</a>
          <a href="/about/" alt="About Me">About</a>
          <a href="/portfolio/" alt="Portfolio">Portfolio</a>
          <a href="/articles/" alt="Articles">Articles</a>
          <a href="/awards/" alt="Awards">Awards</a>
          <a href="/press/" alt="Press">Press</a>
          <!-- <a href="/#contact" alt="Contact">Contact</a> -->
        </div>
      </div>

      <div :class="$style.contacts">
        <p>Contact Me</p>
        <!-- <span><Email class="email"><template v-slot:icon><SVGEmail /></template></Email></span> -->
         <span><a clas="email" href="mailto:jasonbejot@gmail.com">Email</a></span>
        <span><a class="linkedin" href="https://linkedin.com/in/jasonbejot" title="LinkedIn" target="_blank"><SVGLinkedIn />LinkedIn</a></span>
        <span><a class="adplist" href="https://adplist.org/mentors/jason-bejot" title="ADPList" target="_blank"><SVGADPList />ADPList</a></span>
        <span><a class="medium" href="https://medium.com/@jasonbejot" title="Medium" target="_blank"><SVGMedium />Medium</a></span>
        <span><a class="twitter" href="https://twitter.com/jasonbejot" title="X (Twitter)" target="_blank"><SVGTwitter />X (Twitter)</a></span>
        <span><a class="github" href="https://github.com/corpsecouch" title="Github" target="_blank"><SVGGithub />Github</a></span>
      </div>

      <div :class="$style.bottom">
        <span :class="$style.statement">Built from scratch with care.</span>
        <span :class="$style.copyright">&copy; Jason Bejot</span>
      </div>
    </div>
    
    <!-- <div id="contact" :class="$style.contact"> -->
      <!-- https://www.ionos.com/digitalguide/e-mail/e-mail-security/protecting-your-email-address-how-to-do-it/ -->
      <!-- <div :class="$style.columns">
        <div :class="$style.left">
          <h2>Contact<br />Me</h2>
        </div>
        <div :class="$style.right">
          <div id="social" :class="$style.social">
            <span><Email class="email"><template v-slot:icon><SVGEmail /></template></Email></span>
            <span><a class="linkedin" href="https://linkedin.com/in/jasonbejot" title="LinkedIn" target="_blank"><SVGLinkedIn />LinkedIn</a></span>
            <span><a class="adplist" href="https://adplist.org/mentors/jason-bejot" title="ADPList" target="_blank"><SVGADPList />ADPList</a></span>
            <span><a class="medium" href="https://medium.com/@jasonbejot" title="Medium" target="_blank"><SVGMedium />Medium</a></span>
            <span><a class="twitter" href="https://twitter.com/jasonbejot" title="X (Twitter)" target="_blank"><SVGTwitter />X (Twitter)</a></span>
            <span><a class="github" href="https://github.com/corpsecouch" title="Github" target="_blank"><SVGGithub />Github</a></span>
          </div>
        </div>
      </div>
    </div> -->

    
  </footer>
</template>

<script>
  // import Email from '@components/Email';
  import SVGTwitter from '@components/SVGTwitter';
  import SVGMedium from '@components/SVGMedium';
  import SVGLinkedIn from '@components/SVGLinkedIn';
  import SVGEmail from '@components/SVGEmail';
  import SVGADPList from '@components/SVGADPList';
  import SVGGithub from '@components/SVGGithub';

  export default {
    name: 'Footer',
    components: {
      // Email,
      SVGTwitter,
      SVGMedium,
      SVGLinkedIn,
      SVGEmail,
      SVGADPList,
      SVGGithub
    }
  }
</script>

<style module lang="css">
  .footer {
    width: 100%;
    display: block;
    padding: 7rem 0;
    font-size: 0.9rem;
    margin-top: 14rem;
    background-color: var(--color-background-dark);
    color: var(--color-text-light);
    /* text-align: center; */
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    /* grid-template-rows: 1fr auto; */
  }

  .bottom {
    display: flex;
    flex-flow: column nowrap;
    row-gap: 1.5rem;
  }

  .links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    column-gap: 3.5rem;
  }

  .navs {
    /* display: flex; */
    /* flex-flow: column nowrap; */
    row-gap: 1rem;
    /* grid-column-start: 1; */
    /* align-items: end; */

    /* justify-content: center; */
    /* column-gap: 1.4rem; */

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .copyright {
    text-transform: uppercase;
  }

  .contacts {
    display: flex;
    flex-flow: column nowrap;
    justify-items: left;
    row-gap: 1rem;
    align-items: end;
    grid-row-end: span 2;
  }

  .contacts a {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    column-gap: 0.6rem;
  }

  .contacts a * {
    display: none;
  }
</style>