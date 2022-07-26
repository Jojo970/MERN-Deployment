const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crmdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("Connection to Database was established")).catch((err) => console.log("Error in connecting to database", err));