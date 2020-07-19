const mongoose = require('mongoose');
const { config } = require('../configs/index');

mongoose.connect(config.DB.URL, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(succuss => console.log('Connected to MongoDB server')).
    catch(error => console.log(error));
