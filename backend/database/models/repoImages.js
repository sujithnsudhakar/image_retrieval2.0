const mongoose = require('mongoose');
const Schema = mongoose.Schema
const RepoImages = new mongoose.Schema({
    fieldname: {
        type: String,
        trim: true
    },
    originalname: {
        type: String,
        trim: true
    },
    encoding: {
        type: String,
        trim: true
    },
    mimetype: {
        type: String,
        trim: true
    },
    destination: {
        type: String,
        trim: true
    },
    filename: {
        type: String,
        trim: true
    },
    path: {
        type: String,
        trim: true
    },
    size: {
        type: Number,
        trim: true
    },
    query:{
        type: Schema.Types.ObjectId,
        ref: "QImages" 
    }
});

const RImages = mongoose.model('RImages',RepoImages);

module.exports = RImages;