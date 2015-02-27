galacticJump.factory('CharactersFactory', function CharactersFactory() {
  var factory = {};
  factory.lifeForms = []

  factory.customize = function () {
    factory.lifeForms.push({ lifeType: factory.lifeType, name: factory.flurpName, gender: factory.gender, eyes: factory.eyeColor, height: factory.howTall, weight: factory.weight })
    factory.lifeType = null;
    factory.flurpName = null;
    factory.gender = null;
    factory.hairColor = null;
    factory.eyeColor = null;
    factory.howTall = null;
    factory.weight = null;
  };
  return factory;
});
