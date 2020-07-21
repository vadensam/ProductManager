const ProdController = require("../controllers/prod.controller")

module.exports = function(app){
    app.get('/api', ProdController.findAll);
    app.post('/api/create', ProdController.create);






}