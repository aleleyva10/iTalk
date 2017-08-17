myApp.controller('PhrasesController', function($scope, PhrasesService, UserService) {
  console.log('PhrasesController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.listPhrase = true;
  vm.spanishPhrase = false;
  vm.englishPhrase = false;
  vm.phrasebook = [];
  vm.favorites = [];
  vm.allPhrases = [];

  $scope.responsiveVoice = responsiveVoice;


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
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(function() {
      console.log('in delete', phrases);
      PhrasesService.deletePhrases(phrases._id).then(function(response) {
        console.log('delete complete');
        vm.getAllPhrases();
        swal(
          'Deleted!',
          'Your phrase has been deleted.',
          'success'
        );
      });
    }).catch(swal.noop);

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
      swal(
        'Good job!',
        'Phrase added to Favorites!',
        'success'
      );
    });
    vm.getFavorites();
  }; // end addToFavorites

  vm.getFavorites = function(phrases) {
    console.log('in get favorites', phrases);
    PhrasesService.getFavorites().then(function() {

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
      );
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
        phrases.enphrase,
        response.data.text
      );
    });
  };

  vm.translateFavoritesEn = function(phrases) {
    console.log('in translate favorites', phrases);
    PhrasesService.translateFavoritesEn(phrases._id).then(function(response) {
      swal(
        phrases.esphrase,
        response.data.text
      );
    });
  };

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
