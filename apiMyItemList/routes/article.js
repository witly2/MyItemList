const express = require('express');
const article = require('../controllers/articleController');
const listeArticles = require('../controllers/listeController');


const router = express.Router();

//router.get('/listeArticles', article.getListeArticleByIdListe);


router.get('/listes', listeArticles.getListes);
router.get('/listeArticles/:listeId', article.getListeArticleByIdListe);
router.post('/addListArticle', article.addListeArticle);
router.post('/addList', listeArticles.addListe)
module.exports = router;
