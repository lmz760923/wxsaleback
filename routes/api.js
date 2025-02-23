var express = require('express');
var router = express.Router();
var db=require('../dao/db');
const { resolveInclude } = require('ejs');

function genAddress(id) {
  return new Promise((resolve,reject)=>{
    db.query('select * from user_address where id=?',[id],(err,results)=>{
      if (err) {reject(err);}
      if (results.length==0){resolve({})}
      else resolve(results[0]);
    });
  });

}

function genAddressList(uid) {
  return new Promise((resolve,reject)=>{
    db.query('select * from user_address where uid=?',[uid],(err,results)=>{
      if (err) {reject(err);}
      
      else resolve(results);
    });
  });
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({code:0,message:'ok'});
});

router.post('/genAddress', async function(req, res) {
  const id=req.body.id;
  console.log('payload:',req.auth);
  let result=await genAddress(id);
  res.json(result);
});

router.post('/genAddressList',async function(req, res) {
   const token=null;
   let result=await genAddressList(1);
   res.json(result);
  });


module.exports = router;