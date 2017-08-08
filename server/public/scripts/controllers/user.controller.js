myApp.controller('UserController', function(UserService) {
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
  UserService.addToPhrasebook(newPhrases).then(function(){
    console.log('back in controller after post');
    vm.getPhrasebook();
  });
  vm.esphrase = '';
  vm.enphrase= '';
}; // end addToPhrasebook

vm.getPhrasebook = function() {
  console.log('in controller, getPhrasebook');
  UserService.getPhrasebook().then(function(){
    vm.phrasebook = UserService.data;
    console.log('back in controller with:', vm.phrasebook);
  });
}; // end getPhrasebook

vm.deletePhrases = function(phrases){
  console.log('in delete', phrases);
  UserService.deletePhrases(phrases._id).then(function(){
    vm.getPhrasebook();
  });
}; // end deletePhrases




});
