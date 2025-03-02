
const service=require('../service/api');
const apicontroller={
    
    genAddress(req, res) {
        const id=req.body.id;
        console.log('payload:',req.auth);
        service.genAddress(id).then(result=>{res.json(result);})
        
      },

      genAddressList(req, res) {
        
            service.genAddressList(1).then(result=>{
                res.json(result)});
            
 
        
       },

};
module.exports=apicontroller



