
const service=require('../service/api');
const apicontroller={
    async genAddressList(req, res) {
        const token=null;
        let result=await service.genAddressList(1);
        res.json(result);
       },
    async genAddress(req, res) {
        const id=req.body.id;
        console.log('payload:',req.auth);
        let result=await service.genAddress(id);
        res.json(result);
      }

};
module.exports=apicontroller



