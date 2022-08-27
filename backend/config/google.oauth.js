const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
require("dotenv").config();

const UserModel = require("../models/UserModel");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/google/callback",
      scope: ["profile", "email"],
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      const user = await UserModel.findOne({ email: profile.email });
      console.log(profile)
      if (!user) {
        const newUser = new UserModel({
          username: profile.displayName,
          email: profile.email,
        });
        await newUser.save();
      }
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
