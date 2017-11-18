angular.module('usersShowCtrl', usersShowCtrl);

usersShowCtrl.$inject = ['User', '$stateParams'];

function usersShowCtrl(User, $stateParams) {
  const vm = this;
  User.get({ id: $stateParams.id }).$promise.then(user => {
    vm.user = user;
  });
}
