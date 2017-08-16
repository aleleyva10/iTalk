myApp.controller('FavoritesController', function(UserService, PhrasesService) {
  console.log('FavoritesController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.favorites = [];
  vm.phrasebook = [];
  vm.readPhrase = [];
  vm.allPhrases =[];

  vm.addToFavorites = function(phrases) {
    console.log('in add to favorites', phrases);
    PhrasesService.addToFavorites(phrases._id).then(function() {
      console.log('favorites added');
    });
    vm.getFavorites();
  }; // end addToFavorites

  vm.getFavorites = function() {
    console.log('in controller, getFavorites');
    PhrasesService.getFavorites().then(function() {
      vm.allPhrases = PhrasesService.data;
      console.log('back in controller with:', vm.allPhrases);
    });
  }; // end getFavorites

  vm.deleteFavorites = function(phrases) {
    console.log('in delete', phrases);
    PhrasesService.deleteFavorites(phrases._id).then(function() {
      console.log('favorites deleted');
      vm.getFavorites();
    });
  }; // end deleteFavorites

  vm.readPhrase = function(phrases) {
    console.log('in readPhrase');
    PhrasesService.readPhrase(phrases._id).then(function() {

      console.log('reading phrases');
    });
  }; // end readPhrase


  vm.getFavorites();



}); // end favorites controller
