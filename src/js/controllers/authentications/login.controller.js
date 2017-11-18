angular.module('twitch-friends').controller('loginCtrl', loginCtrl);

loginCtrl.$inject = ['$auth', '$rootScope', '$state', 'currentUserService'];

function loginCtrl($auth, $rootScope, $state, currentUserService) {
  const vm = this;

  vm.authenticate = () => {
    $auth
      .authenticate('twitch')
      .then(res => {
        currentUserService.getUser();
        $state.go('usersShow', { id: res.data.user.id });
      })
      .catch(res => console.log(res));
  };
}
