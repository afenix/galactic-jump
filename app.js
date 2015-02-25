var galacticJump = angular.module('galacticJump', ['ui.router']);

galacticJump.config(function($stateProvider) {
  $stateProvider.state('home', {
    url:"",
    templateUrl: "partials/home.html"
  });
});
