const mongoose = require('mongoose');
const Schema = mongoose.Schema
const QueryImages = new mongoose.Schema({
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
    relatedImages: [{
        type: Schema.Types.ObjectId,
        //type: originalname,
        ref: "RImages"
    }],
});

const QImages = mongoose.model('QImages',QueryImages);

module.exports = QImages;