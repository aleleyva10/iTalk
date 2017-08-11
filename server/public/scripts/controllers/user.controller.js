myApp.controller('UserController', function(UserService, PhrasesService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;


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
    vm.enphrase = '';
  }; // end addToPhrasebook


  vm.getPhrasebook = function() {
    console.log('in controller, getPhrasebook');
    PhrasesService.getPhrasebook().then(function(){
      vm.phrasebook = PhrasesService.data;
      console.log('back in controller with:', vm.phrasebook);
    });
  }; // end getPhrasebook


}); // end user controller
