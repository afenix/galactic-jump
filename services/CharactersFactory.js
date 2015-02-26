galacticJump.factory('CharactersFactory', function CharactersFactory() {
  var factory = {};
  factory.lifeForms = []

  factory.customize = function () {
    factory.lifeForms.push({ lifeForm: factory.lifeForm factory.flurpName, eyes: factory.eyeColor, howTall: factory.howTall, weight: factory.weight })
    factory.class = null;
    factory.flurpName = null;
    factory.hairColor = null;
    factory.eyeColor = null;
    factory.howTall = null;
    factory.weight = null;
  };
  return factory;
});
