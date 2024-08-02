import companies from 'data/companies';

/*const randomImage = function() {
  return `https://picsum.photos/200?random=${ Math.random()*1000 }`;
}*/

const data = [
  {
    company: companies.rocket,
    year:         '202X',
    title:        'Project One',
    slug:         'project-one',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    tags:         ['mobile design', 'voice design', 'multi-modal design', 'AI design', 'conversational design'],
    image:        './portfolio/rocket/project-one/thumb.png',
    route: {
      name: 'project-one'
    }
  },

  {
    company: companies.rocket,
    year:         '202X',
    title:        'Project Two',
    slug:         'project-two',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    tags:         ['mobile design', 'voice design', 'multi-modal design', 'AI design', 'conversational design'],
    image:        './portfolio/rocket/project-two/thumb.png',
    route: {
      name: 'project-two'
    }
  },

  {
    featured: true,
    company: companies.amazon,
    year:         '2019',
    title:        'Alexa Profile',
    slug:         'profile',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    tags:         ['mobile design', 'voice design', 'multi-modal design', 'AI design', 'conversational design'],
    image:        './portfolio/alexa/profile/thumb.png',
    route: {
      name: 'alexaprofile'
    }
  },

  {
    hidden: true,
    company: companies.amazon,
    year:         '2019',
    title:        'Presence Detection',
    slug:         'presence-detection',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    image:        './portfolio/alexa/profile/thumb.png',
    route: {
      name: 'alexapresence'
    }
  },

  {
    hidden: true,
    company: companies.amazon,
    year:         '2019',
    title:        'Personalized Skills',
    slug:         'personalized-skills',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    image:        './portfolio/alexa/profile/thumb.png',
    route: {
      name: 'alexapersonalizedskills'
    }
  },

  {
    hidden: true,
    company: companies.amazon,
    year:         '2018',
    title:        'Voice Settings',
    slug:         'voice-settings',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    image:        './portfolio/alexa/profile/thumb.png',
    route: {
      name: 'alexavoicesettings'
    }
  },

  {
    featured: true,
    company: companies.amazon,
    year:         '2017',
    title:        'Alexa + Cortana',
    slug:         'alexa-cortana',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    tags:         ['voice design', 'multi-modal design', 'AI design', 'conversational design'],
    image:        './portfolio/alexa/alexa-cortana/thumb.png',
    route: {
      name: 'alexacortana'
    }
  },

  {
    company: companies.disney,
    year:         '2014',
    title:        'Enterprise Design System',
    slug:         'design-system',
    description:  'Creating an award-winning enterprise design system.',
    tags:         ['design system'],
    image:        './portfolio/disney/design-system/peek.png',
    route: {
      name: 'disneydesignsystem'
    }
  },

  {
    company: companies.disney,
    year:         '2017',
    title:        'Movie Greenlight',
    slug:         'greenlight',
    description:  'Innovating how Disney greenlights movies.',
    image:        './portfolio/disney/greenlight/peek.png',
    route: {
      name: 'disneygreenlight'
    }
  },

  {
    company: companies.disney,
    year:         '2017',
    title:        'Innovation Incubator',
    slug:         'incubator',
    description:  'Transforming how Disney Studios innovates.',
    tags:         ['r&d'],
    image:        './portfolio/disney/incubator/peek.png',
    route: {
      name: 'disneyinnovationprogram'
    }
  },

  {
    featured: true,
    company: companies.disney,
    year:         '2014',
    title:        'Filmmaking for Virtual Reality',
    slug:         'vr',
    description:  'Leading the VR conversation.',
    tags:         ['vr design', 'creative direction'],
    image:        './portfolio/disney/vr/peek.png',
    route: {
      name: 'disneyvr'
    }
  },

  {
    company: companies.disney,
    year:         '2016',
    title:        'Movie Slate',
    slug:         'slate',
    description:  'Innovating how Disney plans and tracks their slate of upcoming movies.',
    image:        './portfolio/disney/slate/peek.png',
    route: {
      name: 'disneymovieslate'
    }
  },

  {
    company: companies.phenomblue,
    year:         '2009',
    title:        'Microsoft Genesis',
    slug:         'genesis',
    description:  'A 3D, social space simulator.',
    tags:         ['game design', 'r&d', 'microsoft surface'],
    image:        './portfolio/phenomblue/genesis/peek.png',
    route: {
      name: 'pbgenesis'
    }
  },

  {
    company: companies.phenomblue,
    year:         '2013',
    route: {
      name: 'pbwildkingdom'
    },
    title:        'My Wild Kingdom',
    slug:         'wild-kingdom',
    description:  'A groundbreaking adventure app that brings the wild to any situation',
    tags:         ['mobile design'],
    image:        './portfolio/phenomblue/wild-kingdom/peek.png',
  },

  {
    company: companies.phenomblue,
    year:         '2012',
    route: {
      name: 'pbdinodig'
    },
    title:        'Operation: Dino Dig',
    slug:         'dino-dig',
    description:  'Social computing for learning and exploration.',
    tags:         ['microsoft surface'],
    image:        './portfolio/phenomblue/dino-dig/peek.png',
  },

  {
    company: companies.phenomblue,
    year:         '2013',
    route: {
      name: 'pbpage'
    },
    title:        'Page',
    slug:         'page',
    description:  'Breaking down the "fifth wall" of reading and literature.',
    tags:         ['ar design', 'mobile design', 'r&d'],
    image:        './portfolio/phenomblue/page/peek.png',
  },

  {
    company: companies.phenomblue,
    year:         '2012',
    route: {
      name: 'pbmovielotto'
    },
    title:        'Movie Lotto',
    slug:         'movie-lotto',
    description:  'Social gaming in theaters.',
    tags:         ['design system', 'r&d'],
    image:        './portfolio/phenomblue/movie-lotto/peek.png',
  },

  {
    company: companies.phenomblue,
    year:         '2012',
    title:        'Fantastic Future Me',
    slug:         'fantastic-future-me',
    description:  'Encouraging kids to reach their Future Me.',
    tags:         ['public installation'],
    image:        './portfolio/phenomblue/fantastic-future-me/peek.png',
    route: {
      name: 'pbfantasticfutureme'
    }
  },

  {
    company: companies.phenomblue,
    year:         '2009',
    title:        'Moppet Mashup',
    slug:         'moppet-mashup',
    description:  'A social, large-format interactive experience.',
    tags:         ['microsoft surface', 'public installation', 'r&d'],
    image:        './portfolio/phenomblue/moppet-mashup/peek.png',
    route: {
      name: 'pbmoppetmashup'
    }
  },

  {
    hidden: true,
    company: companies.phenomblue,
    year:         '2012',
    route: {
      name: 'pbtums'
    },
    title:        'TUMS: Food Fight',
    slug:         'tums',
    description:  'A branded Facebook game.',
    tags:         ['game design'],
    image:        './portfolio/phenomblue/tums/peek.png',
  },
]

export default data;
