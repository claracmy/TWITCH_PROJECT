angular.module('twitch-friends').controller('mainCtrl', mainCtrl);

mainCtrl.$inject = ['$state', '$rootScope', 'currentUserService', '$auth'];
function mainCtrl($state, $rootScope, currentUserService, $auth) {
  const vm = this;

  $rootScope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };

  $rootScope.$on('loggedIn', () => {
    vm.user = currentUserService.currentUser;
  });
}
