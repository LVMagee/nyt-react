// Require our savedArticle and comment models
var SavedArticle = require('../models/savedArticleModel');

module.exports = function(req, res) {

  // Create mongoose model
  var savedArticle = new SavedArticle({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
  });
  // Save data
  savedArticle.save(function(err) {
    if (err) {
      // console.log(err);
      res.json({status: 'error'})
    } else {
      // console.log('Saved');
      res.json({status: 'saved'})
    }
  });
  
}

// Require our savedArticle and comment models
var SavedArticle = require('../models/savedArticleModel');

module.exports = function(req, res) {
  SavedArticle
    .find()
    .exec(function(err,data) {
      if (err) {
      // console.log(err);
      res.json({status: 'error'})
    } else {
      // console.log(data);
      res.json(data)
    }
  })
}

// Require our savedArticle and comment models
var SavedArticle = require('../models/savedArticleModel');

module.exports = function(req, res) {

  // Remove saved article
  SavedArticle
    .remove({_id: req.params.id})
    .exec(function(err,data) {
      if (err) {
      // console.log(err);
      res.json({status: 'error'})
    } else {
      res.json({status: 'deleted'})
    }
  })
}