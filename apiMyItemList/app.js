const express = require('express');
const mongoose = require('mongoose');
var hateoasLinker = require('express-hateoas-links');

const tableauArticle = require('./routes/tableauArticle');
const article = require('./routes/article')
const config = require('./config');
const err = require("./controllers/errorController")

const app = express();
const PORT = config.PORT;
const MONGO_URL = config.MONGO_URL

app.use(express.json());



app.use(hateoasLinker);


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
const cors = require("cors");


// Utilisation des routes en tant que middleware
app.use(article)
app.use(tableauArticle)
app.use(err.get404);
app.use(err.getErrors)







mongoose
    .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Node.js est à l\'écoute sur le port %s ', PORT);
        });
    })
    .catch(err => console.log(err));

module.exports = app; 