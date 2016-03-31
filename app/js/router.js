angular.module('myApp')
.config([
  '$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('base', {

      url: '',
      views: {
        '@': {
          templateUrl: 'templates/startPage/layout.html'
        },
        'header@base': {
          templateUrl: 'templates/startPage/header.html',
          controller: 'HeadeListController'
        },
        'main@base': {
          templateUrl: 'templates/startPage/main.html',
          controller: 'MainListController'
        },
        'footer@base': {
          templateUrl: 'templates/startPage/footer.html'
        }
      }
    })
    .state('base.index', {
      url: '/',
      views: {
        'main@base': {
          templateUrl: 'templates/startPage/main.html',
          controller: 'MainListController'
        }
      }
    })
    .state('base.more', {
      url: '/about/:id',
      views: {
        'main@base': {
          templateUrl: 'templates/single-more.html',
          controller: 'SingleMoreController'
        }
      }
    })
    .state('base.portfolio', {
      url: '/portfolio',
      views: {
        'main@base': {
          templateUrl: 'templates/portfolio.html',
          controller: 'PortfolioListController'
        }
      }
    })
    .state('base.portfolioExpanded', {
      url: '/portfolio/:id/:anotherParam',
      views: {
        'main@base': {
          templateUrl: 'templates/portfolio-expanded.html',
          controller: 'PortfolioListExpandedController'
        }
      }
    })
    .state('base.portfolioAlt', {
      url: '/portfolio/:id/:anotherParam/:anotherId',
      views: {
        'main@base': {
          templateUrl: 'templates/portfolio-alt.html',
          controller: 'PortfolioViewController'
        }
      }
    })
    .state('base.video', {
      url: '/video',
      views: {
        'main@base': {
          templateUrl: 'templates/video.html',
          controller: 'VideoListController'
        }
      }
    })
    .state('base.songs', {
      url: '/songs',
      views: {
        'main@base': {
          templateUrl: 'templates/songs.html',
          controller: 'SongsListController'
        }
      }
    })
    .state('base.contact', {
      url: '/contact',
      views: {
        'main@base': {
          templateUrl: 'templates/contact.html',
          controller: 'ContactController'
        }
      }
    })
    .state('base.news', {
      url: '/news',
      views: {
        'main@base': {
          templateUrl: 'templates/news.html',
          controller: 'newsListController'
        }
      }
    })
    .state('base.newsView', {
      url: '/news/:id',
      views: {
        'main@base': {
          templateUrl: 'templates/news-singel.html',
          controller: 'newsViewController'
        }
      }
    })

    $urlRouterProvider.otherwise('/');
  }]);
