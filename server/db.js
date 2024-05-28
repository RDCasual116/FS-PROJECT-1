require('dotenv').config();
const {Pool}=require('pg');
const db=new Pool({
host:process.env.HOST,
user:process.env.USER,
password:process.env.PASSWORD,
database:process.env.DATABASE,
port:process.env.PORT
});
module.exports={
query:(q,params)=>db.query(q,params)
}

