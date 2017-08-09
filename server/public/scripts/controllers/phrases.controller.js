myApp.controller('PhrasesController', function(PhrasesService, UserService) {
  console.log('PhrasesController created');
  var vm = this;

  vm.phrasebook = [];
  vm.allPhrase = false;

vm.addToPhrasebook = function() {
  var newPhrases = {
    esphrase: vm.esphrase,
    enphrase: vm.enphrase,
  };
  console.log('in controller sending:', newPhrases);
  PhrasesService.addToPhrasebook(newPhrases).then(function() {
    console.log('back in controller after post');
    vm.getPhrasebook();
  });
  vm.esphrase = '';
  vm.enphrase= '';
}; // end addToPhrasebook


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

});
