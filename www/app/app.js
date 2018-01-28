angular.module("eliteApp",["ionic"])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  
        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider,$urlRouterProvider){
      $stateProvider
        .state('home',{
          abstract:true,
          url:'/home',
          templateUrl:'app/home/home.html'
        })

        .state('home.leagues',{
          url:"/leagues",
          views:{
            "tab-leagues":{
              templateUrl:"app/home/leagues.html"
            }
          }
        })

        .state('home.myteams',{
          url:"/myteams",
          views:{
            "tab-myteams":{
              templateUrl:"app/home/myteams.html"
            }
          }
        })

        .state('app',{
          url:'/app',
          templateUrl:'app/layout/menu-layout.html'
        });

    $urlRouterProvider.otherwise('/home/leagues');
    
  })