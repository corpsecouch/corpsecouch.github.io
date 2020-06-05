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
  return `https://picsum.photos/200?random=${ Math.random()*1000 }`;
}

const data = [
  {
    featured: true,
    company: companies.alexa,
    year:         '2019',
    title:        'Alexa Profile',
    slug:         'profile',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    //image:        '../portfolio/alexa/profile/thumb.png',
    image: {
      dir:  'portfolio/alexa/profile',
      name: 'thumb',
      ext:  'png'
    },
    //image:        randomImage(),
    route: {
      name: 'alexaprofile'
    }
  },

  {
    hidden: true,
    company: companies.alexa,
    year:         '2019',
    title:        'Presence Detection',
    slug:         'presence-detection',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    image:        '/src/pages/portfolio/alexa/presence/thumb.jpg',//randomImage(),
    route: {
      name: 'alexapresence'
    }
  },

  {
    hidden: true,
    company: companies.alexa,
    year:         '2019',
    title:        'Personalized Skills',
    slug:         'personalized-skills',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    image:        randomImage(),
    route: {
      name: 'alexapersonalizedskills'
    }
  },

  {
    hidden: true,
    company: companies.alexa,
    year:         '2018',
    title:        'Voice Settings',
    slug:         'voice-settings',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    image:        randomImage(),
    route: {
      name: 'alexavoicesettings'
    }
  },

  {
    featured: true,
    company: companies.alexa,
    year:         '2017',
    title:        'Alexa + Cortana',
    slug:         'alexa-cortana',
    description:  'Connecting AIs from two of the world\'s largest companies; a world-first.',
    //image:     './dist/assets/portfolio/amazon/alexa-cortana/peek-lg.png',
    //image:        '../portfolio/alexa/alexa-cortana/thumb.png',
    image: {
      dir:  'portfolio/alexa/alexa-cortana',
      name: 'thumb',
      ext:  'png'
    },
    //image:        randomImage(),
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
    //image:     './dist/assets/portfolio/disney/design-system/peek.png',
    image:        randomImage(),
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
    //image:     './dist/assets/portfolio/disney/greenlight/peek.png',
    image:        randomImage(),
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
    //image:     './dist/assets/portfolio/disney/innovation-program/peek.png',
    image:        randomImage(),
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
    //image:     './dist/assets/portfolio/disney/vr/peek.png',
    //image:        '../portfolio/disney/vr/thumb.png',
    image: {
      dir:  'portfolio/disney/vr',
      name: 'thumb',
      ext:  'png'
    },
    //image:        randomImage(),
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
    //image:     './dist/assets/portfolio/disney/slate/peek.png',
    image:        randomImage(),
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
    //image:     './dist/assets/portfolio/phenomblue/genesis/peek.png',
    image:        randomImage(),
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
    //image:     './dist/assets/portfolio/phenomblue/my-wild-kingdom/peek.png'
    image:        randomImage()
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
    //image:     './dist/assets/portfolio/phenomblue/dino-dig/peek.png'
    image:        randomImage()
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
    //image:     './dist/assets/portfolio/phenomblue/page/peek.png'
    image:        randomImage()
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
    //image:     './dist/assets/portfolio/phenomblue/movie-lotto/peek.png'
    image:        randomImage()
  },

  {
    company: companies.phenomblue,
    year:         '2012',
    title:        'Fantastic Future Me',
    slug:         'fantastic-future-me',
    description:  'Encouraging kids to reach their Future Me.',
    image:     './dist/assets/portfolio/phenomblue/fantastic-future-me/peek.png',
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
    image:     './dist/assets/portfolio/phenomblue/moppet-mashup/peek.png',
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
    //image:     './dist/assets/portfolio/phenomblue/tums/peek.png'
    image:        randomImage()
  },
]

export default data;
