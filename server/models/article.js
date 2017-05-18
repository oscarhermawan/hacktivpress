const mongoose = require('mongoose')
const Schema = mongoose.Schema

var articleSchema = new Schema({
  author:{
    type: Schema.Types.ObjectId,
    ref:'User'
  },
  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  updatedAt:{
    type:Date,
    default:Date.now
  }
})

var Article = mongoose.model('Article', articleSchema)

module.exports = Article
