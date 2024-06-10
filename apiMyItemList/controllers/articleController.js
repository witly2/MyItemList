"use strict"

const Article = require('../models/article');
const Liste = require('../models/liste');
const ListeArticle = require('../models/listArticle');

exports.addListeArticle = async (req, res,next)=>{
    
    const {name, unit_price, quantity, description, idListe} = req.body;
    
    try {
        const article = await getOrAddArticle(name);

        const liste = checkListExist(idListe);
    
        let listeArticle = new ListeArticle({
            unit_price:unit_price,
            listeId: liste.id,
            quantity: quantity,
            description:description,
            articleId: article.id
        })
        
        const result = await listeArticle.save();
        res.location("/listeArticle/" + result.id);
        res.status(201).json(result)
        
    }
    catch (err){
        next(err)
    }
}

exports.getListeArticleByIdListe = async (req, res,next)=>{
    try{
        const listeId = req.params.listeId;
        const liste = await checkListExist(listeId);

        const result = await ListeArticle
            .find({ listeId: listeId })
            .populate({
                path: 'Article', 
            })
            .sort({ createdAt: -1 });

    }
    catch (e) {
        next(e)
    }
}

async function getOrAddArticle(articleName){
    try {
        let article = await Article.findOne({name: articleName})
        if (!article) {
            article = await Article.create({name: articleName});
        }
        
        return article;
    }
    catch (error){
        throw error;
    }
    
}
async function checkListExist(idListe){
    const liste = await Liste.findById(idListe)
    
    if(!liste){
        const error = new Error("Cette liste n'existe pas");
        error.statusCode = 404;
        throw error;
    }
    return liste;
}
