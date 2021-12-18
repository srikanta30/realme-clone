var passport = require('passport');

const fbPassport = passport;

require("dotenv").config();

const { v4: uuidv4 } = require('uuid');

const FacebookStrategy = require('passport-facebook').Strategy;

const User = require('../models/user.model');

const {newToken} = require('../controllers/auth.controller');

const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, BACKEND_URL } = process.env;

const url = `${BACKEND_URL}`;

fbPassport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: `${url}/auth/facebook/callback`,
    profileFields: ['displayName', 'name', 'photos', 'email']
  },
  async function(accessToken, refreshToken, profile, cb) {

      let user = await User.findOne({email: profile?._json?.email});

      if(!user){
          user = await User.create({
            email: profile?._json?.email,
            password: uuidv4()
          });
      }
  
  
      const token = newToken(user);

    return cb(null, {user, token});
  }
));

module.exports = fbPassport;