//const slugs = {
//  alexa: "alexa",
//  disney: "disney",
//  phenomblue: "pb"
//}

const companies = {
  alexa: {
    name: {
      long: 'Amazon Alexa',
      short: 'Alexa'
    },
    slug: 'alexa'
  },
  disney: {
    name: {
      long: 'Walt Disney Studios',
      short: 'Disney'
    },
    slug: 'disney'
  },
  phenomblue: {
    name: {
      long: 'Phenomblue',
      short: 'Phenomblue'
    },
    slug: 'phenomblue'
  }
}

const randomImage = function() {
  return `https://picsum.photos/200?random=${Math.random()*1000}`;
}

const data = [
  /*{
    company: companies.alexa,
    title:        'Alexa Profile',
    slug:         'profile',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    image:        'https://picsum.photos/200?random=4',
    route: {
      name: 'alexacortana'
    }
  },

  {
    company: companies.alexa,
    title:        'Presence Detection',
    slug:         'presence-detection',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    image:        'https://picsum.photos/200?random=3',
    route: {
      name: 'alexacortana'
    }
  },

  {
    company: companies.alexa,
    title:        'Personalized Skills',
    slug:         'personalized-skills',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    image:        'https://picsum.photos/200?random=2',
    route: {
      name: 'alexacortana'
    }
  },

  {
    company: companies.alexa,
    title:        'Voice Settings',
    slug:         'voice-settings',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    image:        'https://picsum.photos/200?random=1',
    route: {
      name: 'alexacortana'
    }
  },*/

  {
    company: companies.alexa,
    title:        'Alexa + Cortana',
    slug:         'alexa-cortana',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    //image:     './dist/assets/portfolio/amazon/alexa-cortana/peek-lg.png',
    image:        randomImage(),
    route: {
      name: 'alexacortana'
    }
  },

  {
    company: companies.disney,
    title:        'Enterprise Design System',
    slug:         'design-system',
    description:  'Creating an award-winning enterprise design system.',
    //image:     './dist/assets/portfolio/disney/design-system/peek.png',
    image:        randomImage(),
    route: {
      name: 'disneydesignsystem'
    }
  },

  {
    company: companies.disney,
    title:        'Movie Greenlight',
    slug:         'greenlight',
    description:  'Innovating how Disney greenlights movies.',
    //image:     './dist/assets/portfolio/disney/greenlight/peek.png',
    image:        randomImage(),
    route: {
      name: 'disneygreenlight'
    }
  },

  {
    company: companies.disney,
    title:        'Innovation Incubator',
    slug:         'incubator',
    description:  'Transforming how Disney Studios innovates.',
    //image:     './dist/assets/portfolio/disney/innovation-program/peek.png',
    image:        randomImage(),
    route: {
      name: 'disneyinnovationprogram'
    }
  },

  {
    company: companies.disney,
    title:        'Filmmaking for Virtual Reality',
    slug:         'vr',
    description:  'eading the VR conversation.',
    //image:     './dist/assets/portfolio/disney/vr/peek.png',
    image:        randomImage(),
    route: {
      name: 'disneyvr'
    }
  },

  {
    company: companies.disney,
    title:        'Movie Slate',
    slug:         'slate',
    description:  'Innovating how Disney plans and tracks their slate of upcoming movies.',
    //image:     './dist/assets/portfolio/disney/slate/peek.png',
    image:        randomImage(),
    route: {
      name: 'disneymovieslate'
    }
  },

  {
    company: companies.phenomblue,
    title:        'Microsoft Genesis',
    slug:         'genesis',
    description:  'A 3D, social space simulator.',
    //image:     './dist/assets/portfolio/phenomblue/genesis/peek.png',
    image:        randomImage(),
    route: {
      name: 'phenombluegenesis'
    }
  },

  {
    company: companies.phenomblue,
    /*route: {
      name: 'pbwildkingdom'
    },*/
    title:        'My Wild Kingdom',
    slug:         'wild-kingdom',
    description:  'A groundbreaking adventure app that brings the wild to any situation',
    //image:     './dist/assets/portfolio/phenomblue/my-wild-kingdom/peek.png'
    image:        randomImage()
  },

  {
    company: companies.phenomblue,
    /*route: {
      name: 'pbdinodig'
    },*/
    title:        'Operation: Dino Dig',
    slug:         'dino-dig',
    description:  'Social computing for learning and exploration.',
    //image:     './dist/assets/portfolio/phenomblue/dino-dig/peek.png'
    image:        randomImage()
  },

  {
    company: companies.phenomblue,
    /*route: {
      name: 'pbpage'
    },*/
    title:        'Page',
    slug:         'page',
    description:  'Breaking down the "fifth wall" of reading and literature.',
    //image:     './dist/assets/portfolio/phenomblue/page/peek.png'
    image:        randomImage()
  },

  {
    company: companies.phenomblue,
    /*route: {
      name: 'pbmovielotto'
    },*/
    title:        'Movie Lotto',
    slug:         'movie-lotto',
    description:  'Social gaming in theaters.',
    //image:     './dist/assets/portfolio/phenomblue/movie-lotto/peek.png'
    image:        randomImage()
  },

  /*{
    company: companies.phenomblue,
    title:        'Fantastic Future Me',
    slug:         'fantastic-future-me',
    description:  'Encouraging kids to reach their Future Me.',
    image:     './dist/assets/portfolio/phenomblue/fantastic-future-me/peek.png',
    route: {
      name: 'phenombluefantasticfutureme'
    }
  },

  {
    company: companies.phenomblue,
    title:        'Moppet Mashup',
    slug:         'moppet-mashup',
    description:  'A social, large-format interactive experience.',
    image:     './dist/assets/portfolio/phenomblue/moppet-mashup/peek.png',
    route: {
      name: 'phenombluemoppetmashup'
    }
  },*/

  {
    company: companies.phenomblue,
    /*route: {
      name: 'pbtums'
    },*/
    title:        'TUMS: Food Fight',
    slug:         'tums',
    description:  'A branded Facebook game.',
    //image:     './dist/assets/portfolio/phenomblue/tums/peek.png'
    image:        randomImage()
  },
]

export default data;
