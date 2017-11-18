const oauths = require('../config/oauths');
const User = require('../models/user');
const passport = require('passport');
const twitchStrategy = require('passport-twitch').Strategy;

function twitch() {
  passport.use(
    new twitchStrategy(
      {
        clientID: oauths.twitch.clientId,
        clientSecret: oauths.twitch.clientSecret,
        callbackURL: oauths.twitch.redirectUri,
        scope: 'user_read'
      },
      function(accessToken, refreshToken, profile, done) {
        console.log('hihihi');
        User.findOrCreate({ username: profile.id }, function(err, user) {
          return done(err, user);
        });
      }
    )
  );
}

module.exports = {
  twitch
};
