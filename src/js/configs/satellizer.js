angular.module('twitch-friends').config(Authentication);

Authentication.$inject = ['$authProvider'];

function Authentication($authProvider) {
  $authProvider.loginUrl = '/api/login';
  $authProvider.twitch({
    clientId: 'eb1tb9iqo5qndbi547weynru6of7rf',
    url: '/api/oauth/twitch',
    authorizationEndpoint: 'https://api.twitch.tv/kraken/oauth2/authorize',
    redirectUri: 'http://localhost:7000',
    requiredUrlParams: ['scope'],
    scope: ['user_read'],
    scopeDelimiter: ' ',
    display: 'popup',
    oauthType: '2.0',
    popupOptions: { width: 500, height: 560 }
  });
}
