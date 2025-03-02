const db=require('../dao/db.js');

const apiservice= {
 genAddress(id) {
    return new Promise((resolve,reject)=>{
      db.query('select * from user_address where id=?',[id],(err,results)=>{
        if (err) {reject(err);}
        if (results.length==0){resolve({})}
        else resolve(results[0]);
      });
    });
  
  },
  
   genAddressList(uid) {
    return new Promise((resolve,reject)=>{
      db.query('select * from user_address where uid=?',[uid],(err,results)=>{
        if (err) {reject(err);}
        
        else resolve(results);
      });
    });
  }

};

module.exports=apiservice


