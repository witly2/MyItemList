const express = require('express');
const article = require('../controllers/articleController');
const tableauArticle = require('../controllers/tableauController');


const router = express.Router();

//router.get('/tableauArticle', article.getListeArticleByIdListe);


router.get('/tableauArticle/:tableauId', article.getListeArticleByIdListe);
router.post('/addTableauArticle', article.addListeArticle);
module.exports = router;
