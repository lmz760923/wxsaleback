var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/index');
const db = require('../dao/db');
const multer=require('multer');
const mystorage=multer.diskStorage({
  destination:function(req,file,cb){cb(null,'public/');},
  filename:function(req,file,cb){cb(null,file.originalname);}
});
/* GET users listing. */
router.post('/', function (req, res) {
  console.log(req.body)
  const {name,password}=req.body.user;
  db.query('select * from user where name=? and password=?', [name, password], (err, results) => {
    if (!err && results.length>0) {
      const token = jwt.sign({ name }, jwtConfig.jwtSecret, { expiresIn: "3000s" });
      res.send({
        status: 200,
        msg: 'success',
        token,
      });
    }
    else{
      res.send({
        status: 401,
        msg: 'fail',

      });
    }
  });


});

router.post('/upload',multer({storage:mystorage}).single('file'), function (req, res) {
  console.log(req.body.name);
  console.log(req.body.password);
  res.json({code:0,msg:'success'});

});

module.exports = router;