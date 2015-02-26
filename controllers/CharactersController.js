galacticJump.controller('CharactersCtrl', function CharactersCtrl($scope, CharactersFactory) {
  $scope.flurps = CharactersFactory.flurps;
  $scope.CharactersFactory = CharactersFactory;
});
