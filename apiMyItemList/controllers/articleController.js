"use strict"

const Article = require('../models/article');
const Liste = require('../models/liste');
const ListeArticle = require('../models/listArticle');

exports.addListeArticle = async (req, res,next)=>{
    
    const {name, unit_price, quantity, description, idListe} = req.body;
    
    try {
        const article = await getOrAddArticle(name);

        const liste = await checkListExist(idListe);
        
    
        let listeArticle = new ListeArticle({
            unit_price:unit_price,
            liste: liste,
            quantity: quantity,
            description:description,
            article: article
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
            .find({ liste: liste })
            .populate({
                name: 'Article', 
            })
            .sort({ createdAt: -1 });
        
        for(let a in ListeArticle){
            a.art
        }

    }
    catch (e) {
        next(e)
    }
}

exports.deleteListeArticle = async (req,res,next) =>{
    const listeArticleId = req.params.listeArticleId;

    try{
       const listeArticle = await ListeArticle.findById(listeArticleId);

        if (!listeArticle) {
            const error = new Error("La liste d'articles n'a pas été trouvée.");
            error.statusCode = 404;
            throw error;
        }

        await listeArticle.remove();
        res.status(204).send();

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
    try {
        const liste = await Liste.findById(idListe);
        if(!liste){
            const error = new Error("Cette liste n'existe pas");
            error.statusCode = 404;
            throw error;
        }
        return liste;
    } catch (error) {
        throw error;
    }
}
