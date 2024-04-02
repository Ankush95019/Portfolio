const express = require('express');
const router = new express.Router();
const controllers = require('../controllers/contactinfoController');


// contactinfo

router.post('/contactform',controllers.contactform);



module.exports = router;