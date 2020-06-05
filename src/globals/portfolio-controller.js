import portfolioData from 'data/portfolio';

const PortfolioController = {};

PortfolioController.install = function(Vue, options) {
  this.projects = _.orderBy(
    _.filter(
      portfolioData,
      o => { return !o.hidden; }),
    [ 'year' ],
    [ 'desc' ]);
  //console.log(this.projects);
};

PortfolioController.projects = [];

PortfolioController.load

PortfolioController.next = function() {

}

PortfolioController.prev = function() {

}

export default PortfolioController;
