galacticJump.controller('LifeForcesCtrl', function LifeForcesCtrl($scope, LifeForcesFactory) {
  $scope.lifeForce = LifeForcesFactory.lifeForces;
  $scope.LifeForcesFactory = LifeForcesFactory;
});
