export const companies = {
  rocket: {
    name: {
      long: 'Rocket Companies',
      short: 'Rocket'
    },
    slug: 'rocket'
  },

  amazon: {
    name: {
      long: 'Amazon',
      short: 'Amazon'
    },
    slug: 'amazon'
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

export default {
  // vitepress data loader
  load() {
    console.log('load companies')
    return companies;
  }
}
