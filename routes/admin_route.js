const express = require('express');
const router = express.Router();
const alertMessage = require('../helpers/messenger.js');

//dev log
//added routing to respective webstie
//using dummy data for demonstrations

let admin = true //display admin features

let storeCategories = [{'category':'tech lead'}, {'category': 'not tech lead'}] //dummy data

let inventory = [{'itemID':'1','itemName':'Tristan','itemCost':'FOC', 'itemStock':'69'},
{'itemID':'2','itemName':'Jun Hui','itemCost':'FOC', 'itemStock':'69'},
{'itemID':'3','itemName':'Hieu','itemCost':'FOC', 'itemStock':'69'},
{'itemID':'4','itemName':'Matthew','itemCost':'FOC', 'itemStock':'69'}] //dummy data


router.get('/addProduct', (req,res) =>{
    res.render('product/addProduct', {admin, storeCategories})

router.get('/', (req, res) => {
    res.render('admin/overview', {title:"admin", navbar:"admin"}); 
});


module.exports = router;