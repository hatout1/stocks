const password = require("passport");
const localStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const User = require("../models/user");

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookie) {
    token.cookies("access_token");
  }
  return token;
};

// Authorisation
password.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: "project4",
    },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        else return done(null, false);
      });
    }
  )
);

// Authorisation local strategy using emailand password
password.use(
  new localStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      user.comparePassword(password, done);
    });
  })
);
