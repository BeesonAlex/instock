const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./data/data');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.listen(8080, function() {
    console.log('Instock Data Ready'); 
});