const router = require("express").Router();
const googleApiController = require("../../Controller/googleApiController");

/*
  This will go to the googleApiController and depending on the req.body,
  it will go to the controller and return an array of 3 image URL's
*/
router.route("/")
  .get(googleApiController.getGoogleImages);


module.exports = router;
