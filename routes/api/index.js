const router = require("express").Router();
const googleapi = require ("./googleapi");
// const articleRoutes = require("./articles");
// const nytRoutes = require("./nyt");

// NYT routes
// router.use("/articles", articleRoutes);

// router.use("/nyt", nytRoutes);

router.use("/google", googleapi);

module.exports = router;
