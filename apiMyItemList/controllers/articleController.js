"use strict"

const Article = require('../models/article');
const Tableau = require('../models/tableau');
const ArticleTableau = require('../models/articleTableau');

exports.addListeArticle = async (req, res,next)=>{
    
    const {name, unit_price, quantity, description, idTableau} = req.body;
    
    try {
        const article = await getOrAddArticle(name);

        const liste = await checkListExist(idTableau);
        
    
        let listeArticle = new ArticleTableau({
            unit_price:unit_price,
            tableau: liste,
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
        const listeId = req.params.tableauId;
        const liste = await checkListExist(listeId);

        const result = await ArticleTableau
            .find({ tableau: liste })
            .populate({
                path: 'Article', 
            })
            .sort({ createdAt: -1 });
        


    }
    catch (e) {
        next(e)
    }
}

exports.deleteListeArticle = async (req,res,next) =>{
    const articleTableauId = req.params.listeArticleId;

    try{
       const articleTableau = await articleTableau.findById(articleTableauId);

        if (!articleTableau) {
            const error = new Error("La liste d'articles n'a pas été trouvée.");
            error.statusCode = 404;
            throw error;
        }

        await articleTableau.remove();
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
        const tableau = await Tableau.findById(idListe);
        if(!tableau){
            const error = new Error("Cette tableau n'existe pas");
            error.statusCode = 404;
            throw error;
        }
        return tableau;
    } catch (error) {
        throw error;
    }
}
