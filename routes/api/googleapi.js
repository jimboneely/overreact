const router = require("express").Router();
const articleController = require("../../Controller/Controller");

// Matches with "/api/articles"
router.route("/")
  .get("TestingGet")
  .post(Controller.getGoogleImage);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;
