const mysql=require('mysql2');
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root123456',
    database:'wxsale'
});
console.log('mysql initialize completed');
module.exports=pool;