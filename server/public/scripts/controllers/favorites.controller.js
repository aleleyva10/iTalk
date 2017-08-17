myApp.controller('FavoritesController', function($scope, UserService, PhrasesService) {
  console.log('FavoritesController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.favorites = [];
  vm.phrasebook = [];
  vm.allPhrases = [];

  $scope.responsiveVoice = responsiveVoice;

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

  vm.translateFavoritesEs = function(phrases) {
    console.log('in translate favorites', phrases);
    PhrasesService.translateFavoritesEs(phrases._id).then(function(response) {
      swal(
        response.data.text,
        phrases.esphrase
      );
    });
  }; // end translateFavoritesEs

  vm.translateFavoritesEn = function(phrases) {
    console.log('in translate favorites', phrases);
    PhrasesService.translateFavoritesEn(phrases._id).then(function(response) {
      swal(
        phrases.enphrase,
        response.data.text
      );
    });
  }; // end translateFavoritesEn


  vm.getFavorites();

}); // end favorites controller
