import { companies } from '../globals/companies.data';
import _ from 'lodash'

const data = [
  {
    pub:      'National Mortgage News',
    title:    'Rocket Pro TPO teases AI-powered hotline',
    url:      'https://www.nationalmortgagenews.com/news/rocket-pro-tpo-teases-ai-powered-hotline',
    project:  '',
    year:     '',
    company:  companies.rocket
  },

  {
    pub:    'National Mortgage Professional',
    title:  'Rocket Pro TPO Introduces Hotline For Brokers',
    url:    'https://nationalmortgageprofessional.com/news/rocket-pro-tpo-introduces-hotline-brokers',
    project:'',
    year:   '',
    company:  companies.rocket
  },

  {
    pub:    'The Mortgage Note',
    title:  'Rocket Pro TPO Announces AI-Powered Hotline For Brokers',
    url:    'https://www.themortgagenote.org/rocket-pro-tpo-announces-hotline-for-brokers-powered-by-ai/',
    project:'',
    year:   '',
    company:  companies.rocket
  },

  {
    pub:    'ScotsmanGuide',
    title:  'Industry Watch: A new AI hotline at Rocket',
    url:    'https://www.scotsmanguide.com/news/industry-watch-a-new-ai-hotline-at-rocket-a-program-for-real-estate-agents-at-guaranteed-rate-and-more/',
    project:'',
    year:   '',
    company:  companies.rocket
  },

  {
    pub:    'Amazon',
    title:  'Alexa Profiles',
    url:    'https://www.amazon.com/alexa-profiles/b?ie=UTF8&node=23804562011',
    project:'AmazonProfile',
    year:   '',
    company:  companies.amazon
  },

  {
    pub:    'voicebot.ai',
    title:  'Alexa Developers Can Now Personalize Voice Skills With Names and Phone Numbers',
    url:    'https://voicebot.ai/2020/05/28/alexa-developers-can-now-personalize-voice-skills-with-names-and-phone-numbers/',
    project:'AmazonProfile',
    year:   '',
    company:  companies.amazon
  },
  
  {
    pub:    'The New York Times',
    title:  '‘Cortana, Open Alexa,’ Amazon Says. And Microsoft Agrees.',
    url:    'https://www.nytimes.com/2017/08/30/technology/amazon-alexa-microsoft-cortana.html',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },
  
  {
    pub:    'Gizmodo',
    title:  'Alexa and Cortana Are on Speaking Terms',
    url:    'https://gizmodo.com/alexa-and-cortana-are-on-speaking-terms-1798622487',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },
  
  {
    pub:    'The Verge',
    title:  'Microsoft and Amazon partner to integrate Alexa and Cortana digital assistants',
    url:    'https://www.theverge.com/2017/8/30/16224876/microsoft-amazon-cortana-alexa-partnership',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },
  
  {
    pub:    'The Verge',
    title:  'Microsoft demonstrates Alexa and Cortana integration',
    url:    'https://www.theverge.com/2018/5/7/17326808/microsoft-cortana-update-alexa-integration-build-2018',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },
  
  {
    pub:    'cnet',
    title:  'How to use Alexa and Cortana together',
    url:    'https://www.cnet.com/how-to/how-to-use-alexa-and-cortana-together/',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },
  
  {
    pub:    'ZDnet',
    title:  'The Alexa-Cortana integration: Why wasn\'t this bigger news?',
    url:    'https://www.zdnet.com/article/the-alexa-cortana-integration-why-wasnt-this-bigger-news/',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },
  
  {
    pub:    'Lifehacker',
    title:  'How to Use Cortana and Alexa together',
    url:    'https://lifehacker.com/how-to-use-cortana-and-alexa-together-1828386070',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },
  
  {
    pub:    'TechCrunch',
    title:  'The Alexa-Cortana integration is now available in a public preview',
    url:    'https://techcrunch.com/2018/08/15/the-alexa-cortana-integration-is-now-available-in-a-public-preview/',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },

  {
    pub:    'VentureBeat',
    title:  'Microsoft and Amazon launch Alexa-Cortana public preview for Echo speakers and Windows 10 PCs',
    url:    'https://venturebeat.com/ai/microsoft-and-amazon-launch-alexa-cortana-public-preview-for-echo-speakers-and-windows-10-pcs/',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },

  {
    pub:    'VentureBeat',
    title:  'Alexa meets Cortana: Amazon and Microsoft to integrate their digital assistants',
    url:    'https://venturebeat.com/ai/alexa-meets-cortana-microsoft-and-amazon-to-integrate-their-digital-assistants/',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },

  {
    pub:    'ars technica',
    title:  'Alexa and Cortana integration starts rolling out today',
    url:    'https://arstechnica.com/gadgets/2018/08/alexa-and-cortana-integration-starts-rolling-out-today/',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },

  {
    pub:    'ars technica',
    title:  'Cortana and Alexa are coming together in surprising Microsoft-Amazon partnership',
    url:    'https://arstechnica.com/gadgets/2017/08/cortana-and-alexa-are-coming-together-in-surprising-microsoftamazon-partnership/',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },

  {
    pub:    'PC Mag',
    title:  'Alexa, Open Cortana: Amazon, Microsoft Team Up on Voice',
    url:    'https://www.pcmag.com/news/alexa-open-cortana-amazon-microsoft-team-up-on-voice',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },

  {
    pub:    'PC Mag',
    title:  'Alexa and Cortana Become Smart Friends',
    url:    'https://www.pcmag.com/news/alexa-and-cortana-become-smart-friends',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },

  {
    pub:    'Slate',
    title:  'Alexa Is Coming for Your Laptop',
    url:    'https://slate.com/technology/2018/06/alexa-amazon-assistant-moving-to-your-laptop-does-it-make-sense.html',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },

  {
    pub:    'Wired',
    title:  'An Alexa and Cortana Team-Up Won\'t Get Far Without a Phone',
    url:    'https://www.wired.com/story/alexa-cortana-team-up-wont-get-far-without-a-phone/',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },

  {
    pub:    'CNBC',
    title:  'Amazon and Microsoft team up their A.I. voice assistants with new partnership deal',
    url:    'https://www.cnbc.com/2017/08/30/amazon-digital-voice-assistant-alexa-partners-with-microsoft-cortana.html',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },

  {
    pub:    'The Washington Post',
    title:  'Microsoft and Amazon made their voice assistants into friends. Here\'s how that relationship works.',
    url:    'https://www.washingtonpost.com/technology/2018/08/16/microsoft-amazon-made-their-voice-assistants-into-friends-heres-how-that-relationship-works/',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },

  {
    pub:    'TechRadar',
    title:  'Here\'s what Alexa and Cortana Windows 10 integration looks like',
    url:    'https://www.techradar.com/news/heres-what-alexa-and-cortana-windows-10-integration-looks-like',
    project:'AmazonAlexaCortana',
    year:   '',
    company:  companies.amazon
  },

  {
    pub:    'Amazon',
    title:  'Alexa became even more natural and useful for customers in 2019',
    url:    'https://www.aboutamazon.com/news/devices/alexa-became-even-more-natural-and-useful-for-customers-in-2019',
    project:'',
    year:   '',
    company:  companies.amazon
  },

  {
    pub:    'voicebot.ai',
    title:  'Amazon Launches Alexa Skill Personalization Features',
    url:    'https://voicebot.ai/2019/11/01/amazon-launches-alexa-skill-personalization-features/',
    project:'',
    year:   '',
    company:  companies.amazon
  },

  {
    pub:    'The FWA',
    title:  'An Elephant in the Room: Bringing Mutual of Omaha’s Wild Kingdom to Life on Mobile',
    url:    'https://thefwa.com/article/an-elephant-in-the-room-bringing-mutual-of-omaha',
    project:'PhenomblueMyWildKingdom',
    year:   '',
    company:  companies.phenomblue
  },

  {
    pub:    'Society of Digital Agencies (SoDA)',
    title:  'My Wild Kingdom',
    url:    'https://www.behance.net/gallery/11159475/My-Wild-Kingdom',
    project:'PhenomblueMyWildKingdom',
    year:   '',
    company:  companies.phenomblue
  },

  {
    pub:    'sixteen-nine',
    title:  'DSE2012: PhenomBlue Bringing Interactive Surface To Las Vegas',
    url:    'https://www.sixteen-nine.net/2012/03/05/dse2012-phenomblue-interactive-surface-to-lost-wages/',
    project:'PhenomblueDinoDig',
    year:   '',
    company:  companies.phenomblue
  },

  {
    pub:    'MediaPost',
    title:  'Best Integrated with a Mobile Device: Movie Lotto, Phenomblue',
    url:    'https://www.mediapost.com/publications/article/170926/best-integrated-with-a-mobile-device-movie-lotto.html',
    project:'PhenomblueMovieLotto',
    year:   '',
    company:  companies.phenomblue
  },

  {
    pub:    'Silicon Prairie News',
    title:  'Phenomblue think tank produces Movie Lotto, Daydreamer',
    url:    'https://siliconprairienews.com/2012/03/phenomblue-think-tank-produces-movie-lotto-daydreamer/',
    project:'PhenomblueMovieLotto',
    year:   '',
    company:  companies.phenomblue
  },

  {
    pub:    'Omaha Childrens Museum',
    title:  'Fantastic Future Me',
    url:    'http://www.ocm.org/exhibits-and-events/permanent-exhibits/fantastic-future-me/',
    project:'PhenomblueFantasticFutureMe',
    year:   '',
    company:  companies.phenomblue
  },

  {
    pub:    'Google Books',
    title:  'Making Hope Happen: Create the Future You Want for Yourself and Others',
    url:    'https://books.google.com/books?id=ThcHBAAAQBAJ&pg=PA192&lpg=PA192&dq=phenomblue+fantastic+future+me&source=bl&ots=mwswQHIPTd&sig=ACfU3U3lUJYquuu6uJv4KSsmy6BnGVu6iA&hl=en&sa=X&ved=2ahUKEwjKsKaHj9_pAhVRLX0KHb9YAJkQ6AEwAnoECAoQAg#v=onepage&q=phenomblue%20fantastic%20future%20me&f=false',
    project:'PhenomblueFantasticFutureMe',
    year:   '',
    company:  companies.phenomblue
  },

  {
    pub:    'Omaha Childrens Museum',
    title:  'New Fantastic Future Me Exhibit Builds Hope in Children',
    url:    'https://myemail.constantcontact.com/News-Release--Future-Me-Exhibit-Opening-Next-Week.html?soid=1011257236026&aid=k58hW7TGGq0',
    project:'PhenomblueFantasticFutureMe',
    year:   '',
    company:  companies.phenomblue
  },

  {
    pub:    'Fast Company',
    title:  'Five More Killer Apps for Microsoft Surface',
    url:    'https://www.fastcompany.com/1298921/five-more-killer-apps-microsoft-surface',
    project:'PhenomblueGenesis',
    year:   '',
    company:  companies.phenomblue
  },

  {
    pub:    'YouTube',
    title:  'Interview with Phenomblue on Genesis, Microsoft Surface App',
    url:    'https://www.youtube.com/watch?v=oI09o3Cq6N4',
    project:'PhenomblueGenesis',
    year:   '',
    company:  companies.phenomblue
  },

  {
    pub:    'adeevee',
    title:  'Big Omaha Conference: Moppet Mashup',
    url:    'https://www.adeevee.com/2009/05/big-omaha-conference-moppet-mashup-design/',
    project:'PhenomblueMoppetMashup',
    year:   '',
    company:  companies.phenomblue
  },

  {
    pub:    'NUI (Natural User Interface)',
    title:  'Moppet Mashup',
    url:    'https://vimeo.com/channels/nui/4696222',
    project:'PhenomblueMoppetMashup',
    year:   '',
    company:  companies.phenomblue
  }

]

// vitepress data loader
export default {
  load() {
    // let data = {};
    //   _.each(companies, (value, key) => {
    //     data[value.slug] = _.filter(press, o => { return o.company.slug == value.slug })
    //   });

    //   data.total = press.length;

    //   return data
    return data
  }
}
