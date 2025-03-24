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
        </div>
      </div>

      <div :class="$style.socials">
        <p>Where To Find Me</p>
        <span><a class="linkedin" href="https://linkedin.com/in/jasonbejot" title="LinkedIn" target="_blank">LinkedIn</a></span>
        <span><a class="adplist" href="https://adplist.org/mentors/jason-bejot" title="ADPList" target="_blank">ADPList</a></span>
        <span><a class="medium" href="https://medium.com/@jasonbejot" title="Medium" target="_blank">Medium</a></span>
        <span><a class="substack" href="https://substack.com/@jasonbejot" title="Substack" target="_blank">Substack</a></span>
        <!-- <span><a class="twitter" href="https://twitter.com/jasonbejot" title="X (Twitter)" target="_blank"><SVGTwitter />X (Twitter)</a></span> -->
        <span><a class="threads" href="https://www.threads.net/@jasonbejot" title="Threads" target="_blank">Threads</a></span>
        <span><a class="github" href="https://github.com/corpsecouch" title="Github" target="_blank">Github</a></span>
      </div>

      <div id="contact" :class="$style.contacts">
        <p>Contact Me</p>
        <!-- <span><Email class="email"><template v-slot:icon><SVGEmail /></template></Email></span> -->
        <span><a class="email" href="mailto:hello@jasonbejot.com" title="Email Me">Email Me</a></span>
        <span><a class="schedule" href="https://cal.com/jasonbejot" title="Book A Meeting" target="_blank">Book A Meeting</a></span>
      </div>

    </div>

    <div :class="$style.bottom">
      <span :class="$style.statement">Built from scratch with care.</span>
      <span :class="$style.copyright">&copy; Jason Bejot</span>
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

  export default {
    name: 'Footer',
    components: {
      // Email
    }
  }
</script>

<style module lang="css">
  .footer {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    row-gap: 7rem;
    padding: 7rem 0;
    font-size: 0.9rem;
    margin-top: 14rem;
    background-color: var(--color-background-dark);
    color: var(--color-text-light);
  }

  .bottom {
    display: flex;
    flex-flow: column nowrap;
    row-gap: 1.5rem;
    text-align: center;
  }

  .links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    column-gap: 3.5rem;
  }

  @media all and (max-width: 680px) {
    .links {
      display: flex;
      flex-flow: column nowrap;
      row-gap: 3.5rem;
    }
  }

  .navs {
    row-gap: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .copyright {
    text-transform: uppercase;
  }

  .contacts, .socials {
    display: flex;
    flex-flow: column nowrap;
    justify-items: left;
    row-gap: 1rem;
  }

  .socials {
    grid-row-end: span 2;
    align-items: end;
  }

  @media all and (max-width: 680px) {
    .socials {
      align-items: normal;
      order: 2;
    }
  }

  .contacts a, .socials a {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    column-gap: 0.6rem;
  }
</style>