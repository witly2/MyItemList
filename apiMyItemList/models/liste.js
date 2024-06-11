const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listeSchema = new Schema(
    {


        name: {
            type: String,
            required: [true,"échec, pas de nom"],
            minlength: [5, 'Le nom doit contenir au moins 5 caractères'],
            maxlength: [50, 'Le nom doit contenir au plus 50 caractères'],
        },
   

    },
    { timestamps: true }
);

module.exports = mongoose.model('Liste', listeSchema);
