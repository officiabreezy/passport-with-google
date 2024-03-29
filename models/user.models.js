const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: {type: String, unique:true},
    thumbnail: String
});


const User= mongoose.model('user', userSchema);


module.exports = User;
