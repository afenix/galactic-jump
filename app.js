var galacticJump = angular.module('galacticJump', ['ui.router']);

galacticJump.config(function($stateProvider) {
  $stateProvider.state('home', {
    url:"",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('characterCreation', {
    url: "/characterCreation",
    templateUrl: "partials/characterCreation.html",
    controller: "CharactersCtrl"
  });
});
