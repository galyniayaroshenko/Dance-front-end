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
    .state('base.videoView', {
      url: '/video/:id',
      views: {
        'main@base': {
          templateUrl: 'templates/video-view.html',
          controller: 'VideoViewController'
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
    // .state('base.songsView', {
    //   url: '/songs/:id',
    //   views: {
    //     'main@base': {
    //       templateUrl: 'templates/songs-view.html',
    //       controller: 'SongsViewController'
    //     }
    //   }
    // })

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
    // .state('base.contactDescription', {
    //   url: '/contact/:id',
    //   views: {
    //     'main@base': {
    //       templateUrl: 'templates/single.html'
    //       //controller: 'MusicEditController'
    //     }
    //   }
    // })
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
    //
    // .state('base.viewAlbums', {
    //   url: '/albums/:id',
    //   views: {
    //     'main@base': {
    //       templateUrl: 'templates/viewAlbums.html',
    //       controller: 'AlbumsViewController'
    //     }
    //   }
    // })
    //
    //
    //
    // .state('base.genre', {
    //   url: '/genre',
    //   views: {
    //     'main@base': {
    //       templateUrl: 'templates/genre.html',
    //       controller: 'GenreListController'
    //     }
    //   }
    // })
    // .state('base.viewGenre', {
    //   url: '/genre/:id',
    //   views: {
    //     'main@base': {
    //       templateUrl: 'templates/genreView.html',
    //       controller: 'GenreViewController'
    //     }
    //   }
    // })
    // .state('base.likes', {
    //   url: '/likes',
    //   views: {
    //     'main@base': {
    //       templateUrl: 'templates/likes.html'
    //       //controller: 'GenreViewController'
    //     }
    //   }
    // })
    //
    // .state('base.performer', {
    //   url: '/performer',
    //   views: {
    //     'main@base': {
    //       templateUrl: 'templates/performers.html',
    //       controller: 'PerformerListController'
    //     }
    //   }
    // })







    // .state('base.profile', {
    //   url: '/player',
    //   views: {
    //     'main@base': {
    //       templateUrl: 'templates/player.html',
    //       controller: 'PlayerController'
    //     }
    //   }
    // })




    // .state('base.profile2', {
    //   url: '/player2',
    //   views: {
    //     'main@base': {
    //       templateUrl: 'templates/player2.html',
    //       controller: 'PlayerController2'
    //     }
    //   }
    // })





    // .state('base.newProfile', {
    //   url: '/profile/new',
    //   views: {
    //     'main@base': {
    //       templateUrl: 'templates/profile-new.html',
    //       controller: 'ProfileCreateController'
    //     }
    //   }
    // })
    // .state('base.editProfile', {
    //   url: '/profile/:id/edit',
    //   views: {
    //     'main@base': {
    //       templateUrl: 'templates/profile-edit.html',
    //       controller: 'ProfileEditController'
    //     }
    //   }
    // })
    // .state('base.viewAllProfile', {
    //   url: '/profile/viewAll',
    //   views: {
    //     'main@base': {
    //       templateUrl: 'templates/profile-view-all.html',
    //       controller: 'ProfileViewAllController'
    //     }
    //   }
    // })





    // .state('acount', {
    //   url: '/acount',
    //   views: {
    //     '@': {
    //       templateUrl: 'templates/startPage/anonymous.html'
    //     },
    //   }
    // })





    // .state('acount.signup', {
    //   url: '/signup/new',
    //   views: {
    //     'content@acount': {
    //       templateUrl: 'templates/signup.html',
    //       controller: 'signupController'
    //
    //     }
    //   }
    // })



    // .state('acount.signin', {
    //   url: '/signin',
    //   views: {
    //     'content@acount': {
    //       templateUrl: 'templates/signin.html',
    //       controller: 'signinController'
    //
    //     }
    //   }
    // })


    $urlRouterProvider.otherwise('/');
  }]);
