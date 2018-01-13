const router = require("express").Router();
const google = require ("./google");
// const articleRoutes = require("./articles");
// const nytRoutes = require("./nyt");

// NYT routes
// router.use("/articles", articleRoutes);

// router.use("/nyt", nytRoutes);

router.use("/google", google);

module.exports = router;
