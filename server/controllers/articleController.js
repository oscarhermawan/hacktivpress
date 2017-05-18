var ObjectId = require('mongodb').ObjectId
var db = require('../models/article')
const methods = {}


methods.getAllArticles =function(req,res){
  db.find({})
  .populate('author', 'username name')
  .exec((error, records)=>{
    if(error){
      res.send(error)
    } else {
      res.send(records)
    }
  })
}//GET ALL

//GET ONE BY ID
methods.getById = function(req,res){
  db.findOne({_id:req.params.id})
  .populate('author', 'username name')
  .exec((error, record)=>{
    if(error){
      res.send(error)
    } else {
      res.send(record)
    }
  })
}//GET ONE BY ID

//SEARCH
methods.getByCategory = function(req,res){
  db.find({category:req.params.category})
  .populate('author', 'username name')
  .exec((error, record)=>{
    if(error){
      res.send(error)
    } else {
      res.send(record)
    }
  })
}//SEARCH


//INSERT ARTICLE
methods.insertArticle = function(req, res){
  console.log(req.body);
  db.create(req.body, function(error, record){
    if(error){
      res.send(error)
    } else {
      res.send(record)
    }
  })
}//INSERT ARTICLE

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
