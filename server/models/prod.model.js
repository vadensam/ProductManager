const mongoose = require('mongoose');

const ProdSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 3},
    price: {type: Number, required: true},
    desc: {type: String, required: true, minlength: 5}
    
}, {timestamps: true})

module.exports.Prod = mongoose.model("Prod", ProdSchema)