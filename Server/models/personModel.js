const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    profilePic:{
        type: String,
        default: 'https://preview.redd.it/b2mnsaeuv3l71.png?width=400&format=png&auto=webp&s=414cad997577f938f67acea1c28b3584cd93957e'
    }
});
module.exports = mongoose.model('person',personSchema);