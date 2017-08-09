myApp.controller('PhrasesController', function(PhrasesService, UserService) {
  console.log('PhrasesController created');
  var vm = this;
  vm.allPhrase = false;
  vm.spanishPhrase = false;
  vm.englishPhrase = false;
  vm.phrasebook = [];


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
  };


  vm.allPhrases = function() {
    vm.allPhrase = !vm.allPhrase;
    console.log('in  allPhrase');
  };

  vm.spanishPhrases = function() {
      vm.spanishPhrase = !vm.spanishPhrase;
      console.log('in spanishPhrase');
    };

    vm.englishPhrases = function() {
      vm.englishPhrase = !vm.englishPhrase;
      console.log('in englishPhrase');
    };

  vm.getPhrasebook();

}); // end controller
