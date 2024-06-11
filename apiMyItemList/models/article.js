const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema(
    {
       
      
        name: {
            type: String,
            required: [true,"échec, pas de nom"],
            unique: [true, "le nom de l'article doit être unique"]
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model('Article', articleSchema);
