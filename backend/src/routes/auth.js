const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get("/mastodon", passport.authenticate("mastodon"));

router.get(
    "/mastodon/callback",
    passport.authenticate("mastodon", { failureRedirect: "/" }),
    (req, res) => {
        res.json({ token: req.user.accessToken });
    }
);

module.exports = router;