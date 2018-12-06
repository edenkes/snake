const express = require('express');
const request = require('request');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @decs Get all Items
// @access Public
router.get('/', (req, res) => {
    console.log('Time: ', Date.now());
    Item.find()
        .then(items => {
            // console.log("here",             res.json(items));
            res.json(items)
        })
});

// @route POST api/items
// @decs Create a Post
// @access Public
router.post('/', (req, res) => {
    // const newItem = new Item({
    //     domain: req.body.domain,
    //     count: "45"
    // });

    // newItem.save().then(item => res.json(item));

    // hh
    const HTML_FILE_URL = "https://www." + req.body.domain + "/ads.txt";
    request.get(HTML_FILE_URL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send(getTable(body))
        }
        else {
            console.log(error);
            res.send([])
        }
    });
});

module.exports = router;

getTable = text => {
    const counterTable = new Map();
    const lines = text.split('\n');
    for(let i = 0; i < lines.length; i++){
        //code here using lines[i] which will give you each line
        if (lines[i].charAt(0) !== '#'){
            const domainName = lines[i].split(',')[0].replace(/\s/g, '').toLowerCase();
            if(domainName && domainName.length > 4){
                counterTable.get(domainName) ?
                    counterTable.set(domainName, counterTable.get(domainName) + 1) :
                    counterTable.set(domainName, 1);
            }
        }
    }

    const items = [];
    counterTable.forEach((value, key) => {
        // console.log(value, " key ", key);
        // items.push({"_id":uuid(),"domain":key,"count": value,"data":"2018-12-03T00:44:16.324Z"})
        items.push({"domain":key,"count": value})

    });
    return items;
};