const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./data/data');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

const getData = (req, res) => {
    res.json(data)
}

app.route('/data')
    .get(getData);

app.listen(8080, function() {
    console.log('Instock Data Ready'); 
});