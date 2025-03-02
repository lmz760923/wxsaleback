const express = require('express');
const router = express.Router();
const apicontroller=require('../controller/api.js');
/* GET users listing. */
router.get('/', function(req, res) {
  res.json({code:0,message:'ok'});
});

router.post('/genAddress', apicontroller.genAddress);

router.post('/genAddressList',apicontroller.genAddressList);


module.exports = router;