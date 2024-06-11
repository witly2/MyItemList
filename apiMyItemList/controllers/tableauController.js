"use strict"

const Article = require('../models/article');
const Liste = require('../models/tableau');
const ListeArticle = require('../models/articleTableau');

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

        if (listes.length===0) {
            const error = new Error('Aucune liste trouvé.');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            listes: listes
        });
    }
    catch (e) {
        next(e)
    }
}
    
