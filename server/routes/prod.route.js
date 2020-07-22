const ProdController = require("../controllers/prod.controller")

module.exports = function(app){
    app.get('/api/products', ProdController.findAll);
    app.post('/api/create', ProdController.create);
    app.get('/api/products/:id', ProdController.findOne);






}