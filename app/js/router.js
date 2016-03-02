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
            //controller: 'ProfileController'
        },
        'header@base': {
          templateUrl: 'templates/startPage/header.html'
          //controller: 'ParallaxExampleCtrl'
          //controller: 'ProfileController'
          // controller: 'headerController'
        },
        'main@base': {
          templateUrl: 'templates/startPage/main.html',
          controller: 'MainListController'
        },
        'footer@base': {
          templateUrl: 'templates/startPage/footer.html'
        //  controller: 'ProfileController'
          // controller: 'headerController'
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
    .state('base.portfolioAlt', {
      url: '/portfolio/:id',
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
    .state('base.music', {
      url: '/music',
      views: {
        'main@base': {
          templateUrl: 'templates/music.html',
          controller: 'MusicListController'
        }
      }
    })
    .state('base.musicView', {
      url: '/music/:id',
      views: {
        'main@base': {
          templateUrl: 'templates/music-view.html',
          controller: 'MusicViewController'
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
