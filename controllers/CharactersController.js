galacticJump.controller('CharactersCtrl', function CharactersCtrl($scope, CharactersFactory, LifeForcesFactory) {
  $scope.lifeForms = CharactersFactory.lifeForms;
  $scope.CharactersFactory = CharactersFactory;
  $scope.lifeForces = LifeForcesFactory.lifeForces;
  $scope.LifeForcesFactory = LifeForcesFactory;
});
