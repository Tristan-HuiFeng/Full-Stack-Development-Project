const express = require('express');
const router = express.Router();
const alertMessage = require('../helpers/messenger.js');

let admin = true //display admin features

let storeCategories = [{'category':'tech lead'}, {'category': 'not tech lead'}]

router.get('/', (req,res) => {
    res.render('index', {admin})
});

router.get('/addProduct', (req,res) =>{
    res.render('product/addProduct', {admin, storeCategories})
});

module.exports = router;