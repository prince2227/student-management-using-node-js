const express = require('express');
const sequelize = require('./utils/dbconnect');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

const allRoute = require('./routes/allRoutes');
const { Result } = require('express-validator');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({limit: '500mb',extended:false}));
app.use(bodyparser.json());
app.use('/',allRoute);


sequelize.sync().then(result=>{
    app.listen(3000,()=>{
        console.log('server is running on port 3000');
    });
});

