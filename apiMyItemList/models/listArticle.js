const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListeArticleSchema = new Schema(
    {
        unit_price: {
            type: Number,
            default: 0,
        },
        isPaid: {
            type: Boolean,
            default: false
        },
        quantity: {
            type: Number,
            default:0
        },
        article:{
            type: Schema.Types.ObjectId,
            ref: 'Article',
            
        },
        liste:{
            type: Schema.Types.ObjectId,
            ref: 'Liste',

        },
        description:{
            type:String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('ListeArticle', ListeArticleSchema);
