const router = require("express").Router();
const google = require ("./google");
const madlib = require("./madlib");
// const articleRoutes = require("./articles");
// const nytRoutes = require("./nyt");
// NYT routes
// router.use("/articles", articleRoutes);
// router.use("/nyt", nytRoutes);
// router.use("/google", google);
router.get('/', google);
router.get('/noun', madlib);

module.exports = router;
