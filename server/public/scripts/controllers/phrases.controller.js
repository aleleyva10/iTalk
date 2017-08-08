myApp.controller('PhrasesController', function(UserService) {
  console.log('PhrasesController created');
  var vm = this;
  vm.userService = UserService;
});
