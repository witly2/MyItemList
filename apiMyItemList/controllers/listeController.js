"use strict"

const Article = require('../models/article');
const Liste = require('../models/liste');
const ListeArticle = require('../models/listArticle');

exports.addListe = async (req, res, next) =>{
    const name = req.body.name
    
    try {
        const liste = new Liste({name:name});
        const result = await liste.save();
        res.location("/liste/" + result.id);
        res.status(201).json(result)
    }
    catch (e) {
        next(e)
    }
}
    

exports.getListes = async (req, res, next) =>{
    try{
        const listes = await Liste.find()
            .sort({ createdAt: -1 });
    }
    catch (e) {
        next(e)
    }
}
    
