const ProdController = require("../controllers/prod.controller")

module.exports = function(app){
    app.get('/api/products', ProdController.findAll);
    app.post('/api/create', ProdController.create);
    app.get('/api/products/:id', ProdController.findOne);
    app.put('/api/products/:id', ProdController.editOne);
    app.delete('/api/products/:id', ProdController.deleteOne);




}