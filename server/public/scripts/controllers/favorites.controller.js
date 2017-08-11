myApp.controller('FavoritesController', function(UserService, PhrasesService) {
  console.log('FavoritesController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.favorites = [];
  vm.phrasebook = [];

  vm.addToFavorites = function(phrases) {
    console.log('in add to favorites', phrases);
    PhrasesService.addToFavorites(phrases._id).then(function() {
    });
  };

  vm.getFavorites = function() {
    console.log('in controller, getFavorites');
    PhrasesService.getFavorites().then(function(){
      vm.phrasebook = PhrasesService.data;
      console.log('back in controller with:', vm.phrasebook);
    });
  }; // end getPhrasebook

vm.getFavorites();

}); // end favorites controller
