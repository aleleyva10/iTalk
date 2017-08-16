myApp.controller('PhrasesController', function(PhrasesService, UserService) {
  console.log('PhrasesController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.listPhrase = true;
  vm.spanishPhrase = false;
  vm.englishPhrase = false;
  vm.phrasebook = [];
  vm.favorites = [];
  vm.allPhrases =[];

  vm.getPhrasebook = function() {
    console.log('in controller, getPhrasebook');
    PhrasesService.getPhrasebook().then(function() {
      vm.phrasebook = PhrasesService.data;
      console.log('back in controller with:', vm.phrasebook);
    });
  }; // end getPhrasebook

  vm.getAllPhrases = function() {
    console.log('in controller, getAllPhrases');
    PhrasesService.getAllPhrases().then(function() {
      vm.allPhrases = PhrasesService.data;
      console.log('back in controller with:', vm.allPhrases);
    });
  }; // end getAllPhrases

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
    vm.getFavorites();
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

  vm.phrasesList = function() {
    vm.listPhrase = !vm.listPhrase;
    console.log('in  phrasesList');
  }; // end phrasesList

  vm.spanishPhrases = function() {
    vm.spanishPhrase = !vm.spanishPhrase;
    console.log('in spanishPhrase');
  }; // end spanishPhrases

  vm.englishPhrases = function() {
    vm.englishPhrase = !vm.englishPhrase;
    console.log('in englishPhrase');
  }; // end englishPhrases
  vm.getPhrasebook();
  vm.getAllPhrases();

}); // end phrases controller
