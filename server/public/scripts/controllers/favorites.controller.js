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
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false
    }).then(function() {
      console.log('in delete favorites', phrases);
      PhrasesService.deleteFavorites(phrases._id).then(function(response) {
        vm.getFavorites();
      });
      swal(
        'Deleted!',
        'Your phrase has been deleted.',
        'success'
      )
    }, function(dismiss) {
      // dismiss can be 'cancel', 'overlay', 'close'
      if (dismiss === 'cancel') {
        swal(
          'Cancelled',
          'Your favorite phrase is safe :)',
          'error'
        );
      }
    }).catch(swal.noop);
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
        response.data.text,
        phrases.enphrase
      );
    });
  }; // end translateFavoritesEn


  vm.getFavorites();

}); // end favorites controller
