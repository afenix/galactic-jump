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

  $stateProvider.state('openingScene', {
    url:"/openingScene",
    templateUrl: "partials/openingScene.html",
    controller: "CharactersCtrl"
  });

  $stateProvider.state('flurp2Earth', {
    url:"/flurp2Earth",
    templateUrl: "partials/flurp2Earth.html",
    controller: "CharactersCtrl"
  });

  $stateProvider.state('lumpySide', {
    url: "/lumpySide",
    templateUrl: "partials/lumpySide.html",
    controller: "CharactersCtrl"
  });

  $stateProvider.state('tendrilSide', {
    url: "/tendrilSide",
    templateUrl: "partials/tendrilSide.html",
    controller: "CharactersCtrl"
  });
});
