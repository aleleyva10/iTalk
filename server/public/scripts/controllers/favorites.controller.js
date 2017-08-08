myApp.controller('FavoritesController', function(UserService) {
  console.log('FavoritesController created');
  var vm = this;
  vm.userService = UserService;
});
