const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established connection to DB"))
    .catch(err => console.log("Something went wrong", err))