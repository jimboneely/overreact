// const db = require("../models");

// Defining methods for the articleController
module.exports = {
    getGoogleImages: function(req, res) {
        console.log(req.body);
        /*
            In here, we add logic that gest list of data
            Depending what we get from req.body
        */


        return res.json({"Image":["image1", "image2", "image3"]});
      },
    //   keeping below just for reference
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  }
};