const {Prod} = require("../models/prod.model");

module.exports.create = (req,res) => {
    console.log(req.body)
    Prod.create(req.body)
        .then(data => res.json({message: "success", result: data}))
        .catch(err => res.json({message: "error", result: err}))
}

module.exports.findAll = (req,res) =>{
    Prod.find({})
        .then(data => res.json({message: "success", result: data}))
        .catch(err => res.json({message: "Something Bad", error: err}))
}

module.exports.findOne = (req, res) =>{
    Prod.findOne({ _id: req.params.id })
        .then(prod => res.json({message: "success", result: prod}))
        .catch(err => res.json({message: "error", result: err}))
}

module.exports.editOne = (req, res) => {
    Prod.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true})
        .then(data => res.json({message: "success", result: data}))
        .catch(err=>res.json({message: "error", result: err}))
}

module.exports.deleteOne = (req, res) => {
    Prod.findOneAndDelete({ _id: req.params.id})
        .then(data => res.json({message: "success", result: data}))
        .catch(err => res.json({message: "error", result: err}))
}