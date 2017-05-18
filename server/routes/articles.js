const express = require('express')
const router = express.Router()
const api = require('../controllers/articleController')
var passport = require('passport')

router.get('/', api.getAllArticles)
router.get('/:id', api.getById)
router.get('/search/:category', api.getByCategory)
router.get('/:id', api.updateArticle)
router.post('/', api.insertArticle)
router.delete('/:id', api.deleteArticle)


module.exports = router
