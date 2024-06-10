const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema(
    {
       
      
        name: {
            type: String,
            required: [true,"échec, pas de nom"],
            unique: true
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model('Article', articleSchema);
