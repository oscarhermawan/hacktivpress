var ObjectId = require('mongodb').ObjectId
var db = require('../models/article')
const methods = {}

//GET ALL ARTICLE
methods.getAllArticles = function(req, res) {
  db.find(function(err, record) {
    if(err){
      res.send(err);
    } else {
      res.send(record)
    }
  })
}//GET ALL ARTICLE

//GET ONE BY ID
methods.getById = function(req,res){
  db.findById(req.params.id, function(error, record){
    if(error){
      res.send(error)
    } else {
      res.send(record)
    }
  })
}//GET ONE BY ID

//INSERT ARTICLE
methods.insertArticle = function(req, res){
  console.log(req.body);
  var articleInput = new db({
    author:req.body.author,
    title:req.body.title,
    content:req.body.content,
    category:req.body.category
  })
  articleInput.save(function(err,result){
    if(err){
      res.send(err)
    } else {
      res.send(result)
    }
  })
}//INSERT ARTICLE

// //INSERT ARTICLE
// methods.insertArticle = function(req, res){
//   console.log(req.body);
//   db.create(req.body, function(error, record){
//     if(error){
//       res.send(error)
//     } else {
//       res.send(record)
//     }
//   })
// }//INSERT ARTICLE

//UPDATE ARTICLE
methods.updateArticle = function(req,res) {
  db.findByIdAndUpdate(req.params.id, {$set : req.body }, {new:true})
  .exec((error, record)=>{
    if(error){
      res.send(error)
    } else {
      res.send(record)
    }
  })
}//UPDATE ARTICLE

//DELETE ARTICLE
methods.deleteArticle = function(req,res) {
  db.findByIdAndRemove(req.params.id, function(err, record){
    if(!err){
      res.send(record)
    } else {
      res.send(err)
    }
  })
}//DELETE ARTICLE

module.exports = methods
