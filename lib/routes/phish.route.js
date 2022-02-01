const express = require("express");
const router = new express.Router;

const phishController = require('../controllers/phish.controller');


router.get('/phish/:addr', (req, res) => {
    console.log('New phishing link was pressed')
    phishController.newPhish(req, res, req.params.addr);   
})

module.exports = router;