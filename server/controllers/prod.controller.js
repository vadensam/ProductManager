const {Prod} = require("../models/prod.model");

module.exports.create = (req,res) => {
    console.log(req.body)
    Prod.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.findAll = (req,res) =>{
    Prod.find()
        .then(data => res.json({ products: data}))
        .catch(err => res.json({message: "Something Bad", error: err}))
}