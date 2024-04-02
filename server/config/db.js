const mongoose = require('mongoose');
const {connect} = mongoose;
require('dotenv').config();
const URI = process.env.DATABASE;

const dbConnect = async () => {
  try{
    await connect(`${URI}`);
    console.log('Database is connected');
  }
  catch(err){
    console.log(err);
  }
};

module.exports = dbConnect;





