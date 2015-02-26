galacticJump.factory('CharactersFactory', function CharactersFactory() {
  var factory = {};
  factory.flurps = [];
  factory.customize = function () {
    factory.flurps.push({ name: factory.flurpName, hair: factory.hairColor, eyes: factory.eyeColor, howTall: factory.howTall, weight: factory.weight })
    factory.flurpName = null;
    factory.hairColor = null;
    factory.eyeColor = null;
    factory.howTall = null;
    factory.weight = null;
  };
  return factory;
});
