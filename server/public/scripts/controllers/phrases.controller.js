myApp.controller('PhrasesController', function(PhrasesService, UserService) {
  console.log('PhrasesController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.allPhrase = true;
  vm.spanishPhrase = false;
  vm.englishPhrase = false;
  vm.phrasebook = [];
  vm.favorites = [];


  vm.getPhrasebook = function() {
    console.log('in controller, getPhrasebook');
    PhrasesService.getPhrasebook().then(function() {
      vm.phrasebook = PhrasesService.data;
      console.log('back in controller with:', vm.phrasebook);
    });
  }; // end getPhrasebook

  vm.deletePhrases = function(phrases) {
    console.log('in delete', phrases);
    PhrasesService.deletePhrases(phrases._id).then(function() {
      vm.getPhrasebook();
    });
  }; // end deletePhrases

  vm.updatePhrases = function(phrases) {
    console.log('in update', phrases);
    PhrasesService.updatePhrases(phrases).then(function() {
      vm.getPhrasebook();
    });
  }; // end updatePhrases

  vm.addToFavorites = function(phrases) {
    console.log('in add to favorites', phrases);
    PhrasesService.addToFavorites(phrases._id).then(function() {
    });
  }; // end addToFavorites

  vm.getFavorites = function(phrases) {
    console.log('in get favorites', phrases);
    PhrasesService.getFavorites().then(function() {
    });
  }; // end getFavorites

  vm.deleteFavorites = function(phrases) {
    console.log('in delete', phrases);
    PhrasesService.deleteFavorites(phrases._id).then(function() {
    });
  }; // end deleteFavorites

  vm.allPhrases = function() {
    vm.allPhrase = !vm.allPhrase;
    console.log('in  allPhrase');
  }; // end allPhrases

  vm.spanishPhrases = function() {
    vm.spanishPhrase = !vm.spanishPhrase;
    console.log('in spanishPhrase');
  }; // end spanishPhrases

  vm.englishPhrases = function() {
    vm.englishPhrase = !vm.englishPhrase;
    console.log('in englishPhrase');
  }; // end englishPhrases

  vm.getPhrasebook();

}); // end phrases controller
