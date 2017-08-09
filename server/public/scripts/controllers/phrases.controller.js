myApp.controller('PhrasesController', function(PhrasesService, UserService) {
  console.log('PhrasesController created');
  var vm = this;

  vm.phrasebook = [];
  vm.allPhrase = false;

  vm.getPhrasebook = function() {
    console.log('in controller, getPhrasebook');
    PhrasesService.getPhrasebook().then(function(){
      vm.phrasebook = PhrasesService.data;
      console.log('back in controller with:', vm.phrasebook);
    });
  }; // end getPhrasebook

  vm.deletePhrases = function(phrases){
    console.log('in delete', phrases);
    PhrasesService.deletePhrases(phrases._id).then(function(){
      vm.getPhrasebook();
    });
  }; // end deletePhrases

  vm.updatePhrases = function(phrases) {
    console.log('in update', phrases);
    PhrasesService.updatePhrases(phrases).then(function(){
      vm.getPhrasebook();
    });
  };
  vm.getPhrasebook();

});
