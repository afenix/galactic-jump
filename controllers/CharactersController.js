galacticJump.controller('CharactersCtrl', function CharactersCtrl($scope, CharactersFactory) {
  $scope.lifeForms = CharactersFactory.lifeForms;
  $scope.CharactersFactory = CharactersFactory;
});
