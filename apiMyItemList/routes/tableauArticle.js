const express = require('express');
const tableauArticle = require('../controllers/tableauController');


const router = express.Router();

//router.get('/tableauArticle', article.getListeArticleByIdListe);


router.get('/tableaux', tableauArticle.getListes);
router.post('/addTableau', tableauArticle.addListe)
module.exports = router;
