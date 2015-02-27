galacticJump.factory('LifeForcesFactory', function LifeForcesFactory() {
  var factory = {};
  factory.lifeForces = 3;

  factory.addLife = function () {
    factory.lifeForces = factory.lifeForces + 1;
  };

  factory.takeAHit = function () {
    factory.lifeForces = factory.lifeForces - 1;
  };
  return factory;
});
