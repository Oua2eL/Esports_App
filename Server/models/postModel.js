const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    title: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
},
    price: {
        type: String,
        required: true,
    },
    quantity :{
        type: Number,
        required: true,
},
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'person',
    },
});
module.exports = mongoose.model('post', postSchema);