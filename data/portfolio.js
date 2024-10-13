import companies from '@data/companies';

/*const randomImage = function() {
  return `https://picsum.photos/200?random=${ Math.random()*1000 }`;
}*/

const data = [
  /*{
    company: companies.rocket,
    year:         '2023',
    title:        'Gen AI Mortgage Banker',
    slug:         'project-two',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    tags:         ['mobile design', 'voice design', 'multi-modal design', 'AI design', 'conversational design'],
    image:        './portfolio/rocket/project-two/thumb.png',
    route: {
      name: 'rocketprojecttwo'
    }
  },*/

  {
    company: companies.rocket,
    year:         '2023',
    title:        'Conversational Lead Funnel',
    description:  'Overhauling the mortgage top-of-funnel with conversational AI.',
    tags:         ['UI design', 'AI design', 'conversational design'],
    preview:      {
      image:  require('@assets/portfolio/rocket/ironbear/thumb.png'),
      type:   'product',
      color:  'lightcoral'
    },
    url:          '/portfolio/rocket-ironbear/'
  },

  {
    featured: true,
    company: companies.amazon,
    year:         '2019',
    title:        'Alexa Profile',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    tags:         ['mobile design', 'voice design', 'multi-modal design', 'AI design', 'conversational design'],
    preview:      {
      image:  require('@assets/portfolio/amazon/profile/thumb.png'),
      type:   'product',
      color:  'lightskyblue'
    },
    url:          '/portfolio/amazon-profile/',
  },

  // {
  //   hidden: true,
  //   company: companies.amazon,
  //   year:         '2019',
  //   title:        'Presence Detection',
  //   slug:         'presence-detection',
  //   description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
  //   image:        require('@portfolio/amazon/profile/thumb.png'),
  //   route: {
  //     name: 'alexapresence'
  //   }
  // },

  // {
  //   hidden: true,
  //   company: companies.amazon,
  //   year:         '2019',
  //   title:        'Personalized Skills',
  //   slug:         'personalized-skills',
  //   description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
  //   image:        require('@portfolio/amazon/profile/thumb.png'),
  //   route: {
  //     name: 'alexapersonalizedskills'
  //   }
  // },

  // {
  //   hidden: true,
  //   company: companies.amazon,
  //   year:         '2018',
  //   title:        'Voice Settings',
  //   slug:         'voice-settings',
  //   description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
  //   image:        require('@portfolio/amazon/profile/thumb.png'),
  //   route: {
  //     name: 'alexavoicesettings'
  //   }
  // },

  {
    featured: true,
    company: companies.amazon,
    year:         '2017',
    title:        'Alexa + Cortana',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    tags:         ['voice design', 'multi-modal design', 'AI design', 'conversational design'],
    preview:      {
      image:  require('@assets/portfolio/amazon/alexa-cortana/thumb.png'),
      type:   'product',
      color:  'lightsalmon',
    },
    url:          '/portfolio/amazon-alexa-cortana/',
  },

  {
    company: companies.disney,
    year:         '2014',
    title:        'Enterprise Design System',
    description:  'Creating an award-winning enterprise design system.',
    tags:         ['design system'],
    preview:      {
      image:  require('@assets/portfolio/disney/design-system/preview.png'),
      type:   'product',
      color:  'blueviolet',
    },
    url:          '/portfolio/disney-design-system/',
  },

  {
    company: companies.disney,
    year:         '2017',
    title:        'Movie Greenlight',
    description:  'Innovating how Disney greenlights movies.',
    preview:      {
      image:  require('@assets/portfolio/disney/greenlight/preview.png'),
      type:   'product',
      color:  'lightblue',
    },
    url:          '/portfolio/disney-greenlight/',
  },

  {
    company: companies.disney,
    year:         '2017',
    title:        'Innovation Incubator',
    description:  'Transforming how Disney Studios innovates.',
    tags:         ['r&d'],
    preview:      {
      image:  require('@assets/portfolio/disney/incubator/preview.png'),
      type:   'title'
    },
    url:          '/portfolio/disney-incubator/',
  },

  {
    featured: true,
    company: companies.disney,
    year:         '2014',
    title:        'Filmmaking for Virtual Reality',
    description:  'Leading the VR conversation.',
    tags:         ['vr design', 'creative direction'],
    preview:      {
      image:  require('@assets/portfolio/disney/vr/thumb.png'),
      type:   'product',
      color:  'chartreuse',
    },
    url:          '/portfolio/disney-vr/',
  },

  {
    company: companies.disney,
    year:         '2016',
    title:        'Movie Slate',
    description:  'Innovating how Disney plans and tracks their slate of upcoming movies.',
    preview:      {
      image:  require('@assets/portfolio/disney/slate/preview.png'),
      type:   'title'
    },
    url:          '/portfolio/disney-slate/',
  },

  {
    company: companies.phenomblue,
    year:         '2009',
    title:        'Microsoft Genesis',
    description:  'A 3D, social space simulator.',
    tags:         ['game design', 'r&d', 'microsoft surface'],
    preview:      {
      image:  require('@assets/portfolio/phenomblue/genesis/preview.png'),
      type:   'title'
    },
    url:          '/portfolio/phenomblue-genesis/',
  },

  {
    company: companies.phenomblue,
    year:         '2013',
    title:        'My Wild Kingdom',
    description:  'A groundbreaking adventure app that brings the wild to any situation',
    tags:         ['mobile design'],
    preview:      {
      image:  require('@assets/portfolio/phenomblue/wild-kingdom/preview.png'),
      type:   'product',
      color:  'wheat',
    },
    url:          '/portfolio/phenomblue-wild-kingdom/',
  },

  {
    company: companies.phenomblue,
    year:         '2012',
    title:        'Operation: Dino Dig',
    description:  'Social computing for learning and exploration.',
    tags:         ['microsoft surface'],
    preview:      {
      image:  require('@assets/portfolio/phenomblue/dino-dig/preview.png'),
      type:   'title'
    },
    url:          '/portfolio/phenomblue-dino-dig/',
  },

  {
    company: companies.phenomblue,
    year:         '2013',
    title:        'Page',
    description:  'Breaking down the "fifth wall" of reading and literature.',
    tags:         ['ar design', 'mobile design', 'r&d'],
    preview:      {
      image:  require('@assets/portfolio/phenomblue/page/preview.png'),
      type:   'title'
    },
    url:          '/portfolio/phenomblue-page/',
  },

  {
    company: companies.phenomblue,
    year:         '2012',
    title:        'Movie Lotto',
    description:  'Social gaming in theaters.',
    tags:         ['design system', 'r&d'],
    preview:      {
      image:  require('@assets/portfolio/phenomblue/movie-lotto/preview.png'),
      type:   'title'
    },
    url:          '/portfolio/phenomblue-movie-lotto/',
  },

  {
    company: companies.phenomblue,
    year:         '2012',
    title:        'Fantastic Future Me',
    description:  'Encouraging kids to reach their Future Me.',
    tags:         ['public installation'],
    preview:      {
      image:  require('@assets/portfolio/phenomblue/fantastic-future-me/preview.png'),
      type:   'title'
    },
    url:          '/portfolio/phenomblue-fantastic-future-me/',
  },

  {
    company: companies.phenomblue,
    year:         '2009',
    title:        'Moppet Mashup',
    description:  'A social, large-format interactive experience.',
    tags:         ['microsoft surface', 'public installation', 'r&d'],
    preview:      {
      image:  require('@assets/portfolio/phenomblue/moppet-mashup/peek.png'),
      type:   'title'
    },
    url:          '/portfolio/phenomblue-moppet-mashup/',
  },

  // {
  //   hidden: true,
  //   company: companies.phenomblue,
  //   year:         '2012',
  //   title:        'TUMS: Food Fight',
  //   description:  'A branded Facebook game.',
  //   tags:         ['game design'],
  //   image:        require('@/pages/portfolio/phenomblue/tums/peek.png'),
  //   url:          new URL('@portfolio/phenomblue/tums/index.html', import.meta.url).href
  // },
]

export default data;
