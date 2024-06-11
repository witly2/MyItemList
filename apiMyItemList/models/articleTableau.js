const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleTableauSchema = new Schema(
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
        
        tableau:{
            type: Schema.Types.ObjectId,
            ref: 'Tableau',

        },
        description:{
            type:String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('TableauArticles', ArticleTableauSchema);
