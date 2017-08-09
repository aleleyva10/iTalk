myApp.controller('UserController',['UserService', '$http', function(UserService, $http) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;

}]);
