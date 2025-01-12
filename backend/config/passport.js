require("dotenv").config();
const passport = require("passport");
const OAuth2Strategy = require("passport-oauth2");

const MastodonStrategy = new OAuth2Strategy(
    {
        authorizationURL: "https://mastodon.instance/oauth/authorize",
        tokenURL: "https://mastodon.instance/oauth/token",
        clientID: process.env.MASTODON_CLIENT_ID,
        clientSecret: process.env.MASTODON_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/mastodon/callback",
    },
    (accessToken, refreshToken, profile, done) => {
        return done(null, { accessToken, profile });
    }
);

passport.use("mastodon", MastodonStrategy);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));