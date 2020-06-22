const { Strategy, ExtractJwt } = require("passport-jwt");
const salt = "thisismysecretstringthelongerthebetter";
const models = require("./models");
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // need to add token to header
  secretOrKey: salt,
};

module.exports = (passport) => {
  passport.use(
    new Strategy(options, (payload, done) => {
      models.Author.findOne({ where: { email: payload.email } })
        .then((user) => {
          //success use exists
          return done(null, {
            id: user.id,
            email: user.email,
          });
        })
        .catch((error) => {
          console.log(error);
          return done(null, false);
        });
    })
  );
};
